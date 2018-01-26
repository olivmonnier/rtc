import * as Actions from '../Constants/ActionTypes'
import { createAction } from 'redux-actions'
import Streamer from '../Services/Streamer'

export const fetchSources = createAction(Actions.FETCH_SOURCES, Streamer.getSources)
export const selectSource = createAction(Actions.SELECT_SOURCE, (event, key, payload) => payload)
export const getMedia = createAction(Actions.GET_MEDIA, (source) => Streamer.getUserMedia(source))