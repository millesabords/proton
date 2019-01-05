/*var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform != 'darwin') {
        app.quit();
    }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 900, height: 600});

    // and load the index.html of the app.
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
});
*/

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

//function createWindow () {
var init = function() {
  mainWindow = new BrowserWindow({
	  width: 1800,
	  height: 1200,
	  title: "ca pulpe",
	 //icon: 'assets/zds.png',
    //maximized: false,
    //center: true,
    //frame: false
	 //transparent: true
  }); // on définit une taille pour notre fenêtre

  mainWindow.loadURL(`file://${__dirname}/index.html`); // on doit charger un chemin absolu

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', () => createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function(e, hasVisibleWindows) {
  if (mainWindow === null && !hasVisibleWindows) {
    createWindow();
  }
});

mainWindow = new BrowserWindow({
    width: 1800,
    height: 1200,
    icon: 'assets/zds.png',
    title: 'ZdS, ça pulpe !',
    movable: false
});

