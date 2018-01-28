import * as Actions from '../Constants/ActionTypes'
import { handleActions } from 'redux-actions'

const defaultState = {
  peer: null,
  streaming: false,
  socket: null
}

const rtcReducer = handleActions({
  [Actions.CREATE_PEER]: (state, action) => ({
    ...state, peer: action.peer
  }),
  [Actions.DELETE_PEER]: (stae, action) => ({
    ...state, peer: null
  }),
  [Actions.GET_TOKEN]: (state, action) => ({
    ...state, socket: action.payload
  }),
  [Actions.TOGGLE_STREAM]: (state, action) => ({
    ...state, streaming: !state.streaming
  })
}, defaultState)

export default rtcReducer