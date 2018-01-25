const io = require('socket.io-client')
const Peer = require('simple-peer')
import { rtcServer } from '../Configs'

export default class RTCPeerConnection {
  constructor() {
    this.socket = io(rtcServer)
    this.handleSocket()
  }
  addStream(stream) {
    this.stream = stream
  }
  createPeer() {
    const config = {
      initiator: true,
      stream: this.stream || false
    }
    this.peer = new Peer(config)
  }
  handlePeer() {
    this.peer.on('signal', (signal) => this.socket.emit('message', JSON.stringify({
      state: 'connect',
      signal
    })))
  }
  handleSocket() {
    this.socket.on('connect', () => {
      console.log('ID', this.socket.id)
      this.room = this.socket.id
    })
    this.socket.on('message', (data) => {
      const { state, signal } = JSON.parse(data)

      if (state === 'ready') {
        if (this.peer) {
          this.peer.destroy()
        }
        this.createPeer()
        this.handlePeer()
      } else if (state === 'connect') {
        this.peer.signal(signal)
      }
    })
  }
}