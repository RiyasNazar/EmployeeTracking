const { app, BrowserWindow, session, protocol, shell, ipcMain } = require('electron');
const path = require('path');
const appPath = app.getAppPath();
require('electron-reload')(__dirname);
const url = require('url');

protocol.registerSchemesAsPrivileged([{
    scheme: 'app',
    privileges: {
        standard: true,
        secure: true,
        allowServiceWorkers: true,
        supportFetchAPI: true,
    }
}]);

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 400,
        height: 525,
        webPreferences: {
            nodeIntegration: true
        }
    });

    let startUrl = url.format({
        pathname: path.join(appPath, 'dist', 'time-desk', 'index.html'),
        protocol: 'file:',
        slashes: true
    });

    mainWindow.loadURL(startUrl);
    // Open the DevTools.
    // win.webContents.openDevTools();
    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        mainWindow = null
    })

    mainWindow.webContents.on('did-fail-load', () => {
        // RELOAD AND REDIRECT TO FIRST WEBPAGE AGAIN
        mainWindow.loadURL(startUrl);
    });

    mainWindow.webContents.on('new-window', (event, url) => {
        // stop Electron from opening another BrowserWindow
        event.preventDefault()
        // open the url in the default system browser
        shell.openExternal(url)
    })
};
// This method will be called when Electron has finished   
// initialization and is ready to create browser windows.   
// Some APIs can only be used after this event occurs.   
// app.on('ready', createWindow);
app.on('ready', () => {
    protocol.registerFileProtocol('app', (request, callback) => {
        const url = request.url.substr(7)
        callback({ path: path.normalize(`${__dirname}/${url}`) })
      })
    createWindow()
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {

    // On macOS it is common for applications and their menu bar     
    // to stay active until the user quits explicitly with Cmd + Q     
    if (process.platform !== 'darwin') { app.quit() }
});
app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the     
    // dock icon is clicked and there are no other windows open.     
    if (mainWindow === null) { createWindow() }
});

ipcMain.on('resize-app', (event, arg) => {
    mainWindow.setContentBounds({
        x: 111,
        y: 30,
        width: 1024,
        height: 768,
    }, true)
})
