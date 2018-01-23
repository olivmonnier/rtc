import React, { Component } from 'react'
import { Card, CardText, CardMedia, CardActions } from 'material-ui/Card'
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
        <CardText>
          <SelectField
            floatingLabelText="Source"
            onChange={actions.selectSource}
            value={(states.sourceSelected !== {}) ? states.sourceSelected.name : ''}
            autoWidth={true}>
            {
              states.sources.map(source => (
                <MenuItem value={source.id} key={source.id} primaryText={source.name} />
              ))
            }
          </SelectField>
        </CardText>
        <CardMedia>
          <div>{ states.streaming ? 'true' : 'false'}</div>
          <video autoPlay muted id="localVideo"></video>
        </CardMedia>
        <CardActions>
          <FlatButton label="Action1" onClick={actions.toggleStream}/>
          <FlatButton label="Action2" onClick={actions.fetchSources}/>
        </CardActions>
      </Card>
    )
  }
}

export default Content