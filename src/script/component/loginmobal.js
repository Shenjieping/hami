import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'

import hamiLogin from './../../../images/user/reg_r.png'
import mobalLogin from './../../../images/user/regm_r.png'
import back from './../../../images/user/arrow_left_w.png'
import qq from './../../../images/user/qq.png'
import sina from './../../../images/user/sina.png'
import cancel from './../../../images/user/cancel_b.png'


class Loginmobal extends React.Component{
	constructor (props) {
	    super(props)
	    this.state = {
	    	login:[],
	    	isloding:""
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
		var a=0;
		var that=this;
	    fetch('http://www.hamij.com/mobile/index.php?act=goods&op=goods_list&gc_id=9&page=8&curpage=2&gc_id=9')
	        .then((res) => {
	        	return res.json()
	        })
	        .then((res) => {
	        	console.log(res);
				
	        })
	        .catch((e) => { 
	        	console.log(e.message) 
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
		//if($('#username').val()!=""){
			
			$(".sendnum").click(function(){
				var num="";
				var use=$('#username').val()
				if(use=="" || !(/^1[34578]\d{9}$/.test(use))){
					$("#title").html("请输入正确的手机号！")
		    		that.titleFn();
				}else{
					
					for(var i=0;i<6;i++){
						num+=Math.floor(Math.random()*10)
					}
					a=num;
					$(".tit").css({"display":"block"})
					$(".tit").text("验证码："+num)
					$(".tit").delay(10000).animate({"opacity":0},500,function(){
						$(".tit").css({"display":"none","opacity":1})
					})
				}
			})
				
		/*}else{
			alert("请输入手机号")
		}*/
		$("#button").click(function(){
	    	var use=$("#username").val();
	    	var pas=$("#password").val();
	    	var tit=$("#title").html();
	    	
	    	if(use=="" || pas==""){
	    		$("#title").html("请完善信息！")
	    		that.titleFn();
	    	}else if(a==0 || a != pas){
	    		$("#title").html("请输入正确的验证码！")
	    		that.titleFn();
	    	}else{
	    		localStorage.setItem("username",use)
	    		that.setState({
	    			isloding:"/user"
	    		})
	    	}
	    	
	    	
	    })
		
	}
	
	render(){
		return (
			<div className="m-login">
				<header className="loginHead">
		      		<span className="regret"><img src={back} /></span>
					<h2 className="title">
		      			手机号登陆
		      		</h2>
		      		<Link to="/register" className="affirm">注册</Link>
				</header>
				<ul className="select">
					<li className="active"><Link to=""><img src={mobalLogin} /><span>手机号登陆</span></Link></li>
					<li><Link to="/login"><img src={hamiLogin} className="lo" /><span>黄瓜街账号登录</span></Link></li>
				</ul>
				<div className="natouch">
					<form action="" method="post" className="forms">
						<div className="info">
							<div className="user">
								<span>手机号</span>
								<input id="username"  type="text" name="" placeholder="请输入手机号" />
								<img id="des1" className="des" src={cancel} />
								<p className="sendnum">发送验证码</p>
								
							</div>
							<div className="pass">
								<span>验证码</span><input id="password" type="password" name="" placeholder="请输入验证码" /><img id="des2" className="des" src={cancel} />
							</div>
						</div>
						<div className="btn">
							<Link to={this.state.isloding}><input type="button" id="button"  name="" value="登录" /></Link>
						</div>
					</form>
					<div className="tit">
						
					</div>
					<div id="title">
					
					</div>
				</div>
				<div className="menery">
					<span><input type="checkbox" id="check" /><label htmlFor="check">七天自动登录</label></span>
					<Link to="">忘记密码?</Link>
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

export default Loginmobal