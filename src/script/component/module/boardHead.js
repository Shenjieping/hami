import React from "react"
import { Link } from "react-router"
import logo from './../../../../images/1111.png'
import soso from './../../../../images/search_ico.png'
import more from './../../../../images/catgray_w.png'


class boardHead extends React.Component{
	render(){
		return (
			<div className="yo-header yo-header-a">
				<h2 className="title">
		      		<Link to="/search">
		      			<img src={soso} />
		      			<span>搜索果蔬、美食、家电、母婴</span>
		      		</Link>
	      		</h2>
	      		<span className="regret"><img src={logo} /></span>
	      		<span className="affirm"><Link to="/kind"><img src={more} /></Link></span>
			</div>
		)
	}
}

export default boardHead;
