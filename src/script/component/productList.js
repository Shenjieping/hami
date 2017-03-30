import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import Modal from '../../component_dev/modal/src'
import { Link } from 'react-router'

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
			list:"",
			shows:false
		}
		this.xianshi=this.xianshi.bind(this)
		this.yincang=this.yincang.bind(this)
	}
	render() {
		return(
			<div className="m-productList">
        <header>
        	<div className="header-wrap">
	        	<div className="header-l">
		        	<img className="regret" src={list_arrow_left}/>
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
		    <div className="nctouch-bottom-mask-block" >
				<div className="nctouch-bottom-mask-top goods-options-info">
					<img  onClick={this.yincang} src={list_close} className="nctouch-bottom-mask-close"/>
					<div className="goods-pic"> <img src="http://www.hamij.com/data/upload/shop/store/goods/114/114_05414390348437765_240.jpg" id="goods-pic"/> </div>
					<dl> <dt id="goods_name_val">精品菠菜 1kg</dt>
						<dd className="goods-price">￥<em>11.80</em> <span className="goods-storage" id="goods-storage">库存：50件</span> </dd>
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
				<div className="goods-option-value">购买数量
					<div className="value-box"> 
						<span className="minus">
						<a href="javascript:void(0);">-</a>		
						</span> 
							<span>			
								<input type="text" pattern="[0-9]*" className="buy-num" id="buynum-120088" value="1"/>		
							</span> 
							<span className="add">
								<a href="javascript:void(0);">+</a>		
							</span> 
					</div>
				</div>
				<div className="goods-option-foot">
					<div className="otreh-handle">
						<a href="javascript:void(0);" className="kefu"> 
							<img src={list_kefu}/>
							<p>客服</p>
						</a>
						<a href="../tmpl/cart_list.html" className="cart1"> 
							<img src={list_cart}/>
							<p>购物车</p> <span id="cart_count1"><sup>1</sup></span> </a>
					</div>
					<div className="buy-handle ">
						<a href="javascript:void(0);" className="add-cart2" id="cart-120088">加入购物车</a>
						<a href="javascript:void(0);" className="buy-now" id="buy-now">立即购买</a>
					</div>
				</div>
			</div>
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
					
					
					<div className="nctouch-main-layout mt40 mb20">
						<div id="product_list" className="list">
							<ul className="goods-secrch-list">
								{this.state.list}
								<li className="loading">
									<div className="spinner"><i></i></div>商品数据读取中...
								</li>
							</ul>
						</div>
					</div>         
         
         
         {this.props.children}
        </section>
      </div>
		)
	}
	xianshi(){
		this.setState({
			shows:true
		})
	}
	yincang(){
		this.setState({
			shows:false
		})
	}
	componentDidMount() {
		var that=this
		var url = window.location.href;
		
		function getUrlSearch(url,name){
			var position = url.indexOf("?");
			if(position != -1){
				var search = url.substr(position+1);
				var username = search.substr(search.indexOf("=")+1)
				return username;
			}
			return "";
		}
       getUrlSearch(window.location.href,"goods_id")
		var a= getUrlSearch(window.location.href,"goods_id")
		console.log(a)
		fetch('http://www.hamij.com/mobile/index.php?act=goods&op=goods_list&gc_id='+a+'&page=8&curpage=1&gc_id='+a)
		
			.then((res) => {
				return res.json()
			})
			.then((res) => {
				console.log(res.datas.goods_list)
				var listdata=res.datas.goods_list.map(function(item,index){
					return (
						<Link to={'/productDetail/' + "goods_id?goods_id=" + item.goods_id } className="goods-item" goods_id="120778"> 
						<span className="goods-pic">					
							<a href="#" className="list_page" target="_blank">						
								<img src={item.goods_image_url} className="lazyload"/>					
							</a>																			
						</span>
						<dl className="goods-info"> 
							<dt className="goods-name">						
								<a href="#" className="list_page">														
									<h4>{item.goods_name}</h4>																				
								</a>					
							</dt>
							<dd className="goods-sale">
								<a href="#" className="list_page"> 
									<span className="goods-price">￥<em>{item.goods_price}</em></span> 
								</a>
								<img className="cart2"  onClick={that.xianshi} src={listcat1}/>
							</dd>
							<dd className="goods-assist">
								<a href="#"> 
									<span className="goods-sold">销量	<em>{item.goods_salenum}</em></span> 
								</a>
								<div className="goods-store">
									<a href="#" data-id="114">{item.store_name}
										<img src={list_more} />
									</a>
									<div className="sotre-creidt-layout"></div>
								</div>
							</dd> 
							
						</dl>
					</Link>
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