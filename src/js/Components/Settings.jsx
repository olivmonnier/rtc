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
    const { sourceSelected, maxFrameRate, maxWidth, maxHeight } = states.mediaState
    const nextSourceSelected = nextProps.states.mediaState.sourceSelected
    const nextMaxFramerate = nextProps.states.mediaState.maxFrameRate
    const nextMaxWidth = nextProps.states.mediaState.maxWidth
    const nextMaxHeight = nextProps.states.mediaState.maxHeight

    if (
      nextSourceSelected !== sourceSelected
      || nextMaxFramerate !== maxFrameRate
      || nextMaxWidth !== maxWidth
      || nextMaxHeight !== maxHeight
    ) {
      actions.getMedia(nextSourceSelected)
    }

    if (nextProps.states.rtcState.signalServer !== states.rtcState.signalServer) {
      actions.disconnectSignal()
    }
  }
  render() {
    const { states, actions } = this.props
    const { mediaState, rtcState } = states

    return (
      <div className="tab-layout">
        <div className="tab-layout__row">
          <div className="tab-layout__item">
            {selectSourceComponent(states, actions)}
          </div>
          <div className="tab-layout__item">
            <TextField
              id="mediaFramerate"
              floatingLabelText="Framerate"
              disabled={rtcState.streaming}
              value={mediaState.maxFrameRate}
              onBlur={actions.validFramerate}
              onChange={actions.updateFramerate} />
          </div>
        </div>
        <div className="tab-layout__row">
          <div className="tab-layout__item">
            <TextField
              id="mediaWidth"
              floatingLabelText="Width"
              disabled={rtcState.streaming}
              value={mediaState.maxWidth}
              onChange={actions.updateWidth}/>
          </div>
          <div className="tab-layout__item">
            <TextField
              id="mediaHeight"
              floatingLabelText="Height"
              disabled={rtcState.streaming}
              value={mediaState.maxHeight}
              onChange={actions.updateHeight}/>
          </div>
        </div>
        <div className="tab-layout__row">
          <TextField
            id="rtcSignalServer"
            floatingLabelText="Url Signal Server"
            disabled={rtcState.streaming}
            value={rtcState.signalServer}
            onChange={actions.updateSignal}
            fullWidth={true}/>
        </div>
      </div>
    )
  }
}