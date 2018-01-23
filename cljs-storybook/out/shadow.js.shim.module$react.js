var $CLJS = require("./cljs_env");

var goog=$CLJS.goog;
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
goog.dependencies_.written["shadow.js.shim.module$react.js"] = true;

goog.provide("shadow.js.shim.module$react");
shadow.js.shim.module$react = require("react");

module.exports = shadow.js.shim.module$react;
