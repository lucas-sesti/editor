const { app, BrowserWindow, Menu } = require("electron");
const url = require("url");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // minimizable: false,
    // maximizable: false,
    // fullscreen: false,
    // closable: false,
    // frame: false,
    // titleBarStyle: "hiddenInset",
    // autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL("http://localhost:4200");

  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});
