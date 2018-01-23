const io = require('socket.io-client')
const SimpleWebRTC = require('simplewebrtc')
import { rtcServer, media } from '../Configs'

export default class Streamer {
  constructor() {
    this.webrtc = new SimpleWebRTC({
      url: rtcServer,
      socketio: io,
      localVideoEl: 'localVideo',
      debug: true,
      autoRemoveVideos: true,
      autoRequestMedia: true,
      media
    })

    this.webrtc.on('connectionReady', (sessionId) => {
      this.webrtc.createRoom(sessionId);
    });
  }
}