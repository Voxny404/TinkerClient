const { app, BrowserWindow } = require('electron')

function createWindow () {

  const win = new BrowserWindow({
    width: 1000,
    Height:720,

    titleBarStyle: 'customButtonsOnHover',
    frame: true,
    transparent: false,
    autoHideMenuBar: true,
    // resizable: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  win.loadFile('client.html')

}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()

  }
})
