import React from 'react'
import { Link } from 'react-router'

import hamiLogin from './../../../images/user/reg_r.png'
import mobalLogin from './../../../images/user/regm_r.png'

class Login extends React.Component{
	render(){
		return (
			<div className="m-login">
				<header>
					
				</header>
				<ul className="select">
					<li className="active"><Link to="/login"><img src={hamiLogin} /><span>黄瓜街账号登录</span></Link></li>
					<li><Link to="/login"><img src={mobalLogin} /><span>手机号登录</span></Link></li>
				</ul>
			</div>
		)
	}
}

export default Login