var $CLJS = require("./cljs_env");

var goog=$CLJS.goog;
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
goog.dependencies_.written["shadow.js.shim.module$$storybook$react.js"] = true;

goog.provide("shadow.js.shim.module$$storybook$react");
shadow.js.shim.module$$storybook$react = require("@storybook/react");

module.exports = shadow.js.shim.module$$storybook$react;
