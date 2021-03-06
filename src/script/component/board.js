import React from 'react'
import $ from 'jquery'
import NavList from './module/navList'
import TodayList from './module/today'
import Carousel from './../../component_dev/carousel/src'
import Scroller from './../../component_dev/scroller/src'
//import fetchData from '../util/util.fetch.js'
import { Link } from 'react-router'
//
class Board extends React.Component{
	constructor (props) {
	    super(props)
	    this.state = {
	    	bannerList:[<div />],
	    	adList:[],
	    	price:[],
	    	priceList:[],
	    	recommend:[],
	    	recommendList:[],
	    	life:[],
	    	lifeList:[],
	    	hothove:[],
	    	adList2:[],
	    	like:[],
	    	likeList:[]
	    }
	}
	componentDidMount(){
		
	    fetch('http://www.hamij.com/mobile/index.php?act=index')
	        .then((res) => {
	        	return res.json()
	        })
	        .then((res) => {
				var bannerList=res.datas[0].adv_list.item.map(function(item,index){
						
					return <li key={index} className="item"><Link to="/"><img className="img" src={item.image}/></Link></li>;
				});
				var adList=res.datas[1].home1.image;
				var price=res.datas[2].home1.image;
				var priceList=res.datas[3].goods.item.map(function(item1,index){
					var goodsid=item1.goods_id
				
					return <li goodsid={goodsid}><Link to={'/productDetail/goods_id?goods_id=' + item1.goods_id}><div><img key={index} src={item1.goods_image}/></div><p>{item1.goods_name}</p><p className="pri"><span>￥</span>{item1.goods_price}</p></Link></li>;
				})
				var recommend=res.datas[5].home1.image;
				var recommendList=res.datas[6].home8.item.map(function(item2,index){
					return <li><Link to="/"><img src={item2.image} /></Link></li>
				})
				var life=res.datas[7].home1.image;
				var lifeList=res.datas[8].home6.item.map(function(item3,index){
					return <li key={index}> <Link to="/"><img src={item3.image} /></Link></li>
				})
				var hothove=res.datas[9].home7.item.map(function(item4,index){
					
					return <li key={index}><Link to={"/productDetail/goods_id?goods_id="+item4.goods_id}><div><img src={item4.goods_image} /></div><p className="infom">{item4.goods_name}</p><p className="mark">市场价:￥<span>{item4.goods_marketprice}</span></p><p className="price"><span>￥</span>{item4.goods_price}</p></Link></li>
				})
				var adList2 = res.datas[10].home1.image;
				var like = res.datas[11].home1.image;
				var likeList = res.datas[12].goods.item.map(function(item5,index){
					return <li key={index}><Link to={"/productDetail/goods_id?goods_id="+item5.goods_id}><img src={item5.goods_image} /><span className="likeInfo">{item5.goods_name}</span><span className="likePrice"><span>￥</span>{item5.goods_price}</span></Link></li>
				})
	        	this.setState({
		      		bannerList:bannerList,
		      		adList:adList,
		      		price:price,
		      		priceList:priceList,
		      		recommend:recommend,
		      		recommendList:recommendList,
		      		life:life,
		      		lifeList:lifeList,
		      		hothove:hothove,
		      		adList2:adList2,
		      		like:like,
		      		likeList:likeList
	        	})
	        })
	        .catch((e) => { 
	        	console.log(e.message) 
	        })
	}
//{this.state.bannerList}
	render(){
		return (
			<div className="m-board">
				<Scroller scrollY={true}  bounce={false}>
					<div className="banner">
						<Carousel>
						    {this.state.bannerList}  
	
						</Carousel>
					</div>
					
					<div className="list">
						<NavList />
					</div>
					<div className="today">
						<TodayList />
					</div>
					<div className="ad">
						<Link to="/"><img src={this.state.adList} /></Link>
					</div>
					<div className="price">
						<img src={this.state.price} />
					</div>
					<div className="price-list">
						<ul goodsid="1">
							{this.state.priceList}
						</ul>
					</div>
					<div className="recommend">
						<img src={this.state.recommend} />
					</div>
					<div className="recommend-list">
						<Scroller scrollX ={true}   bounce={false}>
							<ul>
								{this.state.recommendList}
							</ul>
						</Scroller>
					</div>
					<div className="life">
						<img src={this.state.life} />
					</div>
					<div className="life-list">
						<ul>
							{this.state.lifeList}
						</ul>
					</div>
					<div className="hothove">
						<span>热荐商家</span>
						<span className="produs">康缘蜂产品店</span>
					</div>
					<div className="hothove-list">
						<Scroller scrollX ={true}   bounce={false}>
							<ul>
								{this.state.hothove}
							</ul>
						</Scroller>
					</div>
					<div className="ad2">
						<Link to="/"><img src={this.state.adList2} /></Link>
					</div>
					<div className="like">
						<img src={this.state.like} />
					</div>
					<div className="like-list">
						<ul>
							{this.state.likeList}
						</ul>
					</div>
				</Scroller>
			</div>
		)
	}
}


export default Board;