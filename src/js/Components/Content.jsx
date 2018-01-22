import React, { Component } from 'react'
import { Card, CardMedia, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class Content extends Component {
  render() {
    const { states, actions } = this.props
    return (
      <Card>
        <CardMedia>
          <div>{ states.stream.streaming ? 'Hello' : 'Oups'}</div>
          <video autoPlay muted id="localVideo"></video>
        </CardMedia>
        <CardActions>
          <FlatButton label="Action" onClick={() => actions.toggleStream()}/>
        </CardActions>
      </Card>
    )
  }
}

export default Content