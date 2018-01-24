import React, { Component } from 'react'
import { Card, CardText, CardMedia, CardActions } from 'material-ui/Card'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton'
import Streamer from '../Services/Streamer'

const selectSourceComponent = (states, actions) => {
  const { sourceSelected, sources } = states
  const { selectSource } = actions

  return (
    <SelectField
      floatingLabelText="Source"
      onChange={selectSource}
      value={(sourceSelected !== {}) ? sourceSelected.id : ''}
      autoWidth={true}
      maxHeight={300}>
      {
        sources.map(source => (
          <MenuItem value={source.id} key={source.id} primaryText={source.name} />
        ))
      }
    </SelectField>
  )
}

class Content extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    this.props.actions.fetchSources()
  }
  componentWillReceiveProps(nextProps) {
    const { states, actions } = this.props

    if (nextProps.states.sourceSelected !== states.sourceSelected) {
      actions.getMedia(nextProps.states.sourceSelected)
    }
  }
  render() {
    const { states, actions } = this.props
    return (
      <Card>
        <CardText>
          { selectSourceComponent(states, actions) }
        </CardText>             
        <CardMedia>
          <video autoPlay muted id="localVideo" src={states.media ? URL.createObjectURL(states.media) : ''}></video>
        </CardMedia>
        <CardActions>
          <FlatButton label="Action1" onClick={actions.toggleStream}/>
          <FlatButton label="Action2" onClick={() => Streamer.createPeerConnection(states.media)}/>
        </CardActions>
      </Card>
    )
  }
}

export default Content