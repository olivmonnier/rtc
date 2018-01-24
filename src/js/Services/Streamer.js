const io = require('socket.io-client')
const Peer = require('simple-peer')
const { desktopCapturer } = require('electron')
import { rtcServer, media } from '../Configs'

let peer

export default {
  getSources() {
    return new Promise((resolve, reject) => {
      desktopCapturer.getSources({ types: ['window', 'screen'] }, (error, sources) => {
        if (error) reject(error)
        resolve(sources)
      })
    })
  },
  getUserMedia(source) {
    if (source) {
      media.video.mandatory['chromeMediaSourceId'] = source.id

      return navigator.mediaDevices.getUserMedia(media)
    }
  },
  createPeerConnection(stream) {
    const socket = io(rtcServer)
    socket.on('connect', () => console.log('ID', socket.id))
    socket.on('message', (data) => onMessage(socket, stream, data))
  }
}

function onMessage(socket, stream, data) {
  console.log(data)
  if (data === 'ready') {
    if (peer) return
    peer = new Peer({ initiator: true, stream })
    peer.on('signal', (signal) => socket.emit('message', JSON.stringify(signal)))

  } else {
    peer.signal(JSON.parse(data))
  }
}