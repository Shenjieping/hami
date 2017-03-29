import React from 'react'

import { Link } from 'react-router'

import gardenStuff from './../../../images/kind/05015383177958780.png'
import meter from './../../../images/kind/05015382063902705.png'
import drinks from './../../../images/kind/05015382413708016.png'
import departmentStore from './../../../images/kind/05015382679643040.png'
import digital from './../../../images/kind/05015383177958780.png'

class Kind extends React.Component{
	render(){
		return (
			<div className="m-kind">

				<div className="m-kind-left">
					<ul>
						<Link to="/kind/gardenStuff" ><li><img src={gardenStuff} alt="" /><span>生鲜果蔬</span></li></Link>
						<Link to="/kind/meter"><li><img src={meter} alt="" /><span>米面粮油</span></li></Link>
						<Link to="/kind/drinks"><li><img src={drinks} alt="" /><span>酒水饮料</span></li></Link>
						<Link to="/kind/departmentStore"><li><img src={departmentStore} alt="" /><span>日用百货</span></li></Link>
						<Link to="/kind/digital"><li><img src={digital} alt="" /><span>数码家电</span></li></Link>
					</ul>
				</div>
				<div className="m-kind-right">{this.props.children}</div>

			</div>
		)
	}
}

export default Kind;