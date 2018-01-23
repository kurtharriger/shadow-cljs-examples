var $CLJS = require("./cljs_env");

var goog=$CLJS.goog;
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
goog.dependencies_.written["shadow.js.shim.module$$storybook$addon_actions.js"] = true;

goog.provide("shadow.js.shim.module$$storybook$addon_actions");
shadow.js.shim.module$$storybook$addon_actions = require("@storybook/addon-actions");

module.exports = shadow.js.shim.module$$storybook$addon_actions;
