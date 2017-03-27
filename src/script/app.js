require('../style/app.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Index from './component/index'
import Kind from './component/kind'
import Cart from './component/cart'
import User from './component/user'
import Board from './component/board'

function enterHander() {
	console.log("2",this)
}

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Index}>
  		<IndexRoute component={Board} />
  		<Route path="board" component={Board} onEnter={enterHander.bind(this)}></Route>
  		<Route path="kind" component={Kind}></Route>
  		<Route path="cart" component={Cart}></Route>
  		<Route path="user" component={User}></Route>
  	</Route>
  </Router>,
  document.getElementById('root')
)
