import React from "react"
import { Link } from 'react-router'
import arrow_left_b from './../../../../images/cart/arrow_left_b.png'
import soso from './../../../../images/search_ico.png'
import more_b from './../../../../images/cart/more_b.png'
import goHome from './../../../../images/kind/home_w_3.png'
import goCart from './../../../../images/kind/cart_w_3.png'
import goUser from './../../../../images/kind/member_w_3.png'
import goInfo from './../../../../images/kind/message_w.png'


class kindHead extends React.Component{
	constructor (props) {
	    super(props)
	    this.state = {
	    	shows:true
	    }
	}
	clickMore(){
		if(this.state.shows){
			this.setState({
		    	shows:false
		    })
		}else{
			this.setState({
		    	shows:true
		    })
		}
	}
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
	      		<span className="affirm"  onClick={this.clickMore.bind(this)}><img src={more_b} /></span>
	      		<div className="more" style={{display:this.state.shows==false?'block':'none'}}>
					<span className="quire"></span>
					<ul className="list">
						<li><Link to="/board"><img src={goHome} />首页</Link></li>
						<li><Link to="/cart"><img src={goCart} />购物车</Link></li>
						<li><Link to="/user"><img src={goUser} />我的商城</Link></li>
						<li><Link to=""><img src={goInfo} />消息</Link></li>
					</ul>
				</div>
			</div>
		)
	}
}

export default kindHead;
