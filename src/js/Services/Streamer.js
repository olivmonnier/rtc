
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
  getUserMedia(source, config) {
    let { maxWidth, maxHeight, maxFrameRate } = config
    const { minWidth, minHeight, minFrameRate } = media.video.mandatory

    maxWidth = (maxWidth < minWidth) ? minWidth : maxWidth
    maxHeight = (maxHeight < minHeight) ? minHeight : maxHeight
    maxFrameRate = (maxFrameRate < minFrameRate) ? minFrameRate : maxFrameRate

    if (source) {
      let mediaConfig = media

      mediaConfig.video.mandatory = Object.assign({}, mediaConfig.video.mandatory, {
        chromeMediaSourceId: source.id,
        maxWidth,
        maxHeight,
        maxFrameRate
      })

      return navigator.mediaDevices.getUserMedia(mediaConfig)
    }
  }
}