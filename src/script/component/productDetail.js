import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import Modal from '../../component_dev/modal/src'
import goods_name_img1 from './../../../images/detail/favorite_r.png'
import back from './../../../images/detail/arrow_left_r.png'
import more from './../../../images/detail/more_r.png'
import check from './../../../images/detail/arrow_right_b.png'
import color_ok from './../../../images/detail/color-ok.png'
import color_sale from './../../../images/detail/color-sale.png'


import browse_list from "./../../../images/ProductList/browse_list.png"
class productDetail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			product:[],
			goods_name:[],
			goods_price:[],
			goods_marketprice:[],
			area_name:[],
			content:[],
			if_store_cn:[],
			goods_salenum:[],
			evaluate_pricent:[]
		}
	}
	back(){
		window.history.go(-1);
	}
	render() {
		return(
			<div className="m-productDetail">
		        <div className="bodymo">
		        	<img src={this.state.product} />
		        	<p className="goodsName">
		        		<span>{this.state.goods_name}</span>
		        		<span><img src={goods_name_img1} /></span>
		        		
		        	</p>
		        </div>
		        <div className="content">
		        	<header>
		        		<span onClick={this.back}><img src={back} /></span>
		        		<span><img src={more} /></span>
		        	</header>
		        	<div className="contener">
		        		<div className="price">
		        			<p className="price_s">
		        				<span>￥</span>
		        				<span className="pri">{this.state.goods_price}</span>
		        				<span>￥{this.state.goods_marketprice}</span>
		        			</p>
		        			<Link to="" className="price_l">立即抢购</Link>
		        		</div>
		        		<div className="check">
		        			<Link to="">
			        			<span>查看商品详情</span>
			        			<img src={check} />
		        			</Link>
		        		</div>
		        		<div className="distri">
		        			<p>
		        				<span>送至</span>{this.state.area_name}({this.state.if_store_cn})
		        				
		        			</p>
		        			<p>
		        				<span>运费</span>{this.state.content},店铺满98免运费
		        			</p>
		        		</div>
		        		<div className="sustain">
		        			<p><img src={color_ok} />支持随时退款</p>
		        			<p><img src={color_ok} />支持送货上门</p>
		        			<p><img src={color_sale} />已售{this.state.goods_salenum}</p>
		        		</div>
		        		<div className="evaluate_pricent">
		        			<Link to="">
			        			<span></span>
		        			</Link>
		        		</div>
		        	</div>
		        </div>
		    </div>
		)
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
      // getUrlSearch(window.location.href,"goods_id")
		var a= getUrlSearch(window.location.href,"goods_id")
		//console.log(a)
		fetch("http://www.hamij.com/mobile/index.php?act=goods&op=goods_detail&goods_id="+a+"&key=")
			.then(function(response){
				return response.json()
			}).then(function(json){
				var list=json;
				that.setState({
					product:list.datas.goods_image,
					goods_name:list.datas.goods_info.goods_name,
					goods_price:list.datas.goods_info.goods_price,
					goods_marketprice:list.datas.goods_info.goods_marketprice,
					area_name:list.datas.goods_hair_info.area_name,
					content:list.datas.goods_hair_info.content,
					if_store_cn:list.datas.goods_hair_info.if_store_cn,
					goods_salenum:list.datas.goods_info.goods_salenum,
					evaluate_pricent:list.datas.goods_evaluate_info.good_percent
				})
				
			}).catch(function(er){
				console.log(er)
			})
		
		/*fetch('http://www.hamij.com/mobile/index.php?act=goods&op=goods_list&gc_id='+a+'&page=8&curpage=1&gc_id='+a)
		
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
		})*/
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(productDetail)