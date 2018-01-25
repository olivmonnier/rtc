import { 
  CONNECT_SIGNAL,
  FETCH_SOURCES,
  GET_MEDIA,
  SELECT_SOURCE,
  START_STREAM,
  TOGGLE_STREAM 
} from '../Constants/ActionTypes'
import { handleActions, handleAction } from 'redux-actions'

const defaultState = {
  media: null,
  socket: null,
  sources: [],
  sourceSelected: {},
  streaming: false
}

const streamReducer = handleActions({
  [CONNECT_SIGNAL]: (state, action) => ({
    ...state, socket: console.log('payload', action.payload) && action.payload
  }),
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