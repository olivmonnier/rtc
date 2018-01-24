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
      autoWidth={true}>
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
    this.toggleStream = this.toggleStream.bind(this)
  }
  componentDidMount(){
    this.props.actions.fetchSources()
  }
  componentWillReceiveProps(nextProps) {
    const { states, actions } = this.props

    if (nextProps.states.streaming) {
      if (nextProps.states.sourceSelected !== states.sourceSelected) {
        actions.startStream(nextProps.states.sourceSelected)
      }
    }
  }
  render() {
    const { states, actions } = this.props
    return (
      <Card>
        <CardText>
          { selectSourceComponent(states, actions) }
        </CardText>        
          { states.streaming ? (
            <CardMedia>
              <video autoPlay muted id="localVideo" src={states.stream ? URL.createObjectURL(states.stream) : ''}></video>
            </CardMedia>
          ) : '' }       
        <CardActions>
          <FlatButton label="Action1" onClick={this.toggleStream}/>
        </CardActions>
      </Card>
    )
  }
  toggleStream() {
    const { states, actions } = this.props
    const source = (!states.streaming) ? states.sourceSelected : null

    // actions.startStream(source)
    actions.toggleStream()
  }
}

export default Content