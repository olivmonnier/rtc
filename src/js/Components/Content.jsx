import React, { Component } from 'react'
import { Card, CardHeader, CardMedia, CardActions } from 'material-ui/Card'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton'
import Streamer from '../Services/Streamer'

class Content extends Component {
  componentDidUpdate() {
    const { states } = this.props
  }
  render() {
    const { states, actions } = this.props
    return (
      <Card>
        <CardHeader>

        </CardHeader>
        <CardMedia>
          <div>{ states.streaming ? 'true' : 'false'}</div>
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