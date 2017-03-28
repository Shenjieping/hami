import React from "react"

import todayimg from './../../../../images/content/title.png';
class TodayList extends React.Component {
	constructor (props) {
	    super(props)
	    this.state = {
	    	todatList:[]
	    }
	}
	componentDidMount(){
	    fetch('http://www.hamij.com/mobile/index.php?op=toutiao')
	        .then((res) => {
	        	return res.json()
	        })
	        .then((res) => {
	        	
				var todatList=res.datas.cms.map(function(item,index){
					return <li key={index}><a href="#"><span><i className="dot"></i>{item.article_title}</span><p>{item.article_content}</p></a></li>;
				})
				
				
	        	this.setState({
		      		todatList: todatList
	        	})
	        })
	        .catch((e) => { 
	        	console.log(e.message) 
	        })
	}
	render(){
		return (
			<div className="todaylist">
				<img src={todayimg} />
				<div className="todaybox">
					<ul>
						{this.state.todatList}
					</ul>
				</div>
			</div>
		)
	}
}

export default TodayList;
