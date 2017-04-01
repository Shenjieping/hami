import React from "react"
import { Link } from "react-router"

import Back from "./../../../images/kind/arrow_left_w.png"
import sh from "./../../../images/search_ico.png"


class Search extends React.Component {
	constructor (props) {
	    super(props)
	    this.state = {
	    	shows:[]
	    }
	}
	componentDidMount(){
		console.log(this.refs.txt.focus())
	}
	back(){
		window.history.go(-1);
	}
	handleChange(event){
		//console.log(event.target.value)
		var txtVal=event.target.value
	}
	render(){
		return (
			<div className="search">
				<header>
					<span className="back" onClick={this.back}><img src={Back} /></span>
					<h2 className="soso">
						<img src={sh} />
						<input ref="txt" onChange={this.handleChange} type="text" />
					</h2>
					<Link to="" className="ser">搜索</Link>
				</header>
				<p className="hot">热门搜索</p>
				<div className="hotShop">
					
				</div>
			</div>
		)
	}
}

export default Search;