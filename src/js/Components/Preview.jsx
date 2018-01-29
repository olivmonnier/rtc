import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { rtcServer } from '../Configs'

class Content extends Component {
  constructor(props) {
    super(props)
    this.handleToggleStream = this.handleToggleStream.bind(this)
  }
  render() {
    const { states, actions } = this.props
    const { rtcState, mediaState } = states
    
    return (
      <div className="tab-layout">
        <div className="tab-layout__row">
          <TextField 
            id="urlSignal" 
            value={(rtcState.socket) 
              ? `${rtcServer}?token=${rtcState.socket.id}` 
              : ''
            } 
            floatingLabelText="Url"
            onChange={(e) => e.preventDefault()}
            disabled={!rtcState.socket}
            fullWidth={true}/>
        </div>
        <div className="tab-layout__row">
          <video autoPlay muted id="localVideo" src={mediaState.media ? URL.createObjectURL(mediaState.media) : ''}></video>
        </div>
        <div className="tab-layout__row tools">
          <RaisedButton
            label="Action1"
            disabled={!mediaState.sourceSelected.hasOwnProperty('id')}
            onClick={this.handleToggleStream} />
        </div>
      </div>
    )
  }

  handleToggleStream() {
    const { states, actions } = this.props
    const { streaming, socket } = states.rtcState
    
    actions.toggleStream()
    
    if (!streaming) {
      if (!socket) return actions.connectSignal()
      actions.createPeer()
    } else {
      actions.destroyPeer()
    }
  }
}

export default Content