import React from 'react'
import cartw3 from "./../../../images/cart/mcart1.png"
import cartdel from "./../../../images/cart/cart-del.png"


import $ from 'jquery'
class Cart extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			username:"",
			goodsID:"",
			title: 'abc',
			list:[]
		}
	}	

	render() {
		return(
			<div>
				{this.state.list}
			</div>
			
		)
	}
	
	componentDidMount() {
		var that=this
		var listcart=[]
		var listdata=[]
		if(localStorage.getItem("username")){
			let username=localStorage.getItem("username")
			let goodsID=localStorage.getItem("goodsID")
			console.log(username)
			console.log(goodsID)
			fetch('http://www.hamij.com/mobile/index.php?act=goods&op=goods_detail&goods_id='+ goodsID+'&key=d0f54b6c56cc6668f9e6b7a947953bdd')
			
				.then((res) => {
					return res.json()
				})
				.then((res) => {
					console.log(res)
						listcart.push(
						<div className="m-cart">
							<div id="cart-list-wp">
								<div className="nctouch-cart-container">
									<dl className="nctouch-cart-store">
										<dt>
										  	<span><input type="checkbox" id="check" /></span>
												<img src={cartw3}/>
											<span>{res.datas.store_info.member_name}</span>
										</dt>
									</dl>
									<ul className="nctouch-cart-item">
										<li cart_id="13978" className="cart-litemw-cnt">
											<div className="goods-check ">
											  	<span><input type="checkbox" id="check" /></span>
											</div>
											
											<div className="goods-pic">
												<a href="//www.hamij.com/wap/tmpl/product_detail.html?goods_id=120450">
													<img src={res.datas.goods_image} />
												</a>
											</div>
											<dl className="goods-info">
												<dt className="goods-name"> <a href="//www.hamij.com/wap/tmpl/product_detail.html?goods_id=120450"> {res.datas.goods_info.goods_name}</a></dt>
												<dd className="goods-type">同城配送，当日送达！</dd>
											</dl>
											<div className="goods-del" cart_id="13978">
												<a href="javascript:void(0);"><img src={cartdel}/></a>
											</div>
											<div className="goods-subtotal"> <span className="goods-price">￥<em>{res.datas.goods_info.goods_price}</em></span>
												<span className="goods-sale">
											</span>
												<div className="value-box">
													<span className="minus">
														<a href="javascript:void(0);">-</a>
													</span>
													<span>
														<input type="text" pattern="[0-9]*" readonly="" className="buy-num buynum" value="1"/>
													</span>
													<span className="add">
														<a href="javascript:void(0);">+</a>
													</span>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div className="nctouch-cart-bottom">
									<div className="all-check">
										<span><input type="checkbox" id="check" /><label htmlFor="check"></label></span>
									</div>
									<div className="total">
										<dl className="total-money"><dt>合计总金额：</dt>
											<dd>￥<em>{res.datas.goods_info.goods_price}</em></dd>
										</dl>
									</div>
									<div className="check-out ok">
										<a href="javascript:void(0)">确认信息</a>
									</div>
								</div>
							</div>
							
					</div>
				);
					this.setState({
						list: listcart
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
		}else{
			window.location.href="#/login"
		}
	
	
	}
	
	
	qunxuan(){
		
	}
	
	
}
		

export default Cart;

