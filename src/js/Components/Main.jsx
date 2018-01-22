import React, { Component } from 'react'
import TitleBar from './TitleBar.jsx'
import Content from './Content.jsx'

class Main extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <TitleBar/>
        <Content {...this.props} />
      </div>
    )
  }
}

export default Main