import React, { Component } from 'react'
import { remote } from "electron"
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import Cast from 'material-ui/svg-icons/hardware/cast'

const iconElementRight = (states, handler) => {
  const { mediaState } = states

  return (
    <IconButton
      disabled={!mediaState.sourceSelected.hasOwnProperty('id')}
      onClick={handler}>
      <Cast />
    </IconButton>
  )
}


class TitleBar extends Component {
  constructor(props) {
    super(props)
    this.handleToggleStream = this.handleToggleStream.bind(this)
  }

  render() {
    const { states } = this.props

    return (
      <AppBar
        title="RTCRemote"
        showMenuIconButton={false}
        iconElementRight={iconElementRight(states, this.handleToggleStream)}
        className="titleBar">
      </AppBar>
    )
  }

  handleToggleStream() {
    const { states, actions } = this.props
    const { streaming, socket } = states.rtcState

    actions.toggleStream()

    if (!streaming) {
      if (!socket || socket.disconnected) return actions.connectSignal()
      actions.createPeer()
    } else {
      actions.destroyPeer()
    }
  }
}

export default TitleBar