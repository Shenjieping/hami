import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'

import hamiLogin from './../../../images/user/reg_r.png'
import mobalLogin from './../../../images/user/regm_r.png'
import back from './../../../images/user/arrow_left_w.png'
import qq from './../../../images/user/qq.png'
import sina from './../../../images/user/sina.png'
import cancel from './../../../images/user/cancel_b.png'


class Login extends React.Component{
	constructor (props) {
	    super(props)
	    this.state = {
	    	login:[],
	    	user:""
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
	    $("#button").click(function(){
	    	var use=$("#username").val();
	    	var pas=$("#password").val();
	    	if(use=="" || pas==""){
	    		$("#title").html("请完善信息！")
	    		that.titleFn()
	    	}else{
	    		/*localStorage.setItem("username",use)
	    		that.setState({
	    			user:"/user"
	    		})*/
	    		$.ajax({
					type:"get",
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					data:{
						status:"login",
						userID:use,
						password:pas
					},
					success:function(data){
						if(data==0){
							$("#title").html("用户名不存在！")
	    					that.titleFn()
						}else if(data==2){
							$("#title").html("用户名或密码错误！")
	    					that.titleFn()
						}else{
							/*if(localStorage.getItem("username")){
								
							}*/
							localStorage.setItem("username",JSON.parse(data).userID)
				    		that.setState({
				    			user:"/user"
				    		})
						}
						
					}
				});
	    	}
	    })
	    
	    $('#username').bind('input propertychange', function() {  
		   //console.log($("#username").val())
		   $("#des1").css({"display":"block"})
		   $("#des1").click(function(){
		   })
		});
		$('#password').bind('input propertychange', function() {  
		  // console.log($(this).val())
		   $("#des2").css({"display":"block"})
		   $("#des2").click(function(){
		   })
		});
		$('#username').blur(function(){
			$("#des1").css({"display":"none"})
		})
		$('#password').blur(function(){
			$("#des2").css({"display":"none"})
		})
	}
	/*login(){
		var use=this.refs.use.value;
		var pass=this.refs.pass.value;
		if(use == "" || pass == ""){
			$("#title").html("请完善信息！")
    		$("#title").css({"display":"block"})
			$("#title").animate({"opacity":"1"},500,function(){
				$("#title").delay(2000).animate({"opacity":"0"},500,function(){
					$("#title").css({"display":"none"})
				})
			})
		}else{
			localStorage.setItem("use",use)
		}
	}*/
	Back(){
		window.history.go(-1)
	}
	render(){
		return (
			<div className="m-login">
				<header className="loginHead">
		      		<span className="regret" onClick={this.Back}><img src={back} /></span>
					<h2 className="title">
		      			账号登录
		      		</h2>
		      		<Link to="/register" className="affirm">注册</Link>
				</header>
				<ul className="select">
					<li className="active"><Link to=""><img src={hamiLogin} /><span>黄瓜街账号登录</span></Link></li>
					<li><Link to="/loginmobal"><img src={mobalLogin} className="lo" /><span>手机号登录</span></Link></li>
				</ul>
				<div className="natouch">
					<form action="" method="post" className="forms">
						<div className="info">
							<div className="user">
								<span>账户</span><input id="username" ref="use"  type="text" name="" placeholder="请输入用户名/已验证手机" /><img id="des1" className="des" src={cancel} />
								
							</div>
							<div className="pass">
								<span>密码</span><input id="password" ref="pass" type="password" name="" placeholder="请输入登录密码" /><img id="des2" className="des" src={cancel} />
							</div>
						</div>
						<div className="btn">
							<Link to={this.state.user}><input type="button" id="button"  name="" value="登录" /></Link>
						</div>
					</form>
					<div id="title">
					
					</div>
				</div>
				<div className="menery">
					<span><input type="checkbox" id="check" /><label htmlFor="check">七天自动登录</label></span>
					<Link to="">忘记密码?</Link>
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

export default Login