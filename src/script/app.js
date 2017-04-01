require('../style/app.scss')
import { Provider } from 'react-redux'
import { store } from './redux/store'


import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute  } from 'react-router'
import Login from './component/login'

import Index from './component/index'
import Kind from './component/kind'
import Cart from './component/cart'
import User from './component/user'
import Board from './component/board'

import Loginmobal from './component/loginmobal'
import Register from './component/register'
import Set from './component/set'
import Search from './component/search'


import gardenStuff from './component/kind/gardenStuff'
import Meter from './component/kind/meter'
import Drinks from './component/kind/drinks'
import departmentStore from './component/kind/departmentStore'
import Digital from './component/kind/digital'

import List from './component/productList'


import ProductDetail from './component/productDetail'

ReactDOM.render(
	<Provider store={store}>
	  <Router history={hashHistory}>
	  	<Route path="/" component={Index}>
	  		<IndexRoute component={Board} />
	  		<Route path="board" title="1"  component={Board}></Route>
	  		<Route path="kind" title="2" component={Kind}>
				<IndexRoute component={gardenStuff} />
	  			<Route path="gardenStuff" component={gardenStuff}></Route>
	  			<Route path="meter" component={Meter}></Route>
	  			<Route path="drinks" component={Drinks}></Route>
	  			<Route path="departmentStore" component={departmentStore}></Route>
	  			<Route path="digital" component={Digital}></Route>
	  		</Route>
	  		<Route path="cart" title="3" component={Cart}></Route>
	  		<Route path="user" title="4" component={User}></Route>
	  	</Route>
	  	<Route path="/productList/:type" title="商品列表" component={List}></Route>
	  	<Route path="/productDetail/:type"  component={ProductDetail}></Route>
	  		<Route path="/login" title="账号登陆" component={Login}></Route>
	  		<Route path="/loginmobal" title="手机号登陆" component={Loginmobal}></Route>
	  		<Route path="/register" title="注册" component={Register}></Route>
	  		<Route path="/set" title="设置" component={Set}></Route>
	  		<Route path="/search" title="搜索" component={Search}></Route>
	  </Router>
  </Provider>,
  document.getElementById('root')
)




