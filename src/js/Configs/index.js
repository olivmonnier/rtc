import * as Constants from '../Constants'
const isWin = /^win/.test(process.platform)

export const audio = isWin ? { mandatory: { chromeMediaSource: 'desktop' } } : false

export const video = {
  mandatory: {
    chromeMediaSource: 'desktop',
    minWidth: Constants.MIN_MEDIA_WIDTH,
    maxWidth: Constants.MAX_MEDIA_WIDTH,
    minHeight: Constants.MIN_MEDIA_HEIGHT,
    maxHeight: Constants.MAX_MEDIA_HEIGHT,
    minFrameRate: Constants.MIN_MEDIA_FRAMERATE,
    maxFrameRate: Constants.MAX_MEDIA_FRAMERATE
  }
}

export const media = {
  audio,
  video
}