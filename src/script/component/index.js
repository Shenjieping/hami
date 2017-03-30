import React from 'react'
//import Board from './board'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'

import home from './../../../images/footer/home_w.png'
import browse from './../../../images/footer/browse_list_w.png'
import cart from './../../../images/footer/cart_w.png'
import member from './../../../images/footer/member_w.png'
import logo from './../../../images/1111.png'
import soso from './../../../images/search_ico.png'
import more from './../../../images/catgray_w.png'

class Index extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <div className="m-index">
      	<header>
      		<div className="yo-header yo-header-a">
	      		<h2 className="title">
	      			{this.props.value}
	      		</h2>
	      		
      	</div>
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

