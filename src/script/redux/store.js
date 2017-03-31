import { createStore } from "redux"

function changer(state={title:"1"},action){
	switch (action.type) {
		case "SETTITLE":
			return { 
				title:action.title
			}
		default:
			return state;
	}
}
//将redux的state转化成组件的props
function mapStateToProps(state){
	return {
		value:state.title
	}
}
//将redux的action转化成组件的props
function mapDispatchToProps(dispatch){
	return {
		onChange:(action) => dispatch(action) 
	}
}

let store = createStore(changer)

export { mapStateToProps,mapDispatchToProps,store }
