import {
  FETCH_SOURCES,
  TOGGLE_STREAM
} from '../Constants/ActionTypes'
import { createAction } from 'redux-actions'

export const fetchSources = createAction(FETCH_SOURCES)

export const toggleStream = createAction(TOGGLE_STREAM)
