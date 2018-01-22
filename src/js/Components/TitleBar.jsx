import React, { Component } from 'react'
import { remote } from "electron"
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

const onClose = () => remote.getCurrentWindow().close()
const iconElementLeft = <IconButton
  onClick={onClose}
  ><NavigationClose /></IconButton>

class TitleBar extends Component {
  render() {
    return (
      <AppBar
        title="App"
        iconElementLeft={iconElementLeft}
        className="titleBar">
      </AppBar>
    )
  }
}

export default TitleBar