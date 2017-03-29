require('../style/app.scss')
import { Provider } from 'react-redux'
import { store } from './redux/store'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute  } from 'react-router'

import Index from './component/index'
import Kind from './component/kind'
import Cart from './component/cart'
import User from './component/user'
import Board from './component/board'
import List from './component/list'



ReactDOM.render(
	<Provider store={store}>
	  <Router history={hashHistory}>
	  	<Route path="/" component={Index}>
	  		<IndexRoute component={Board} />
	  		<Route path="board" title="首页" component={Board}></Route>
	  		<Route path="kind" title="分类" component={Kind}></Route>
	  		<Route path="cart" title="购物车" component={Cart}></Route>
	  		<Route path="user" title="用户中心" component={User}></Route>
	  	</Route>
	  		<Route path="/list" title="列表" component={List}></Route>
	  </Router>
  </Provider>,
  document.getElementById('root')
)
