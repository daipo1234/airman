cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreenProxy",
    "file": "plugins/cordova-plugin-splashscreen/www/windows/SplashScreenProxy.js",
    "pluginId": "cordova-plugin-splashscreen",
    "runs": true
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-proguard": "1.0.0",
  "cordova-plugin-whitelist": "1.3.2",
  "cordova-plugin-splashscreen": "5.0.2"
};
// BOTTOM OF METADATA
});