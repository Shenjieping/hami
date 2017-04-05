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
import store_b from './../../../images/detail/store_b.png'

import Scroller from './../../component_dev/scroller/src'

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
			good_percent:[],
			all:[],
			member_name:[],
			store_address:[],
			store_mobile:[]
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
				        <Scroller scrollY={true}  bounce={false}>
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
				        				<p>
						        			<span>商品评价</span>
						        			<span>好评率{this.state.good_percent}%</span>
					        			</p>
					        			<p>
						        			<span>({this.state.all}人评价)</span>
						        			<img src={check} />
					        			</p>
				        			</Link>
				        		</div>
				        		<div className="goods_store">
				        			<p>
				        				<Link to="">
				        					<p>
				        						<img src={store_b} />
				        						<span>{this.state.member_name}</span>
				        					</p>
				        					<span className="right"><img src={check} /></span>
				        					
				        				</Link>
				        			</p>
				        			<p>
				        				<span>地址</span>
				        				<span>{this.state.store_address}</span>
				        			</p>
				        			<p>
				        				<span>电话</span>
				        				<span>{this.state.store_mobile}</span>
				        			</p>
				        			<p>
				        				<Link to="">
				        					
				        				</Link>
				        			</p>
				        		</div>
				        	</div>
			        	</Scroller>
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
		var a= getUrlSearch(window.location.href,"goods_id")
		//console.log(a)
		fetch("http://www.hamij.com/mobile/index.php?act=goods&op=goods_detail&goods_id="+a+"&key=")
			.then(function(response){
				return response.json()
			}).then(function(json){
				console.log(json)
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
					good_percent:list.datas.goods_evaluate_info.good_percent,
					all:list.datas.goods_evaluate_info.all,
					member_name:list.datas.store_info.member_name,
					store_address:list.datas.store_info.store_address,
					store_mobile:list.datas.store_info.store_mobile
				})
				
			}).catch(function(er){
				console.log(er)
			})
		
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(productDetail)