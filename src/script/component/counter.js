import React from 'react'
class Counter extends React.Component {
	const inputvalue: 9
	render(){
		return (
			<div className="value-box"> 
				<div className="yo-list yo-list-group">
					<div className="item">
						<div className="yo-number">
							<span onClick={that.plus2.bind(that)} className="minus disabled">-</span>
							<input ref="inputvalue" type="text" className="input" value={that.state.inputvalue}/>
							<span onClick={that.plus2.bind(that)} className="plus">+</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
exports default Counter