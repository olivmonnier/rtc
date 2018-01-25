import {
  CONNECT_SIGNAL,
  FETCH_SOURCES,
  GET_MEDIA,
  SELECT_SOURCE,
  START_STREAM,
  TOGGLE_STREAM
} from '../Constants/ActionTypes'
import { createAction } from 'redux-actions'
import Streamer from '../Services/Streamer'
import RTCPeer from '../Services/RTCPeer'

export const connectSignal = createAction(CONNECT_SIGNAL, RTCPeer.connectSignal)

export const fetchSources = createAction(FETCH_SOURCES, Streamer.getSources)

export const selectSource = createAction(SELECT_SOURCE, (event, key, payload) => payload)

export const toggleStream = createAction(TOGGLE_STREAM)

export const getMedia = createAction(GET_MEDIA, (source) => Streamer.getUserMedia(source))
