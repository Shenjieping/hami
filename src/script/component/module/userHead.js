import React from "react"
import set from './../../../../images/user/set_w.png'
import more from './../../../../images/user/more_w.png'


class boardHead extends React.Component{
	render(){
		return (
			<div className="userHead">
	      		<span className="kindre"><img src={set} /></span>
	      		<span className="affirm"><img src={more} /></span>
			</div>
		)
	}
}

export default boardHead;
