let fetchData=(url)=>{
	fetch(url)
	        .then((res) => {
	        	return res.json()
	        })
	        .then((res) => {
	        	console.log(res);
	        	
	        	
	        	
	        	
	        	
				/*var bannerList=res.datas[0].adv_list.item.map(function(item,index){
					return <img className="img" key={index} src={item.image}/>;
				});
				var adList=res.datas[1].home1.image;
				var price=res.datas[2].home1.image;
				var priceList=res.datas[3].goods.item.map(function(item1,index){
					var goodsid=item1.goods_id
					return <li goodsid={goodsid}><a href="#"><div><img key={index} src={item1.goods_image}/></div><p>{item1.goods_name}</p><p className="pri"><span>￥</span>{item1.goods_price}</p></a></li>;
				})
				var recommend=res.datas[5].home1.image;
				var recommendList=res.datas[6].home8.item.map(function(item2,index){
					return <li><a href="#"><img src={item2.image} /></a></li>
				})
				var life=res.datas[7].home1.image;
				var lifeList=res.datas[8].home6.item.map(function(item3,index){
					return <li key={index}> <a href="#"><img src={item3.image} /></a></li>
				})
				var hothove=res.datas[9].home7.item.map(function(item4,index){
					return <li key={index}><a href=""><div><img src={item4.goods_image} /></div><p className="infom">{item4.goods_name}</p><p className="mark">市场价:￥<span>{item4.goods_marketprice}</span></p><p className="price"><span>￥</span>{item4.goods_price}</p></a></li>
				})
				var adList2 = res.datas[10].home1.image;
				var like = res.datas[11].home1.image;
				var likeList = res.datas[12].goods.item.map(function(item5,index){
					return <li key={index}><a href="#"><img src={item5.goods_image} /><span className="likeInfo">{item5.goods_name}</span><span className="likePrice"><span>￥</span>{item5.goods_price}</span></a></li>
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
	        	})*/
	        })
	        .catch((e) => { 
	        	console.log(e.message) 
	        })
}
