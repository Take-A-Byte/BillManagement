console.log('from main.js');

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;
const dialog = electron.dialog;

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow();

  win.webContents.openDevTools();
  // and load the index.html of the app.
  win.loadFile('index.html');

  win.once('ready-to-show', () => {
    win.show();
  });

}
  
ipc.on('open-error-dialog', function(event) {
  dialog.showErrorBox('An error message', 'Demo of error message')
})

app.whenReady().then(createWindow)

