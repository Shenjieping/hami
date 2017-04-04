import React from "react"
import { Link } from 'react-router'

import fruit from './../../../../images/content/sg.png';
import face from './../../../../images/content/sc.png';
import ofuse from './../../../../images/content/fb.png';
import local from './../../../../images/content/qj.png';
import musim from './../../../../images/content/ls.png';
import cater from './../../../../images/content/cf.png';
import server from './../../../../images/content/bh.png';
import sale from './../../../../images/content/js.png';
import merchant from './../../../../images/content/store_w.png';
import singin from './../../../../images/content/my.png';

class NavList extends React.Component {
	render(){
		return (
			<ul>
				<li><Link to="/kind/gardenStuff"><span><img src={fruit}/></span><p>生鲜果蔬</p></Link></li>
				<li><Link to="/kind/meter"><span><img src={face}/></span><p>米面粮油</p></Link></li>
				<li><Link to="/kind/departmentStore"><span><img src={ofuse}/></span><p>日用百货</p></Link></li>
				<li><Link to="/kind/digital"><span><img src={local}/></span><p>特产零食</p></Link></li>
				<li><Link to="/kind/digital"><span><img src={musim}/></span><p>清真食品</p></Link></li>
				<li><Link to="/kind/digital"><span><img src={cater}/></span><p>餐饮美食</p></Link></li>
				<li><Link to="/kind/digital"><span><img src={server}/></span><p>家政服务</p></Link></li>
				<li><Link to="/kind/digital"><span><img src={sale}/></span><p>批发中心</p></Link></li>
				<li><Link to="/kind/digital"><span><img src={merchant}/></span><p>入驻商家</p></Link></li>
				<li><Link to="/kind/digital"><span><img src={singin}/></span><p>积分签到</p></Link></li>
			</ul>
		)
	}
}


export default NavList;