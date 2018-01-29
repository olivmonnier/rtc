import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'

const selectSourceComponent = (states, actions) => {
  const { sourceSelected, sources } = states.mediaState
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

export default class Settings extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.actions.fetchSources()
  }
  componentWillReceiveProps(nextProps) {
    const { states, actions } = this.props
    const { sourceSelected } = states.mediaState
    const nextSourceSelected = nextProps.states.mediaState.sourceSelected

    if (nextSourceSelected !== sourceSelected) {
      actions.getMedia(nextSourceSelected)
    }
  }
  render() {
    const { states, actions } = this.props

    return (
      <div className="tab-layout">
        <div className="tab-layout__row">
          {selectSourceComponent(states, actions)}
        </div>
        <div className="tab-layout__row">
          
        </div>
      </div>
    )
  }
}