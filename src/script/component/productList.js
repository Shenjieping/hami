import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'

class List extends React.Component {
  constructor(props){
    super(props)
    this.state={
      title: 'abc'
    }
  }
  render() {
    return (
      <div>
        <header>
          <div className="yo-header yo-header-b">
            <h2 className="title">{this.props.value}</h2>
            <span className="regret yo-ico">&#xe61f;</span>
          </div>
        </header>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
  componentDidMount() {
    console.log(1);
    let title = 'dfdfddff'
    this.props.onChange({
      type: 'SETTITLE',
      title: title
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
