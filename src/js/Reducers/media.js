import * as Actions from '../Constants/ActionTypes'
import { handleActions } from 'redux-actions'

const defaultState = {
  media: null,
  sources: [],
  sourceSelected: {}
}

const mediaReducer = handleActions({
  [Actions.FETCH_SOURCES]: (state, action) => ({
    ...state, sources: action.payload
  }),
  [Actions.SELECT_SOURCE]: (state, action) => ({
    ...state, sourceSelected: (state.sources.length > 0) ?
      state.sources.find(source => source.id === action.payload) :
      {}
  }),
  [Actions.GET_MEDIA]: (state, action) => ({
    ...state, media: action.payload
  })
}, defaultState)

export default mediaReducer