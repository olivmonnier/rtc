import * as Actions from '../Constants/ActionTypes'
import io from 'socket.io-client'
import SimplePeer from 'simple-peer'
import { createAction } from 'redux-actions'

export const toggleStream = createAction(Actions.TOGGLE_STREAM)

export const connectSignal = () => (dispatch, getState) => {
  const { rtcState } = getState()
  const socket = io(rtcState.signalServer)

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
  const { rtcState } = getState()

  rtcState.peer.signal(signal)
}

export const createPeer = () => (dispatch, getState) => {
  const { rtcState, mediaState } = getState()
  let { peer } = rtcState

  if (peer && !peer.destroyed) dispatch(destroyPeer())

  peer = new SimplePeer({ initiator: true, stream: mediaState.media || false })

  peer.on('signal', (signal) => rtcState.socket.emit('message', JSON.stringify({
    state: 'connect',
    signal
  })))

  peer.on('close', () => dispatch(destroyPeer()))

  dispatch({ type: Actions.CREATE_PEER, peer })
}

export const destroyPeer = () => (dispatch, getState) => {
  const { rtcState } = getState()
  const { peer } = rtcState

  if(peer && !peer.destroyed) {
    peer.destroy()
  }
}

export const getToken = createAction(Actions.GET_TOKEN)

export const updateSignal = createAction(Actions.UPDATE_SIGNAL, (event, newValue) => newValue)