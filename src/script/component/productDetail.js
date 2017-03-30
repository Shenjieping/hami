import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import Modal from '../../component_dev/modal/src'

import browse_list from "./../../../images/ProductList/browse_list.png"
class productDetail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: 'abc',
			list: "",
			shows: false
		}
	}
	render() {
		return(
			<div className="m-productList">
		        <section>
		         hahha
		        
		        </section>
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
)(productDetail)