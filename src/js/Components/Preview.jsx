import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { RTC_SIGNAL_SERVER } from '../Constants'

class Content extends Component {
  render() {
    const { states, actions } = this.props
    const { rtcState, mediaState } = states
    
    return (
      <div className="tab-layout">
        <div className="tab-layout__row">
          <TextField 
            id="urlSignal" 
            value={(rtcState.socket) 
              ? `${rtcState.signalServer}?token=${rtcState.socket.id}` 
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
      </div>
    )
  }
}

export default Content