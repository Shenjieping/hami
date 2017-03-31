import React from 'react'
//import Board from './board'
import { Link } from 'react-router'
import { connect } from 'react-redux'

//import CartHead from './module/cartHead'

import { mapStateToProps,mapDispatchToProps } from "../redux/store"


import home from './../../../images/footer/home_w.png'
import browse from './../../../images/footer/browse_list_w.png'
import cart from './../../../images/footer/cart_w.png'
import member from './../../../images/footer/member_w.png'

class Index extends React.Component {
  constructor (props) {
    super(props)
    /*this.state={
    	title:"首页"
    }*/
  }

  render() {
    return (
      <div className="m-index">
      	<header>
      		<h2>{this.props.value}</h2>
      		
      	</header>
      	<section>
      		{this.props.children}
      	</section>
      	<footer>
      		<ul>

						<Link to="/board"><li><img src={home} alt="" /><span>首页</span></li></Link>
						<Link to="/kind"><li><img src={browse} alt="" /><span>分类</span></li></Link>
						<Link to="/cart"><li><img src={cart} alt="" /><span>购物车</span></li></Link>
						<Link to="/user"><li><img src={member} alt="" /><span>用户中心</span></li></Link>
						
					</ul>
      	</footer>
      </div>
    )
  }

  componentDidMount() {
  }
  
  componentDidUpdate(){
  	let title=this.props.routes[1].title
  	this.props.onChange({
  		type:"SETTITLE",
  		title:title
  	})
  }
  componentDidUpdate() {
    let title = this.props.routes[1].title
    this.props.onChange({
      type: 'SETTITLE',
      title: title
    })
  }
}


//export default Index
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)

