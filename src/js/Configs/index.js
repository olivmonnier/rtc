const isWin = /^win/.test(process.platform)

export const audio = isWin ? { mandatory: { chromeMediaSource: 'desktop' } } : true

export const video = {
  mandatory: {
    chromeMediaSource: 'desktop',
    minWidth: 1280,
    maxWidth: 1920,
    minHeight: 720,
    maxHeight: 1080
  }
}

export const media = {
  audio,
  video
}

export const rtcServer = 'https://webrtc-stream-server.herokuapp.com/'