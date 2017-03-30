import React from 'react'
import { Link } from 'react-router'
import reghome from './../../../images/user/home_b.png'
import qq from './../../../images/user/qq.png'
import sina from './../../../images/user/sina.png'
import cancel from './../../../images/user/cancel_b.png'
import $ from 'jquery'

class Register extends React.Component {
	constructor (props) {
	    super(props)
	    this.state={
	    	shows:false
	    }
	}
	componentDidMount(){
		
		
		$("#button").click(function(){
			var phone=$("#pho").val();
			var code=$("#code").val();
			var pas=$("#pas").val();
			var repas=$("#repas").val();
			if(phone == "" || code == "" || pas == "" || repas == ""){
				$("#title").html("请完善信息！")
				$("#title").css({"display":"block"})
				$("#title").animate({"opacity":"1"},500,function(){
					$("#title").delay(2000).animate({"opacity":"0"},500,function(){
						$("#title").css({"display":"none"})
					})
				})
			}else if(pas != repas){
				$("#title").html("两次密码不一致！")
				$("#title").css({"display":"block"})
				$("#title").animate({"opacity":"1"},500,function(){
					$("#title").delay(2000).animate({"opacity":"0"},500,function(){
						$("#title").css({"display":"none"})
					})
				})
			}
		})
		
	}
	render(){
		return (
			<div className="register">
				<header>
					<Link className="back" to="/board"><img src={reghome} /></Link>
					<h2>会员注册</h2>
					<Link className="log" to="/login">登陆</Link>
				</header>
				<div className="regContent">
					<form action="" method="" name="">
						<div className="phone">
							<label htmlFor="pho">手机号</label>
							<input type="text" id="pho" placeholder="请输入手机号" />
						</div>
						<div className="code">
							<label htmlFor="code">验证码</label>
							<input type="text" id="code" placeholder="请输入验证码" />
							<p>获取验证码</p>
						</div>
						<div className="pas">
							<label htmlFor="pas">密码</label>
							<input type="password" id="pas" placeholder="请输入密码" />
						</div>
						<div className="repas">
							<label htmlFor="repas">重复密码</label>
							<input type="password" id="repas" placeholder="请确认密码" />
						</div>
					</form>
					<div className="btn">
						<input type="button" id="button" value="注册" />
					</div>
					<div id="title">
						
					</div>
				</div>
				<div className="joint">
					<div className="title">
						<p>点击以下图标面注册/直接登录</p>
					</div>
					<div className="logImg">
						<Link to=""><img src={qq} /></Link>
						<Link to=""><img src={sina} /></Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Register