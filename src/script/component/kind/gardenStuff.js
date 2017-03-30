import React from 'react'
import { Link } from 'react-router'
class gardenStuff extends React.Component {
	constructor (props) {
	    super(props)
	    this.state = {
	    	list:[],
	    	show:true
	    }
	}
	render(){
		return (
			<div className="k-gardenStuff">
				<dl className="categroy-child-list">
					{this.state.list}
				</dl>
				{this.props.children}
			</div>
		)
	}
componentDidMount(){
    fetch('http://www.hamij.com/mobile/index.php?act=goods_class&op=get_child_all&gc_id=7')
        .then((res) => {
        	return res.json()
        })
        .then((res) => {
			console.log(res.datas.class_list)
			var listchild=res.datas.class_list[0].child.map(function(item,index){
				return (
					<dd>
						<Link to={'/productList/' + "goods_id?goods_id=" + item.gc_id }>{item.gc_name}({item.goods})</Link>
					</dd>
		        );
			})
			var listdata=res.datas.class_list.map(function(item,index){
				return (
					<div>
						<dt><Link to={'/productList/' + "goods_id?goods_id=" + item.gc_id }>{item.gc_name}({item.goods})</Link></dt>
						{listchild}
					</div>
		        );
			})
		
        	this.setState({
	      		list: listdata
        	})
        })
        .catch((e) => { 
        	console.log(e.message) 
        })
	}
}
export default gardenStuff;