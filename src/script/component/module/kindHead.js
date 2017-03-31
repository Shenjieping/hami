import React from "react"
import { Link } from 'react-router'
import arrow_left from './../../../../images/kind/arrow_left_w.png'
import soso from './../../../../images/search_ico.png'
import more from './../../../../images/kind/more_w.png'


class kindHead extends React.Component{
	clickMore(){
		alert(1)
	}
	Back(){
		window.history.go(-1)
	}
	render(){
		return (
			<div className="kindhead">
	      		<span className="regret kindre" onClick={this.Back}><img src={arrow_left} /></span>
	      		<h2 className="title">
	      			<img src={soso} />
	      			<Link to=""></Link>
	      		</h2>
	      		<span className="affirm" onClick={this.clickMore.bind(this)}><img src={more} /></span>
				<div className="more"></div>
			</div>
		)
	}
	componentDidMount(){
		
	}
}

export default kindHead;
