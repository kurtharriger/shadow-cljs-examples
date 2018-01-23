var $CLJS = require("./cljs_env");
require("./cljs.core.js");
require("./shadow.markup.css.impl.gen.js");
require("./shadow.markup.react.impl.css.js");
var cljs=$CLJS.cljs;
var shadow=$CLJS.shadow;
var goog=$CLJS.goog;

goog.dependencies_.written["shadow.markup.css.js"] = true;

goog.provide('shadow.markup.css');
goog.require('cljs.core');
goog.require('shadow.markup.css.impl.gen');
goog.require('shadow.markup.react.impl.css');
shadow.markup.css.set_env_BANG_ = (function shadow$markup$css$set_env_BANG_(env){
return shadow.markup.react.impl.css.set_env_BANG_(env);
});
shadow.markup.css.root = (function shadow$markup$css$root(var_args){
var args__6412__auto__ = [];
var len__6405__auto___33625 = arguments.length;
var i__6406__auto___33626 = (0);
while(true){
if((i__6406__auto___33626 < len__6405__auto___33625)){
args__6412__auto__.push((arguments[i__6406__auto___33626]));

var G__33627 = (i__6406__auto___33626 + (1));
i__6406__auto___33626 = G__33627;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((1) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((1)),(0),null)):null);
return shadow.markup.css.root.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6413__auto__);
});

shadow.markup.css.root.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,rules){
return shadow.markup.css.impl.gen.root_STAR_(attrs,rules);
});

shadow.markup.css.root.cljs$lang$maxFixedArity = (1);

shadow.markup.css.root.cljs$lang$applyTo = (function (seq33623){
var G__33624 = cljs.core.first(seq33623);
var seq33623__$1 = cljs.core.next(seq33623);
return shadow.markup.css.root.cljs$core$IFn$_invoke$arity$variadic(G__33624,seq33623__$1);
});

shadow.markup.css.rule = (function shadow$markup$css$rule(selector,attrs){
return shadow.markup.css.impl.gen.rule(selector,attrs);
});
shadow.markup.css.nested_rule = (function shadow$markup$css$nested_rule(parent,attrs){
return shadow.markup.css.impl.gen.nested_rule(parent,attrs);
});
/**
 * don't use directly, use defstyled macro
 */
shadow.markup.css.element_STAR_ = (function shadow$markup$css$element_STAR_(el_type,el_selector,style_fn){
return (new shadow.markup.react.impl.css.StyledElement(el_type,el_selector,style_fn,false));
});

module.exports = shadow.markup.css;

//# sourceMappingURL=shadow.markup.css.js.map
