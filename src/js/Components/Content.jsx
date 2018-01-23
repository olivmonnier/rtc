import React, { Component } from 'react'
import { Card, CardMedia, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Streamer from '../Services/Streamer'

class Content extends Component {
  componentDidUpdate() {
    const { states } = this.props

    if (states.streaming) {
      console.log(states.streaming)
      // new Streamer()
    }
  }
  render() {
    const { states, actions } = this.props
    return (
      <Card>
        <CardMedia>
          <div>{ states.streaming ? 'Hello' : 'Oups'}</div>
          <video autoPlay muted id="localVideo"></video>
        </CardMedia>
        <CardActions>
          <FlatButton label="Action" onClick={actions.toggleStream}/>
        </CardActions>
      </Card>
    )
  }
}

export default Content