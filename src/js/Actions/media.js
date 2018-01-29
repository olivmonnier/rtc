import * as Actions from '../Constants/ActionTypes'
import { createAction } from 'redux-actions'
import Streamer from '../Services/Streamer'
import { createPeer } from './rtc'

export const fetchSources = createAction(Actions.FETCH_SOURCES, Streamer.getSources)
export const selectSource = createAction(Actions.SELECT_SOURCE, (event, key, payload) => payload)
export const getMedia = (source) => (dispatch, getState) => {
  const { mediaState, rtcState } = getState()
  const { media } = mediaState

  Streamer.getUserMedia(source)
    .then(stream => {
      dispatch({ type: Actions.GET_MEDIA, payload: stream })

      if (rtcState.streaming && media && (media !== stream)) {
        dispatch(createPeer())
      }
    })
}