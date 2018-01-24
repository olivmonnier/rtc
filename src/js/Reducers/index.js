import { 
  FETCH_SOURCES,
  GET_MEDIA,
  SELECT_SOURCE,
  START_STREAM,
  TOGGLE_STREAM 
} from '../Constants/ActionTypes'
import { handleActions, handleAction } from 'redux-actions'

const defaultState = {
  sources: [],
  sourceSelected: {},
  media: null,
  streaming: false
}

const streamReducer = handleActions({
  [FETCH_SOURCES]: (state, action) => ({
    ...state, sources: action.payload
  }),
  [SELECT_SOURCE]: (state, action) => ({
    ...state, sourceSelected: (state.sources.length > 0) ? 
      state.sources.find(source => source.id === action.payload) : 
      {}
  }),
  [GET_MEDIA]: (state, action) => ({
    ...state, media: action.payload
  }),
  [TOGGLE_STREAM]: (state, action) => ({
    ...state, streaming: !state.streaming
  })
}, defaultState)

export default streamReducer