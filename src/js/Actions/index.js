import * as Actions from '../Constants/ActionTypes'
import { createAction } from 'redux-actions'

export const setActiveTab = createAction(Actions.SET_ACTIVE_TAB);
export * from './media'
export * from './rtc'
