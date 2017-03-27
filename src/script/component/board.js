import React from 'react'
class Board extends React.Component{
	render(){
		return (
			<div className="m-board">
				<div className="banner">
					banner
				</div>
				<div className="list">
					daohan
				</div>
				<div classNmae="today">
					今日头条
				</div>
				<div className="ad">
					广告
				</div>
				<div className="price">
					今日特价
				</div>
				<div className="price-list">
					今日特价列表
				</div>
				<div className="recommend">
					店铺推荐
				</div>
				<div className="recommend-list">
					推荐列表
				</div>
				<div className="life">
					生活家
				</div>
				<div className="life-list">
					生活家列表
				</div>
				<div className="hothove">
					商家热推
				</div>
				<div className="hothove-list">
					商家热推列表
				</div>
				<div className="ad2">
					广告2
				</div>
				<div className="like">
					猜你喜欢
				</div>
				<div className="like-list">
					猜你喜欢列表
				</div>
			</div>
		)
	}
}


export default Board;