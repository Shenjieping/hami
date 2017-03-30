import React from 'react'
import { Link } from 'react-router'
import reghome from './../../../images/user/home_b.png'

class Register extends React.Component {
	render(){
		return (
			<div className="register">
				<header>
					<Link className="back" to="/board"><img src={reghome} /></Link>
					<h2>会员注册</h2>
					<Link className="log" to="/login">登陆</Link>
				</header>
			</div>
		)
	}
}

export default Register