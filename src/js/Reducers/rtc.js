import * as Actions from '../Constants/ActionTypes'
import { RTC_SIGNAL_SERVER } from '../Constants'
import { handleActions } from 'redux-actions'

const defaultState = {
  peer: null,
  streaming: false,
  socket: null,
  signalServer: RTC_SIGNAL_SERVER
}

const rtcReducer = handleActions({
  [Actions.CREATE_PEER]: (state, action) => ({
    ...state, peer: action.peer
  }),
  [Actions.GET_TOKEN]: (state, action) => ({
    ...state, socket: action.payload
  }),
  [Actions.TOGGLE_STREAM]: (state, action) => ({
    ...state, streaming: !state.streaming
  }),
  [Actions.UPDATE_SIGNAL]: (state, action) => ({
    ...state, signalServer: action.payload
  })
}, defaultState)

export default rtcReducer