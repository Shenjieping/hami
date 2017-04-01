import React from "react"
import { Link } from 'react-router'
import back from "./../../../images/user/arrow_left_w.png"
import more from "./../../../images/user/more_w.png"
import right from "./../../../images/user/arrow_right_b.png"


class Set extends React.Component {
	constructor(props){
		super(props);
		this.state={
			quit:""
		}
	}
	back(){
		window.history.go(-1)
	}
	quites(){
		if(localStorage.getItem("username")){
			localStorage.removeItem("username");
			
		}
	}
	render(){
		return (
			<div className="set">
				<header>
					<span onClick={this.back} className="back"><img src={back} /></span>
					<h2 className="title">设置</h2>
					<span className="more"><img src={more} /></span>
				</header>
				<div className="list">
					<Link to="">
						<p>
							<span className="head">登录密码</span>
							<span className="con">建议您定期更换密码以保护账户安全</span>
						</p>
						<span className="right"><img src={right} /></span>
					</Link>
					<Link to="">
						<p>
							<span className="head">手机绑定</span>
							<span className="con">若你的手机已丢失或停用,请立即修改更换</span>
						</p>
						<span className="right"><img src={right} /></span>
					</Link>
					<Link to="" className="pay">
						<p>
							<span className="head">支付密码</span>
							<span className="con">建议设置复杂的支付密码保护账户金额安全</span>
						</p>
						<span className="right"><img src={right} /></span>
					</Link>
					<Link to="" className="signal">
						<p>
							<span className="head">用户反馈</span>
							<span className="con">您在使用中遇到的问题与建议可向我们反馈</span>
						</p>
						<span className="right"><img src={right} /></span>
					</Link>
				</div>
				<div className="btn">
					<Link onClick={this.quites} to="/user">安全退出</Link>
				</div>
			</div>
		)
	}
}

export default Set;
