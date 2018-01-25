import * as Actions from '../Constants/ActionTypes'
import io from 'socket.io-client'
import SimplePeer from 'simple-peer'
import { createAction } from 'redux-actions'
import { rtcServer } from '../Configs'
import Streamer from '../Services/Streamer'

export const fetchSources = createAction(Actions.FETCH_SOURCES, Streamer.getSources)

export const selectSource = createAction(Actions.SELECT_SOURCE, (event, key, payload) => payload)

export const toggleStream = createAction(Actions.TOGGLE_STREAM)

export const getMedia = createAction(Actions.GET_MEDIA, (source) => Streamer.getUserMedia(source))

export const connectSignal = () => (dispatch) => {
  const socket = io(rtcServer)

  socket.on('connect', () => {
    dispatch(getToken(socket))
  })

  socket.on('message', (data) => {
    const { state, signal } = JSON.parse(data)

    if (state === 'ready') {
      dispatch(createPeer())
    } else if (state === 'connect') {
      dispatch(connectPeer(signal))
    }
  })
}

export const connectPeer = (signal) => (dispatch, getState) => {
  const { peer } = getState()

  peer.signal(signal)
}

export const createPeer = () => (dispatch, getState) => {
  const { socket, media } = getState()
  const peer = new SimplePeer({ initiator: true, stream: media || false })

  peer.on('signal', (signal) => socket.emit('message', JSON.stringify({
    state: 'connect',
    signal
  })))

  dispatch({ type: Actions.CREATE_PEER, peer })
}

export const getToken = createAction(Actions.GET_TOKEN)