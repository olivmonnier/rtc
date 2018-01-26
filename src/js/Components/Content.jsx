import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { rtcServer } from '../Configs'

class Content extends Component {

  render() {
    const { states, actions } = this.props
    return (
      <div className="tab-layout">
        <div className="tab-layout__row">
          <TextField 
            id="urlSignal" 
            value={(states.socket) 
              ? `${rtcServer}?token=${states.socket.id}` 
              : ''
            } 
            floatingLabelText="Url"
            onChange={(e) => e.preventDefault()}
            disabled={!states.socket}
            fullWidth={true}/>
        </div>
        <div className="tab-layout__row">
          <video autoPlay muted id="localVideo" src={states.media ? URL.createObjectURL(states.media) : ''}></video>
        </div>
        <div className="tab-layout__row">
          <RaisedButton
            label="Action1"
            disabled={!states.sourceSelected.hasOwnProperty('id')}
            onClick={actions.connectSignal} />
        </div>
      </div>
    )
  }
}

export default Content