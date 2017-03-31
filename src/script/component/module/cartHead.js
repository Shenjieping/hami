import React from "react"
import arrow_left_b from './../../../../images/cart/arrow_left_b.png'
import soso from './../../../../images/search_ico.png'
import more_b from './../../../../images/cart/more_b.png'


class kindHead extends React.Component{
	Back(){
		window.history.go(-1)
	}
	render(){
		return (
			<div className="carthead">
	      		<span className="kindre" onClick={this.Back}><img src={arrow_left_b} /></span>
	      		<h2 className="title">
	      			购物车
	      		</h2>
	      		<span className="affirm"><img src={more_b} /></span>
			</div>
		)
	}
}

export default kindHead;
