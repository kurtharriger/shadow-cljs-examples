var $CLJS = require("./cljs_env");
require("./cljs.core.js");
require("./shadow.js.shim.module$$storybook$react.js");
require("./shadow.js.shim.module$$storybook$addon_actions.js");
require("./shadow.markup.react.js");
var cljs=$CLJS.cljs;
var shadow=$CLJS.shadow;
var goog=$CLJS.goog;
var demo=$CLJS.demo || ($CLJS.demo = {});
goog.dependencies_.written["demo.app_stories.js"] = true;

goog.provide('demo.app_stories');
goog.require('cljs.core');
goog.require('shadow.js.shim.module$$storybook$react');
goog.require('shadow.js.shim.module$$storybook$addon_actions');
goog.require('shadow.markup.react');
demo.app_stories.big_button = shadow.markup.css.element_STAR_("button","demo-app-stories--big-button",(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em"], null);
}));
shadow.js.shim.module$$storybook$react.storiesOf("Button CLJS",module).add("Normal",(function (){
return shadow.markup.react.impl.interop.create_element_STAR_(["button",({"onClick": shadow.js.shim.module$$storybook$addon_actions.action("click")}),"Hello World"]);
})).add("Big",(function (){
var G__35563 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),shadow.js.shim.module$$storybook$addon_actions.action("big click")], null);
var G__35564 = "Hello World";
return (demo.app_stories.big_button.cljs$core$IFn$_invoke$arity$2 ? demo.app_stories.big_button.cljs$core$IFn$_invoke$arity$2(G__35563,G__35564) : demo.app_stories.big_button.call(null,G__35563,G__35564));
}));

module.exports = demo.app_stories;

//# sourceMappingURL=demo.app_stories.js.map
