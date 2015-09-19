cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.sample.phonecalltrap/www/PhoneCallTrap.js",
        "id": "com.sample.phonecalltrap.PhoneCallTrap",
        "clobbers": [
            "window.PhoneCallTrap"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.sample.phonecalltrap": "0.0.1",
    "cordova-plugin-whitelist": "1.1.0"
}
// BOTTOM OF METADATA
});