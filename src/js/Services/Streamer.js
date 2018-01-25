
const { desktopCapturer } = require('electron')
import { media } from '../Configs'

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
  }
}