import React from 'react'
import cartw3 from "./../../../images/cart/mcart1.png"
class Cart extends React.Component {
	render() {
		return(
			<div className="m-cart">
			<div id="cart-list-wp">
				<div className="nctouch-cart-container">
					<dl className="nctouch-cart-store">
						<dt>
							<div className="checkboxFive">
						  		<input type="checkbox" value="1" id="checkboxFiveInput" name="" />
							  	<label htmlFor="checkboxFiveInput"></label>
						  	</div>
						<i className="icon-store"><img src={cartw3}/></i>
						互惠超市
					</dt>
					</dl>
					<ul className="nctouch-cart-item">
						<li cart_id="13978" className="cart-litemw-cnt">
							<div className="goods-check">
								<input type="checkbox" checked="" name="cart_id" value="13978" />
							</div>
							<div className="goods-pic">
								<a href="//www.hamij.com/wap/tmpl/product_detail.html?goods_id=120450">
									<img src="http://www.hamij.com/data/upload/shop/store/goods/68/68_05133658413357936_240.png" />
								</a>
							</div>
							<dl className="goods-info">
								<dt className="goods-name"> <a href="//www.hamij.com/wap/tmpl/product_detail.html?goods_id=120450"> 精品水蜜桃 新鲜水果火爆上市 1000g </a></dt>
								<dd className="goods-type">同城配送，当日送达！</dd>
							</dl>
							<div className="goods-del" cart_id="13978">
								<a href="javascript:void(0);"></a>
							</div>
							<div className="goods-subtotal"> <span className="goods-price">￥<em>35.99</em></span>
								<span className="goods-sale">
							</span>
								<div className="value-box">
									<span className="minus">
									<a href="javascript:void(0);">&nbsp;</a>
								</span>
									<span>
									<input type="text" pattern="[0-9]*" readonly="" className="buy-num buynum" value="1"/>
								</span>
									<span className="add">
									<a href="javascript:void(0);">&nbsp;</a>
								</span>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div className="nctouch-cart-bottom">
					<div className="all-check"><input className="all_checkbox" type="checkbox" checked="" /></div>
					<div className="total">
						<dl className="total-money"><dt>合计总金额：</dt>
							<dd>￥<em>35.99</em></dd>
						</dl>
					</div>
					<div className="check-out ok">
						<a href="javascript:void(0)">确认信息</a>
					</div>
				</div>
			</div>
			<div className="nctouch-main-layout">
				<div id="cart-list-wp">
					<div className="nctouch-norecord cart">
						<div className="norecord-ico"><i></i></div>
						<dl>
							<dt>您的购物车还是空的</dt>
							<dd>去挑一些中意的商品吧</dd>
						</dl>
						<a href="#" className="btn">随便逛逛</a>
					</div>
				</div>
			</div>
		</div>
			
		)
	}
}
export default Cart;