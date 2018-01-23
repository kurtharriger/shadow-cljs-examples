var $CLJS = require("./cljs_env");
require("./cljs.core.js");
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
goog.dependencies_.written["shadow.markup.env.js"] = true;

goog.provide('shadow.markup.env');
goog.require('cljs.core');

/** @define {boolean} */
goog.define("shadow.markup.env.DEBUG",true);

module.exports = shadow.markup.env;

//# sourceMappingURL=shadow.markup.env.js.map
