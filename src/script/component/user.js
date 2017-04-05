import React from 'react';
import { Link } from 'react-router'

import myOrder from './../../../images/user/mc_01.png';
import allOrder from './../../../images/user/arrow_right_b.png';
import payment from './../../../images/user/order-dzf.png';
import takegoods from './../../../images/user/order-dsh.png';
import complate from './../../../images/user/order-dpj.png';
import refund from './../../../images/user/order-thh.png';

import inte_center from './../../../images/user/quan.png';

import shop_collect from './../../../images/user/i_1.png';
import store_collect from './../../../images/user/i_2.png';
import heel from './../../../images/user/i_3.png';
import back_info from './../../../images/user/i_4.png';
import my_asset from './../../../images/user/mc_02.png';
import consigeen from './../../../images/user/mc_03.png';
import invite from './../../../images/user/mc_08.png';
import my_invite from './../../../images/user/mc_09.png';
import my_monry from './../../../images/user/i_5.png';
import voucher from './../../../images/user/i_6.png';
import packed from './../../../images/user/i_7.png';
import sign_in from './../../../images/user/i_8.png';

import set from './../../../images/user/mc_04.png';
import loca from './../../../images/user/mc_07.png';
import help from './../../../images/user/mc_01.png';
import default_user from './../../../images/user/default_user.png';

import sethead from './../../../images/user/set_w.png'
import morehead from './../../../images/user/more_w.png'

import Scroller from './../../component_dev/scroller/src'

class User extends React.Component{
	constructor (props) {
	    super(props)
	    this.state = {
	    	isLoding:"false",
	    	username:"",
	    	log:"/login",
	    	sets:""
	    }
	}
	componentWillMount(){
		if(localStorage.getItem("username")){
			this.setState({
				isLoding:"true",
				username:localStorage.getItem("username"),
				log:"",
				sets:"/set"
			})
		}else{
			this.setState({
		    	isLoding:"false",
		    	username:"",
		    	log:"/login",
		    	sets:"/login"
		    })
		}
	}
	render(){
		return (
			<div className="m-user">
				<Scroller scrollY={true} bounce={false}>
					<div className="head">
						<Link to={this.state.log} className="login-box ani elastic-in-down">
							<div className="login"><img style={{display:this.state.isLoding=="true"? "block" : "none"}} src={default_user} /></div>
							<p style={{display:this.state.isLoding=="false"? "block" : "none"}}>点击登录</p>
							<p style={{display:this.state.isLoding=="true"? "block" : "none"}}>{this.state.username}</p>
						</Link>
						<div className="userHead">
				      		<Link to={this.state.sets} className="kindre"><img src={sethead} /></Link>
				      		<Link to="" className="affirm"><img src={morehead} /></Link>
						</div>
					</div>
					<div className="myfom">
						<div className="order">
							<a href="#" className="myOrder"><img src={myOrder} /> 我的订单</a>
							<a href="#" className="allOrder">查看全部订单 <img src={allOrder} /></a>
						</div>
						<ul className="wait">
							<li><a href="#"><img src={payment} /><span>待付款</span></a></li>
							<li><a href="#"><img src={takegoods} /><span>待收货</span></a></li>
							<li><a href="#"><img src={complate} /><span>已完成</span></a></li>
							<li><a href="#"><img src={refund} /><span>退款/退货</span></a></li>
						</ul>
					</div>
					<div className="integral">
						<a href="#" className="integral-left">
							<img src={inte_center} />
							<p>积分中心</p>
						</a>
						<div className="integral-middle">
							<a href="#" className="shop-inte">
								<p className="look">去看看</p>
								<p>店铺积分</p>
							</a>
							<a href="#" className="n-inte">
								<p className="look">N</p>
								<p>我的积分</p>
							</a>
						</div>
						<div className="integral-right">
							<a href="#" className="logo-inte">
								<p className="look">去看看</p>
								<p>积分日志</p>
							</a>
							<a href="#" className="store-inte">
								<p className="look">去兑换</p>
								<p>积分商城</p>
							</a>
						</div>
					</div>
					
					<div className="menu">
						<a href="#" className=""><img src={shop_collect} /><span>商品收藏</span></a>
						<a href="#" className=""><img src={store_collect} /><span>店铺收藏</span></a>
						<a href="#" className=""><img src={heel} /><span>足迹</span></a>
						<a href="#" className="back_info"><img src={back_info} /><span>投诉反馈</span></a>
						<a href="#" className=""><img src={my_asset} /><span>我的财产</span></a>
						<a href="#" className=""><img src={consigeen} /><span>收货地址</span></a>
						<a href="#" className=""><img src={invite} /><span>邀请码图片</span></a>
						<a href="#" className="my_invite"><img src={my_invite} /><span>我的邀请</span></a>
						<a href="#" className="my_monry"><img src={my_monry} /><span>我的存款</span></a>
						<a href="#" className="voucher"><img src={voucher} /><span>代金券</span></a>
						<a href="#" className="packed"><img src={packed} /><span>红包</span></a>
						<a href="#" className="sign_in"><img src={sign_in} /><span>积分签到</span></a>
					</div>
					<div className="set">
						<div>
							<img src={set} />
							<span>我的设置</span>
						</div>
						<img src={allOrder} />
					</div>
					<div className="loca">
						<div>
							<img src={loca} />
							<span>我的定位</span>
						</div>
						<img src={allOrder} />
					</div>
					<div className="help">
						<div>
							<img src={help} />
							<span>帮助中心</span>
						</div>
						<img src={allOrder} />
					</div>
				</Scroller>
			</div>
		)
	}
}

export default User;