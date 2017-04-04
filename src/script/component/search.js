import React from "react"
import { Link } from "react-router"
import $ from "jquery"
import 'whatwg-fetch'

import Back from "./../../../images/kind/arrow_left_w.png"
import sh from "./../../../images/search_ico.png"


class Search extends React.Component {
	constructor (props) {
	    super(props)
	    this.state = {
	    	shows:[],
	    	listShop:[],
	    	hotShop:[]
	    }
	}
	componentDidMount(){
		//console.log(this.refs.txt.focus())
		//var 
		//console.log(this.state.list)
		var that=this;
		fetch("http://www.hamij.com/mobile/index.php?act=index&op=search_key_list")
			.then(function(response){
				return response.json()
			}).then(function(json){
				var hotShop=json.datas.list.map(function(item,index){
					return <span>{item}</span>
				})
				that.setState({
					hotShop:hotShop
				})
			}).catch(function(er){
				console.log(er)
			})
	}
	back(){
		window.history.go(-1);
	}
	soso(event){
		console.log(this.refs.txt.value)
		var txt=this.refs.txt.value;
		if(txt != ""){
			fetch("http://www.hamij.com/mobile/index.php?act=goods&op=goods_list&keyword=&page="+txt+"&curpage=1&keyword="+txt)
				.then(function(response){
					return response.json()
				}).then(function(json){
					console.log(json)
				}).catch(function(er){
					console.log(er)
				})
		}
	}
	handleChange(event){
		//console.log(this.aa)
		//this.setState({value: event.target.value});
		var that=this;
		var txtVal=event.target.value
		if(txtVal != ""){
			fetch("http://www.hamij.com/mobile/index.php?act=goods&op=auto_complete&term="+txtVal)
				.then(function(response){
					return response.json()
				}).then(function(json){
					var list=json.datas.list.map(function(item,index){
						return <option>{item}</option>
					})
					that.setState({
						list:list
					})
				}).catch(function(er){
					console.log(er)
				})
		}
	}
	render(){
		
		return (
			<div className="search">
				<header>
					<span className="back" onClick={this.back}><img src={Back} /></span>
					<h2 className="soso">
						<img src={sh} />
						<input ref="txt" onChange={this.handleChange.bind(this)} list="ls" type="text" />
						<datalist id="ls">
							{this.state.list}
						</datalist>
					</h2>
					<Link to="" onClick={this.soso.bind(this)} className="ser">搜索</Link>
				</header>
				<p className="hot">热门搜索</p>
				<div className="hotShop">
					{this.state.hotShop}
				</div>
			</div>
		)
	}
}

export default Search;