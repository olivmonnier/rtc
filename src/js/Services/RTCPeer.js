const io = require('socket.io-client')
const Peer = require('simple-peer')
import { rtcServer } from '../Configs'

// https://medium.freecodecamp.org/how-to-build-a-chat-application-using-react-redux-redux-saga-and-web-sockets-47423e4bc21a

import { getToken } from '../Actions'

export default function RTCPeer(dispatch) {
  let peer, stream
  const socket = io(rtcServer)
  const config = {
    initiator: true,
    stream: stream || false
  }

  socket.on('connect', () => {
    dispatch(getToken(socket.id))
  })

  socket.on('message', (data) => {
    const { state, signal } = JSON.parse(data)

    if (state === 'ready') {
      if (peer) {
        peer.destroy()
      }
      peer = new Peer(config)
      peer.on('signal', (signal) => socket.emit('message', JSON.stringify({
        state: 'connect',
        signal
      })))
    } else if (state === 'connect') {
      peer.signal(signal)
    }
  })
}

// export default class RTCPeerConnection {
//   constructor() {
//     this.socket = io(rtcServer)
//     this.handleSocket()
//   }
//   addStream(stream) {
//     this.stream = stream
//   }
//   createPeer() {
//     const config = {
//       initiator: true,
//       stream: this.stream || false
//     }
//     this.peer = new Peer(config)
//   }
//   handlePeer() {
//     this.peer.on('signal', (signal) => this.socket.emit('message', JSON.stringify({
//       state: 'connect',
//       signal
//     })))
//   }
//   handleSocket() {
//     this.socket.on('connect', () => {
//       console.log('ID', this.socket.id)
//       this.room = this.socket.id
//     })
//     this.socket.on('message', (data) => {
//       const { state, signal } = JSON.parse(data)

//       if (state === 'ready') {
//         if (this.peer) {
//           this.peer.destroy()
//         }
//         this.createPeer()
//         this.handlePeer()
//       } else if (state === 'connect') {
//         this.peer.signal(signal)
//       }
//     })
//   }
// }

