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
	titleFn(){
		$("#title").css({"display":"block"})
		$("#title").animate({"opacity":"1"},500,function(){
			$("#title").delay(2000).animate({"opacity":"0"},500,function(){
				$("#title").css({"display":"none"})
			})
		})
	}
	componentDidMount(){
		var that=this;
		var a=0;
		$("#save").click(function(){
			var pho=$("#pho").val();
			var num="";
			if(pho=="" || !(/^1[34578]\d{9}$/.test(pho))){
				$("#title").html("请输入正确的手机号码！")
				that.titleFn()
			}else{
				for(var i=0;i<6;i++){
					num+=Math.floor(Math.random()*10)
				}
				a=num;
				$("#phoneNum").text("验证码："+num)
				$("#phoneNum").css({"display":"block"})
				$("#phoneNum").animate({"opacity":1},500,function(){
					$("#phoneNum").delay(10000).animate({"opacity":0},500,function(){
						$("#phoneNum").css({"display":"none","opacity":1})
					})
				})
			}
		})
		$("#button").click(function(){
			var phone=$("#pho").val();
			var code=$("#code").val();
			var pas=$("#pas").val();
			var repas=$("#repas").val();
			if(phone == "" || code == "" || pas == "" || repas == ""){
				$("#title").html("请完善信息！")
				that.titleFn()
			}else if(pas != repas){
				$("#title").html("两次密码不一致！")
				that.titleFn()
			}else if(code !=a){
				$("#title").html("请输入正确的验证码！")
				that.titleFn()
			}else{
				
				$.ajax({
					type:"get",
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					data:{
						status:"register",
						userID:phone,
						password:pas
					},
					success:function(data){
						console.log(data)
						if(data==1){
							$("#title").html("注册成功！")
							that.titleFn()
							setTimeout(function(){
								window.location.href="/#/login"
							},2000)
						}else if(data == 0){
							$("#title").html("用户名已存在！")
							that.titleFn()
						}else{
							$("#title").html("数据库异常，请稍后！")
							that.titleFn()
						}
						
					}
				});
				
				/**/
				
			}
		})
		$('#pas').bind('input propertychange', function() { 
			var pass=$('#pas').val()
			//console.log(pass.length)
		   	if((pass.length<6) && pass != "" && (/^\d$/.test(pass))){
		   		$(".check").css({"display":"block"})
		   		$(".check1").css({"display":"inline-block"})
		   		$(".check2").css({"display":"none"})
		   		$(".check3").css({"display":"none"})
		   	}else if((pass.length<12) && (pass.length>6) && (/[a-z][0-9][A-Z]/g.test(pass))){
		   		$(".check1").css({"display":"inline-block"})
		   		$(".check2").css({"display":"inline-block"})
		   		$(".check3").css({"display":"none"})
		   	}else if((pass.length>12)){
		   		$(".check1").css({"display":"inline-block"})
		   		$(".check2").css({"display":"inline-block"})
		   		$(".check3").css({"display":"inline-block"})
		   	}else if(pass.length==""){
		   		$(".check").css({"display":"none"})
		   		$(".check1").css({"display":"none"})
		   		$(".check2").css({"display":"none"})
		   		$(".check3").css({"display":"none"})
		   	}
		});
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
							<p id="save">获取验证码</p>
						</div>
						<div className="pas">
							<label htmlFor="pas">密码</label>
							<input type="password" id="pas" placeholder="请输入密码" />
						</div>
						<p className="check">
							<span className="check1"></span>
							<span className="check2"></span>
							<span className="check3"></span>
						</p>
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
					<div id="phoneNum"></div>
				</div>
				<div className="joint">
					<div className="title">
						<p>点击以下图标免注册/直接登录</p>
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