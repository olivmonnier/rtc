import * as Actions from '../Constants/ActionTypes'
import { 
  MAX_MEDIA_FRAMERATE, 
  MAX_MEDIA_WIDTH, 
  MAX_MEDIA_HEIGHT,
  MIN_MEDIA_FRAMERATE,
  MIN_MEDIA_WIDTH,
  MIN_MEDIA_HEIGHT
} from '../Constants'
import { createAction } from 'redux-actions'
import Streamer from '../Services/Streamer'
import { createPeer } from './rtc'

export const fetchSources = createAction(Actions.FETCH_SOURCES, Streamer.getSources)
export const selectSource = createAction(Actions.SELECT_SOURCE, (event, key, payload) => payload)
export const getMedia = (source) => (dispatch, getState) => {
  const { mediaState, rtcState } = getState()
  const { media } = mediaState

  Streamer.getUserMedia(source, mediaState)
    .then(stream => {
      dispatch({ type: Actions.GET_MEDIA, payload: stream })

      if (rtcState.streaming && media && (media !== stream)) {
        dispatch(createPeer())
      }
    })
}
export const updateFramerate = createAction(Actions.UPDATE_FPS, (event, newValue) => {
  const intFps = parseInt(newValue, 10)

  if (intFps <= MIN_MEDIA_FRAMERATE) {
    return MIN_MEDIA_FRAMERATE
  } else {
    return intFps || MAX_MEDIA_FRAMERATE
  }
})
export const updateWidth = createAction(Actions.UPDATE_WIDTH, (event, newValue) => {
  const intWidth = parseInt(newValue, 10)

  if (intWidth <= MIN_MEDIA_WIDTH) {
    return MIN_MEDIA_WIDTH
  } else {
    return intWidth || MAX_MEDIA_WIDTH
  }
})
export const updateHeight = createAction(Actions.UPDATE_HEIGHT, (event, newValue) => {
  const intHeight = parseInt(newValue, 10)

  if (intHeight <= MIN_MEDIA_HEIGHT) {
    return MIN_MEDIA_HEIGHT
  } else {
    return intHeight || MAX_MEDIA_HEIGHT
  }
})