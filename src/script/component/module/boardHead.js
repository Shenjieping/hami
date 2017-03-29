import React from "react"
import logo from './../../../../images/1111.png'
import soso from './../../../../images/search_ico.png'
import more from './../../../../images/catgray_w.png'


class boardHead extends React.Component{
	render(){
		return (
			<div className="yo-header yo-header-a">
	      		<h2 className="title">
	      			<img src={soso} />
	      			<span>搜索果蔬、美食、家电、母婴</span>
	      		</h2>
	      		<span className="regret"><img src={logo} /></span>
	      		<span className="affirm"><img src={more} /></span>
			</div>
		)
	}
}

export default boardHead;
