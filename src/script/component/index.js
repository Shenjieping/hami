import React from 'react'
//import Board from './board'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import BoardHead from './module/boardHead'
import KindHead from './module/kindHead'
import CartHead from './module/cartHead'
import UserHead from './module/userHead'

import { mapStateToProps,mapDispatchToProps } from "../redux/store"

import home from './../../../images/footer/home_w.png'
import browse from './../../../images/footer/browse_list_w.png'
import cart from './../../../images/footer/cart_w.png'
import member from './../../../images/footer/member_w.png'

class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state={
    	hd: [<div />]
    }
  }
  /*clickHandler(type){
  	this.setState({
  		title:type
  	})
  }*/
  	
 	//<h2>{this.state.title}</h2>
 	headelr(e){
		//console.log("aa",e.target)
	}
  render() {
    return (
      <div className="m-index">
      	<header>
      		{this.state.hd}
      	</header>
      	<section>
      		{this.props.children}
      	</section>
      	<footer>
      		<ul>
						<Link onClick={this.headelr} to="/board"><li><img id="a1" src={home} alt="" /><span>首页</span></li></Link>
						<Link onClick={this.headelr} to="/kind"><li><img id="a2" src={browse} alt="" /><span>分类</span></li></Link>
						<Link onClick={this.headelr} to="/cart"><li><img id="a3" src={cart} alt="" /><span>购物车</span></li></Link>
						<Link onClick={this.headelr} to="/user"><li><img id="a4" src={member} alt="" /><span>用户中心</span></li></Link>
						
					</ul>
      	</footer>
      </div>
    )
  }
  
  shouldComponentUpdate() {
  	let title=this.props.routes[1].title
  	switch (title){
	   	case "1":
	   	//console.log(11)
	   		this.setState({
	   			hd:<BoardHead />
	   		})
	   		break;
	   	case "2":
	   		this.setState({
	   			hd:<KindHead />
	   		})
	   		break;
	   	case "3":
	   		this.setState({
	   			hd:<CartHead />
	   		})
	   		break;
	   	case "4":
	   		this.setState({
	   			hd:<UserHead />
	   		})
	   		break;
	   	
	   }
  	return true
  }
	
  componentDidMount() {
   /* fetch('/api/list.php')
    .then(response=>response.json())
    // function(response) {
    //   return response.json()
    // }
    .then(res=>{
      // console.log(res);
      this.setState({
        name: <div>{res.name}</div>
      })
    })*/
       //console.log("didmount",this.props.value)
   switch (this.props.value){
   	case "1":
   	//console.log(11)
   		this.setState({
   			hd:<BoardHead />
   		})
   		break;
   	case "2":
   		this.setState({
   			hd:<KindHead />
   		})
   		break;
   	case "3":
   		this.setState({
   			hd:<CartHead />
   		})
   		break;
   	case "4":
   		this.setState({
   			hd:<UserHead />
   		})
   		break;
   	
   }
  }
  
  componentDidUpdate(){
  	let title=this.props.routes[1].title
  	
  	this.props.onChange({
  		type:"SETTITLE",
  		title:title
  	})
    	//console.log("up",this.props.value)
  }
}

export default connect (
	mapStateToProps,
	mapDispatchToProps
)(Index)



