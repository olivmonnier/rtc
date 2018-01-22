import { combineReducers } from 'redux'
import { TOGGLE_STREAM } from '../Constants/ActionTypes'

const stateDefault = {
  streaming: false
}

function stream(state = stateDefault, action) {
  switch(action.type) {
    case TOGGLE_STREAM: 
      return { 
        ...state,
        streaming: !state.streaming 
      }
    default:
      return state;
  }
}

const appReducer = combineReducers({
  stream
})

export default appReducer