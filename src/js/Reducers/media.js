import * as Actions from '../Constants/ActionTypes'
import { handleActions } from 'redux-actions'

const defaultState = {
  media: null,
  sources: [],
  sourceSelected: {},
  maxWidth: 1920,
  maxHeight: 1080,
  maxFrameRate: 25

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
  }),
  [Actions.UPDATE_FPS]: (state, action) => ({
    ...state, maxFrameRate: action.payload
  }),
  [Actions.UPDATE_WIDTH]: (state, action) => ({
    ...state, maxWidth: action.payload
  }),
  [Actions.UPDATE_HEIGHT]: (state, action) => ({
    ...state, maxHeight: action.payload
  })
}, defaultState)

export default mediaReducer