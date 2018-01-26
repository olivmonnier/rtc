import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import * as Actions from '../Constants/ActionTypes'
import { TAB_PREVIEW } from '../Constants'
import mediaReducer from './media'
import rtcReducer from './rtc'

const defaultState = {
  activeTab: TAB_PREVIEW
}

const appReducer = handleActions({
  [Actions.SET_ACTIVE_TAB]: (state, action) => ({
    ...state, activeTab: action.payload
  })
}, defaultState)

export default combineReducers({
  appState: appReducer,
  mediaState: mediaReducer,
  rtcState: rtcReducer
})