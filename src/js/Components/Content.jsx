import React, { Component } from 'react'
import { Card, CardMedia, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class Content extends Component {
  render() {
    return (
      <Card>
        <CardMedia>
          <video autoPlay muted id="localVideo"></video>
        </CardMedia>
        <CardActions>
          <FlatButton label="Action" />
        </CardActions>
      </Card>
    )
  }
}

export default Content