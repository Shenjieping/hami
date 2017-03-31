import React from "react"
import arrow_left from './../../../../images/kind/arrow_left_w.png'
import soso from './../../../../images/search_ico.png'
import more from './../../../../images/kind/more_w.png'


class kindHead extends React.Component{
	render(){
		return (
			<div className="yo-header yo-header-a kindhead">
	      		<h2 className="title">
	      			购物车
	      		</h2>
	      		<span className="kindre"><img src={arrow_left} /></span>
	      		<span className="affirm"><img src={more} /></span>
			</div>
		)
	}
}

export default kindHead;
