import * as Actions from '../Constants/ActionTypes'
import { handleActions } from 'redux-actions'
import { TAB_CONTENT } from '../Constants';

const defaultState = {
  activeTab: TAB_CONTENT,
  media: null,
  peer: null,
  socket: null,
  sources: [],
  sourceSelected: {},
  streaming: false
}

const streamReducer = handleActions({
  [Actions.CREATE_PEER]: (state, action) => ({
    ...state, peer: action.peer
  }),
  [Actions.GET_TOKEN]: (state, action) => ({
    ...state, socket: action.payload
  }),
  [Actions.FETCH_SOURCES]: (state, action) => ({
    ...state, sources: action.payload
  }),
  [Actions.SELECT_SOURCE]: (state, action) => ({
    ...state, sourceSelected: (state.sources.length > 0) ? 
      state.sources.find(source => source.id === action.payload) : 
      {}
  }),
  [Actions.SET_ACTIVE_TAB]: (state, action) => ({
    ...state, activeTab: action.payload
  }),
  [Actions.GET_MEDIA]: (state, action) => ({
    ...state, media: action.payload
  }),
  [Actions.TOGGLE_STREAM]: (state, action) => ({
    ...state, streaming: !state.streaming
  })
}, defaultState)

export default streamReducer