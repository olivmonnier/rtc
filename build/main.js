const { app, BrowserWindow } = require('electron')
const { join } = require('path')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 680,
    height: 460
  })

  // mainWindow.setMenu(null)

  mainWindow.loadURL(join('file://', __dirname, 'index.html'))

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.webContents.openDevTools()
}

function initialize() {
  app.on('ready', createWindow)

  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
      createWindow()
    }
  })
}

initialize()