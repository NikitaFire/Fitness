cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "cordova-plugin-secure-storage-echo.SecureStorage",
      "file": "plugins/cordova-plugin-secure-storage-echo/www/securestorage.js",
      "pluginId": "cordova-plugin-secure-storage-echo",
      "clobbers": [
        "SecureStorage"
      ]
    },
    {
      "id": "cordova-sqlite-ext.SQLitePlugin",
      "file": "plugins/cordova-sqlite-ext/www/SQLitePlugin.js",
      "pluginId": "cordova-sqlite-ext",
      "clobbers": [
        "SQLitePlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-androidx-adapter": "1.1.3",
    "cordova-plugin-resource-generator": "0.1.0",
    "cordova-plugin-ionic-webview": "5.0.0",
    "cordova-plugin-device": "2.1.0",
    "cordova-plugin-splashscreen": "6.0.1",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-network-information": "2.0.2",
    "cordova-plugin-secure-storage-echo": "5.1.1",
    "cordova-sqlite-ext": "6.0.0"
  };
});