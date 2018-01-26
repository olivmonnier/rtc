import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'

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

export default class Settings extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
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
      <div className="tab-layout">
        <div>
          {selectSourceComponent(states, actions)}
        </div>
      </div>
    )
  }
}