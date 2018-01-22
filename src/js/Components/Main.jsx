import React, { Component } from 'react'
import TitleBar from './TitleBar.jsx'
import Content from './Content.jsx'

class Main extends Component {
  render() {
    return (
      <div>
        <TitleBar/>
        <Content/>
      </div>
    )
  }
}

export default Main