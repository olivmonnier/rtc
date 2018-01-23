import {
  FETCH_SOURCES,
  SELECT_SOURCE,
  TOGGLE_STREAM
} from '../Constants/ActionTypes'
import { createAction } from 'redux-actions'
import Streamer from '../Services/Streamer'

export const fetchSources = createAction(FETCH_SOURCES, Streamer.getSources)

export const selectSource = createAction(SELECT_SOURCE, (event, key, payload) => payload)

export const toggleStream = createAction(TOGGLE_STREAM)
