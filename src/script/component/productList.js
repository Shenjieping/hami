import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import Modal from '../../component_dev/modal/src'
import Scroller from '../../component_dev/scroller/src'
import { Link } from 'react-router'
import $ from 'jquery'


import browse_list from "./../../../images/ProductList/browse_list.png"
import list_more from "./../../../images/ProductList/list_more.png"
import listcat1 from "./../../../images/ProductList/listcat1.png"
import list_kefu from "./../../../images/ProductList/list_kefu.png"
import list_cart from "./../../../images/ProductList/list_cart.png"
import list_close from "./../../../images/ProductList/list_close.png"
import list_arrow_left from "./../../../images/ProductList/list_arrow_left.png"
import search_ico from "./../../../images/ProductList/search_ico.png"

class List extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: 'abc',
			list: "",
			shows: false,
			addcart: [],
			goods_id: [],
			inputvalue: 1
		}
		this.xianshi = this.xianshi.bind(this)
		this.yincang = this.yincang.bind(this)
	
	}
	render() {
		
		
		return(
			<div className="m-productList">
        <header>
        	<div className="header-wrap">
	        	<div className="header-l">
	        		<img onClick={this.fanhui.bind(this)} className="regret" src={list_arrow_left}/>
		        </div>
	        	<div className="header-inp">
		        	<img className="regret" src={search_ico}/>
		        	<span className="search-input" id="keyword" placeholder=""></span>
	        	</div>
	        	<div className="header-r">		
		        	<a href="#" className="categroy hide" id="get_child_menu"></a>		
		        	<a id="header-nav" href="#;">
			        	<img className="regret" src={list_more}/>
		        	</a>
	        	</div>
        	</div>
        </header>
        <section>
       	 
        <Modal show={this.state.shows}>
		   {this.state.addcart}
		</Modal>
	        <div className="goods-search-list-nav">
				<ul id="nav_ul">
					<li>
						<a href="javascript:void(0);" className="current" id="sort_default">综合排序<i></i></a>
					</li>
					<li>
						<a href="javascript:void(0);" className="" onclick="init_get_list('2', '1')">销量优先</a>
					</li>
					<li>
						<a href="javascript:void(0);" id="search_adv">筛选<i>^</i></a>
					</li>
				</ul>
				<div className="browse-mode">
					<a href="javascript:void(0);" id="show_style">
						<img className="browse-list" src={browse_list}/>
					</a>
				</div>
			</div>
				<Scroller usePullRefresh={true} ref="scroller" useLoadMore={true}  onRefresh={() => {
			        this.refs.scroller.stopRefreshing(true);
			    }} onLoad={() => {
        this.refs.scroller.stopLoading(true); 
    }}>
					<div className="nctouch-main-layout mt40 mb20">
						<div id="product_list" className="list">
							<ul className="goods-secrch-list">
								{this.state.list}
							</ul>
						</div>
					</div>         
         		</Scroller>
        </section>
      </div>

		)
	}
	
	fanhui(){
		window.history.go(-1);
	}
	
	xianshi(msg, e) {
		let newarr = [];
		fetch('http://www.hamij.com/mobile/index.php?act=goods&op=goods_detail&goods_id=' + msg + '&key=d0f54b6c56cc6668f9e6b7a947953bdd')
			.then((res) => {
				return res.json()
			})
			.then((res) => {
				console.log(res)
				var _id = res.datas.goods_info.goods_id
				var that = this;
				newarr .push( 
				<div className="nctouch-bottom-mask-block" >
					<div className="nctouch-bottom-mask-top goods-options-info">
						<img  src={list_close} onClick={that.yincang} className="nctouch-bottom-mask-close"/>
						<div className="goods-pic"> <img src={res.datas.spec_image[0]}  id="goods-pic"/> </div>
						<dl> <dt id="goods_name_val">{res.datas.goods_info.goods_name}</dt>
							<dd className="goods-price">￥<em>{res.datas.goods_info.goods_price}</em> <span className="goods-storage" id="goods-storage">库存：{res.datas.goods_info.goods_storage}件</span> </dd>
						</dl>
					</div>
					<div className="nctouch-bottom-mask-rolling" id="product_roll">
						<div className="goods-options-stock">
							<dl className="spec" id="spec_list"><dt spec_id="6">规格</dt>
								<dd>
									<a href="javascript:void(0);" className="current" data-id="120088" specs_value_id="1472">1kg</a>
									<a href="javascript:void(0);" data-id="120089" specs_value_id="1473">500g</a>
									<a href="javascript:void(0);" data-id="120090" specs_value_id="2123">300g</a>
								</dd>
							</dl>
						</div>
					</div>
					<div className="goods-option-value">购买数量{that.state.inputvalue}
						<div className="value-box"> 
							<div className="yo-list yo-list-group">
								<div className="item">
									<div className="yo-number">
										<span onClick={that.minus.bind(that)} className="minus disabled">-</span>
										<input ref="inputvalue" type="text" id="input" className="input" value={that.state.inputvalue}/>
										<span onClick={that.plus.bind(that)} className="plus">+</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="goods-option-foot">
						<div className="otreh-handle">
							<a href="javascript:void(0);" className="kefu"> 
								<img src={list_kefu}/>
								<p>客服</p>
							</a>
							<a href="javascript:void(0);" className="cart1"> 
								<img src={list_cart}/>
								<p>购物车</p>
							</a>
						</div>
						<div className="buy-handle ">
							<a onClick={that.addcarts.bind(that,_id)} href="javascript:void(0);" className="add-cart2" id="cart-120088">加入购物车</a>
							<Link to="/cart" className="buy-now" id="buy-now">立即购买</Link>
						</div>
					</div>
				</div>)

				this.setState({
					addcart: newarr,
					goods_id: _id
				})
			})
			.catch((e) => {
				console.log(e.message)
			})
			console.log(msg)
		this.setState({
			shows: true
		})
		
	}

	yincang() {
		this.setState({
			shows: false
		})
		
	}
	plus() {
		//console.log(22)
		alert(4)
		
	}	
	addcarts(goods_id){
		if(localStorage.getItem("username")){
			$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/updatecar.php",
				data:{
					userID:"f66",
					goodsID:goods_id,
					number:1
				},
				
				success:function(data){
					console.log(data)
					if(data==1){
						console.log("成功")
						localStorage.setItem("goodsID",goods_id)
						localStorage.setItem("number",1)
					}else if(data == 0){
						console.log("shibai")
					}else{
						console.log("baocuo")
					}
					
				}
			});   
		}else{
			window.location.href="#/login"
		}
		
	}
	minus() {
		//console.log(11)
//		
		alert(1)
		this.setState({
			inputvalue:--this.state.inputvalue
		})
		
	}
	
	componentDidMount() {
		
		var that = this
		var url = window.location.href;
		function getUrlSearch(url, name) {
			var position = url.indexOf("?");
			if(position != -1) {
				var search = url.substr(position + 1);
				var username = search.substr(search.indexOf("=") + 1)
				return username;
			}
			return "";
		}
		getUrlSearch(window.location.href, "goods_id")
		var a = getUrlSearch(window.location.href, "goods_id")
		console.log(a)
		fetch('http://www.hamij.com/mobile/index.php?act=goods&op=goods_list&gc_id=' + a + '&page=8&curpage=1&gc_id=' + a)

			.then((res) => {
				return res.json()
			})
			.then((res) => {
				console.log(res.datas.goods_list)
				var listdata = res.datas.goods_list.map(function(item, index) {
					return(
						<li className="goods-item" goods_id="120778"> 
						<Link to={'/productDetail/' + "goods_id?goods_id=" + item.goods_id } className="goods-pic">					
							<a href="#" className="list_page" target="_blank">						
								<img src={item.goods_image_url} className="lazyload"/>					
							</a>																			
						</Link>
						<dl className="goods-info"> 
							<Link to={'/productDetail/' + "goods_id?goods_id=" + item.goods_id } className="goods-name">						
								<a href="#" className="list_page">														
									<h4>{item.goods_name}</h4>																				
								</a>					
							</Link>
							<dd className="goods-sale">
								<Link to={'/productDetail/' + "goods_id?goods_id=" + item.goods_id } className="list_page"> 
									<span className="goods-price">￥<em>{item.goods_price}</em></span> 
								</Link>
								<img className="cart2"  onClick={that.xianshi.bind(that, item.goods_id)} src={listcat1}/>
							</dd>
							<dd className="goods-assist">
								<Link to={'/productDetail/' + "goods_id?goods_id=" + item.goods_id }> 
									<span className="goods-sold">销量	<em>{item.goods_salenum}</em></span> 
								</Link>
								<div className="goods-store">
									<a href="#" data-id="114">{item.store_name}
										<img src={list_more} />
									</a>
									<div className="sotre-creidt-layout"></div>
								</div>
							</dd> 
							
						</dl>
					</li>
					);
				})
				this.setState({
					list: listdata
				})
			})
			.catch((e) => {
				console.log(e.message)
			})

		let title = '列表页'
		this.props.onChange({
			type: 'SETTITLE',
			title: title
		})

	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(List)