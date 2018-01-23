import { 
  FETCH_SOURCES,
  TOGGLE_STREAM, 
  SELECT_SOURCE
} from '../Constants/ActionTypes'
import { handleActions, handleAction } from 'redux-actions'

const defaultState = {
  sources: [],
  sourceSelected: {},
  streaming: false
}

const streamReducer = handleActions({
  [FETCH_SOURCES]: (state, action) => ({
    ...state, sources: action.payload
  }),
  [SELECT_SOURCE]: (state, action) => ({
    ...state, sourceSelected: (state.sources.length > 0) ? state.sources.filter(source => source.id == action.payload)[0] : {}
  }),
  [TOGGLE_STREAM]: (state, action) => ({
    ...state, streaming: !state.streaming
  })
}, defaultState)

export default streamReducer