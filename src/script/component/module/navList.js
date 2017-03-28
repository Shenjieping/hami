import React from "react"

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
				<li><a href="#"><span><img src={fruit}/></span><p>生鲜果蔬</p></a></li>
				<li><a href="#"><span><img src={face}/></span><p>米面粮油</p></a></li>
				<li><a href="#"><span><img src={ofuse}/></span><p>日用百货</p></a></li>
				<li><a href="#"><span><img src={local}/></span><p>特产零食</p></a></li>
				<li><a href="#"><span><img src={musim}/></span><p>清真食品</p></a></li>
				<li><a href="#"><span><img src={cater}/></span><p>餐饮美食</p></a></li>
				<li><a href="#"><span><img src={server}/></span><p>家政服务</p></a></li>
				<li><a href="#"><span><img src={sale}/></span><p>批发中心</p></a></li>
				<li><a href="#"><span><img src={merchant}/></span><p>入驻商家</p></a></li>
				<li><a href="#"><span><img src={singin}/></span><p>积分签到</p></a></li>
			</ul>
		)
	}
}


export default NavList;