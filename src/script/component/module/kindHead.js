import React from "react"
import arrow_left from './../../../../images/kind/arrow_left_w.png'
import soso from './../../../../images/search_ico.png'
import more from './../../../../images/kind/more_w.png'


class kindHead extends React.Component{
	clickMore(){
		alert(1)
	}
	render(){
		return (
			<div className="yo-header yo-header-a kindhead">
	      		<h2 className="title">
	      			<img src={soso} />
	      			<span></span>
	      		</h2>
	      		<span className="regret kindre"><img src={arrow_left} /></span>
	      		<span className="affirm" onClick={this.clickMore.bind(this)}><img src={more} /></span>
				<div className="more"></div>
			</div>
		)
	}
	componentDidMount(){
		
	}
}

export default kindHead;
