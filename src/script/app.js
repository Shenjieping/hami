require('../style/app.scss')
import { Provider } from 'react-redux'
import { store } from './redux/store'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute  } from 'react-router'
import List from './component/list'
import Login from './component/login'

import Index from './component/index'
import Kind from './component/kind'
import Cart from './component/cart'
import User from './component/user'
import Board from './component/board'

import gardenStuff from './component/kind/gardenStuff'
import Meter from './component/kind/meter'
import Drinks from './component/kind/drinks'
import departmentStore from './component/kind/departmentStore'
import Digital from './component/kind/digital'

import ProductList from './component/productList'

ReactDOM.render(
	<Provider store={store}>
	  <Router history={hashHistory}>
	  	<Route path="/" component={Index}>
	  		<IndexRoute component={Board} />
	  		<Route path="board" titile="首页"  component={Board}></Route>
	  		<Route path="kind" titile="分类" component={Kind}>
	  			<Route path="gardenStuff" component={gardenStuff}></Route>
	  			<Route path="meter" component={Meter}></Route>
	  			<Route path="drinks" component={Drinks}></Route>
	  			<Route path="departmentStore" component={departmentStore}></Route>
	  			<Route path="digital" component={Digital}></Route>
	  		</Route>
	  		<Route path="cart" title="购物车" component={Cart}></Route>
	  		<Route path="user" title="用户中心" component={User}></Route>
	  		
	  		<Route path="productList" title=" " component={ProductList}></Route>
	  	</Route>
	  </Router>
 </Provider>,
)




