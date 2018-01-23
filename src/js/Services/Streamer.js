const io = require('socket.io-client')
const { desktopCapturer } = require('electron')
import { rtcServer, media } from '../Configs'

export default class Streamer {
  constructor() {
    this.webrtc = null
  }
  getSources() {
    return new Promise((resolve, reject) => {
      desktopCapturer.getSources({ types: ['window', 'screen'] }, (error, sources) => {
        if (error) reject(error)
        resolve(sources)
      })
    })
  }
}