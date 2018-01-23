var $CLJS = require("./cljs_env");
require("./cljs.core.js");
require("./clojure.string.js");
require("./shadow.markup.react.impl.interop.js");
require("./shadow.markup.css.impl.gen.js");
require("./shadow.markup.env.js");
require("./shadow.dom.js");
require("./shadow.js.shim.module$react.js");
var clojure=$CLJS.clojure;
var cljs=$CLJS.cljs;
var shadow=$CLJS.shadow;
var goog=$CLJS.goog;

goog.dependencies_.written["shadow.markup.react.impl.css.js"] = true;

goog.provide('shadow.markup.react.impl.css');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('shadow.markup.react.impl.interop');
goog.require('shadow.markup.css.impl.gen');
goog.require('shadow.markup.env');
goog.require('shadow.dom');
goog.require('shadow.js.shim.module$react');
if(typeof shadow.markup.react.impl.css.env_ref !== 'undefined'){
} else {
shadow.markup.react.impl.css.env_ref = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof shadow.markup.react.impl.css.active_elements_ref !== 'undefined'){
} else {
shadow.markup.react.impl.css.active_elements_ref = cljs.core.volatile_BANG_(cljs.core.sorted_map());
}
if(typeof shadow.markup.react.impl.css.style_cache_ref !== 'undefined'){
} else {
shadow.markup.react.impl.css.style_cache_ref = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
shadow.markup.react.impl.css.get_rules_for_el = (function shadow$markup$react$impl$css$get_rules_for_el(env,el){
var name = shadow.markup.css.impl.gen.el_selector(el);
var or__5126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.markup.react.impl.css.style_cache_ref),name);
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
var css = shadow.markup.css.impl.gen.css_rules_for_el(env,el);
cljs.core._vreset_BANG_(shadow.markup.react.impl.css.style_cache_ref,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(shadow.markup.react.impl.css.style_cache_ref),name,css));

return css;
}
});
shadow.markup.react.impl.css.style_container = (function shadow$markup$react$impl$css$style_container(){
var styles_container_id = "shadow-markup-styles";
var or__5126__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(styles_container_id);
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
var node = (function (){var G__33389 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),styles_container_id,new cljs.core.Keyword(null,"type","type",1174270348),"text/css"], null)], null);
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__33389) : shadow.dom.build.call(null,G__33389));
})();
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(document.head,node);

return node;
}
});
/**
 * inserts rules for a single el using sheet.insertRule
 */
shadow.markup.react.impl.css.insert_styles_BANG_ = (function shadow$markup$react$impl$css$insert_styles_BANG_(el){
var container = shadow.markup.react.impl.css.style_container();
var n = container.sheet.rules.length;
var rules = shadow.markup.react.impl.css.get_rules_for_el(cljs.core.deref(shadow.markup.react.impl.css.env_ref),el);
var n__6171__auto__ = cljs.core.count(rules);
var i = (0);
while(true){
if((i < n__6171__auto__)){
container.sheet.insertRule(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rules,i),(n + i));

var G__33390 = (i + (1));
i = G__33390;
continue;
} else {
return null;
}
break;
}
});
/**
 * generates a css string and replace the textContent of the <style> container
 */
shadow.markup.react.impl.css.regenerate_styles_BANG_ = (function shadow$markup$react$impl$css$regenerate_styles_BANG_(){
var env = cljs.core.deref(shadow.markup.react.impl.css.env_ref);
var styles = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (env){
return (function (p1__33391_SHARP_){
return shadow.markup.react.impl.css.get_rules_for_el(env,p1__33391_SHARP_);
});})(env))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(cljs.core.deref(shadow.markup.react.impl.css.active_elements_ref))], 0)));
var container = shadow.markup.react.impl.css.style_container();
return container.textContent = styles;
});
shadow.markup.react.impl.css.set_env_BANG_ = (function shadow$markup$react$impl$css$set_env_BANG_(new_env){
cljs.core.vreset_BANG_(shadow.markup.react.impl.css.env_ref,new_env);

cljs.core.vreset_BANG_(shadow.markup.react.impl.css.style_cache_ref,cljs.core.PersistentArrayMap.EMPTY);

if(cljs.core.empty_QMARK_(cljs.core.deref(shadow.markup.react.impl.css.active_elements_ref))){
return null;
} else {
return shadow.markup.react.impl.css.regenerate_styles_BANG_();
}
});
shadow.markup.react.impl.css.inject_rules_BANG_ = (function shadow$markup$react$impl$css$inject_rules_BANG_(el){
var selector = shadow.markup.css.impl.gen.el_selector(el);
cljs.core._vreset_BANG_(shadow.markup.react.impl.css.style_cache_ref,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.markup.react.impl.css.style_cache_ref),selector));

cljs.core._vreset_BANG_(shadow.markup.react.impl.css.active_elements_ref,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(shadow.markup.react.impl.css.active_elements_ref),selector,el));

if(shadow.markup.env.DEBUG){
return shadow.markup.react.impl.css.regenerate_styles_BANG_();
} else {
try{return shadow.markup.react.impl.css.insert_styles_BANG_(el);
}catch (e33392){var e = e33392;
console.error("insert-styles failed",e,el);

return shadow.markup.react.impl.css.regenerate_styles_BANG_();
}}
});
shadow.markup.react.impl.css.check_conflicting_props_BANG_ = (function shadow$markup$react$impl$css$check_conflicting_props_BANG_(p__33393){
var map__33394 = p__33393;
var map__33394__$1 = ((((!((map__33394 == null)))?((((map__33394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33394):map__33394);
var props = map__33394__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33394__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33394__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33394__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var total = (function (){var G__33396 = (0);
var G__33396__$1 = (cljs.core.truth_(class$)?(G__33396 + (1)):G__33396);
var G__33396__$2 = (cljs.core.truth_(className)?(G__33396__$1 + (1)):G__33396__$1);
if(cljs.core.truth_(classes)){
return (G__33396__$2 + (1));
} else {
return G__33396__$2;
}
})();
if((total > (1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("conflicting props, can only have one of: class className classes",props);
} else {
return null;
}
});
shadow.markup.react.impl.css.merge_props_and_class = (function shadow$markup$react$impl$css$merge_props_and_class(props,class$){
if(shadow.markup.env.DEBUG){
shadow.markup.react.impl.css.check_conflicting_props_BANG_(props);
} else {
}

var class_from_props = (function (){var or__5126__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
var or__5126__auto____$1 = new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5126__auto____$1)){
return or__5126__auto____$1;
} else {
var temp__5457__auto__ = new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5457__auto__)){
var classes = temp__5457__auto__;
if(cljs.core.map_QMARK_(classes)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (classes,temp__5457__auto__,or__5126__auto____$1,or__5126__auto__){
return (function (key){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(classes,key);
});})(classes,temp__5457__auto__,or__5126__auto____$1,or__5126__auto__))
,cljs.core.keys(classes))));
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,classes));
}
} else {
return null;
}
}
}
})();
var className = (((class_from_props == null))?class$:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_from_props)].join(''));
return shadow.markup.react.impl.interop.convert_props(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"classes","classes",2037804510)], 0)),new cljs.core.Keyword(null,"className","className",-1983287057),className));
});
shadow.markup.react.impl.css.styled_element_invoke = (function shadow$markup$react$impl$css$styled_element_invoke(el,props,args){
if(cljs.core.not(el.injected_QMARK_)){
shadow.markup.react.impl.css.inject_rules_BANG_(el);

el.injected_QMARK_ = true;
} else {
}

var css_sel = shadow.markup.css.impl.gen.el_selector(el);
var el_type = shadow.markup.css.impl.gen.el_type(el);
if(cljs.core.map_QMARK_(props)){
args.unshift(shadow.markup.react.impl.css.merge_props_and_class(props,css_sel));
} else {
args.unshift(props);

args.unshift(({"className": css_sel}));
}

args.unshift(el_type);

return shadow.js.shim.module$react.createElement.apply(null,args);
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {shadow.markup.css.impl.gen.IElement}
*/
shadow.markup.react.impl.css.StyledElement = (function (el_type,css_sel,style_fn,injected_QMARK_){
this.el_type = el_type;
this.css_sel = css_sel;
this.style_fn = style_fn;
this.injected_QMARK_ = injected_QMARK_;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.markup.react.impl.css.StyledElement.prototype.shadow$markup$css$impl$gen$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.markup.react.impl.css.StyledElement.prototype.shadow$markup$css$impl$gen$IElement$el_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.el_type;
});

shadow.markup.react.impl.css.StyledElement.prototype.shadow$markup$css$impl$gen$IElement$el_selector$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.css_sel;
});

shadow.markup.react.impl.css.StyledElement.prototype.shadow$markup$css$impl$gen$IElement$el_root$arity$2 = (function (_,env){
var self__ = this;
var ___$1 = this;
return (self__.style_fn.cljs$core$IFn$_invoke$arity$1 ? self__.style_fn.cljs$core$IFn$_invoke$arity$1(env) : self__.style_fn.call(null,env));
});

shadow.markup.react.impl.css.StyledElement.prototype.call = (function() {
var G__33398 = null;
var G__33398__2 = (function (self__,props){
var self__ = this;
var self____$1 = this;
var el = self____$1;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[]);
});
var G__33398__3 = (function (self__,props,c1){
var self__ = this;
var self____$1 = this;
var el = self____$1;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1]);
});
var G__33398__4 = (function (self__,props,c1,c2){
var self__ = this;
var self____$1 = this;
var el = self____$1;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2]);
});
var G__33398__5 = (function (self__,props,c1,c2,c3){
var self__ = this;
var self____$1 = this;
var el = self____$1;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3]);
});
var G__33398__6 = (function (self__,props,c1,c2,c3,c4){
var self__ = this;
var self____$1 = this;
var el = self____$1;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4]);
});
var G__33398__7 = (function (self__,props,c1,c2,c3,c4,c5){
var self__ = this;
var self____$1 = this;
var el = self____$1;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5]);
});
var G__33398__8 = (function (self__,props,c1,c2,c3,c4,c5,c6){
var self__ = this;
var self____$1 = this;
var el = self____$1;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6]);
});
var G__33398__9 = (function (self__,props,c1,c2,c3,c4,c5,c6,c7){
var self__ = this;
var self____$1 = this;
var el = self____$1;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7]);
});
var G__33398__10 = (function (self__,props,c1,c2,c3,c4,c5,c6,c7,c8){
var self__ = this;
var self____$1 = this;
var el = self____$1;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8]);
});
var G__33398__11 = (function (self__,props,c1,c2,c3,c4,c5,c6,c7,c8,c9){
var self__ = this;
var self____$1 = this;
var el = self____$1;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9]);
});
var G__33398__12 = (function (self__,props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10){
var self__ = this;
var self____$1 = this;
var el = self____$1;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10]);
});
var G__33398__13 = (function (self__,props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11){
var self__ = this;
var self____$1 = this;
var el = self____$1;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11]);
});
var G__33398__14 = (function (self__,props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12){
var self__ = this;
var self____$1 = this;
var el = self____$1;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12]);
});
var G__33398__15 = (function (self__,props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13){
var self__ = this;
var self____$1 = this;
var el = self____$1;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13]);
});
var G__33398__16 = (function (self__,props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14){
var self__ = this;
var self____$1 = this;
var el = self____$1;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14]);
});
var G__33398__17 = (function (self__,props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15){
var self__ = this;
var self____$1 = this;
var el = self____$1;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15]);
});
var G__33398__18 = (function (self__,props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16){
var self__ = this;
var self____$1 = this;
var el = self____$1;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16]);
});
G__33398 = function(self__,props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16){
switch(arguments.length){
case 2:
return G__33398__2.call(this,self__,props);
case 3:
return G__33398__3.call(this,self__,props,c1);
case 4:
return G__33398__4.call(this,self__,props,c1,c2);
case 5:
return G__33398__5.call(this,self__,props,c1,c2,c3);
case 6:
return G__33398__6.call(this,self__,props,c1,c2,c3,c4);
case 7:
return G__33398__7.call(this,self__,props,c1,c2,c3,c4,c5);
case 8:
return G__33398__8.call(this,self__,props,c1,c2,c3,c4,c5,c6);
case 9:
return G__33398__9.call(this,self__,props,c1,c2,c3,c4,c5,c6,c7);
case 10:
return G__33398__10.call(this,self__,props,c1,c2,c3,c4,c5,c6,c7,c8);
case 11:
return G__33398__11.call(this,self__,props,c1,c2,c3,c4,c5,c6,c7,c8,c9);
case 12:
return G__33398__12.call(this,self__,props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10);
case 13:
return G__33398__13.call(this,self__,props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11);
case 14:
return G__33398__14.call(this,self__,props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12);
case 15:
return G__33398__15.call(this,self__,props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13);
case 16:
return G__33398__16.call(this,self__,props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14);
case 17:
return G__33398__17.call(this,self__,props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15);
case 18:
return G__33398__18.call(this,self__,props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__33398.cljs$core$IFn$_invoke$arity$2 = G__33398__2;
G__33398.cljs$core$IFn$_invoke$arity$3 = G__33398__3;
G__33398.cljs$core$IFn$_invoke$arity$4 = G__33398__4;
G__33398.cljs$core$IFn$_invoke$arity$5 = G__33398__5;
G__33398.cljs$core$IFn$_invoke$arity$6 = G__33398__6;
G__33398.cljs$core$IFn$_invoke$arity$7 = G__33398__7;
G__33398.cljs$core$IFn$_invoke$arity$8 = G__33398__8;
G__33398.cljs$core$IFn$_invoke$arity$9 = G__33398__9;
G__33398.cljs$core$IFn$_invoke$arity$10 = G__33398__10;
G__33398.cljs$core$IFn$_invoke$arity$11 = G__33398__11;
G__33398.cljs$core$IFn$_invoke$arity$12 = G__33398__12;
G__33398.cljs$core$IFn$_invoke$arity$13 = G__33398__13;
G__33398.cljs$core$IFn$_invoke$arity$14 = G__33398__14;
G__33398.cljs$core$IFn$_invoke$arity$15 = G__33398__15;
G__33398.cljs$core$IFn$_invoke$arity$16 = G__33398__16;
G__33398.cljs$core$IFn$_invoke$arity$17 = G__33398__17;
G__33398.cljs$core$IFn$_invoke$arity$18 = G__33398__18;
return G__33398;
})()
;

shadow.markup.react.impl.css.StyledElement.prototype.apply = (function (self__,args33397){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args33397)));
});

shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$1 = (function (props){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[]);
});

shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$2 = (function (props,c1){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1]);
});

shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$3 = (function (props,c1,c2){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2]);
});

shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$4 = (function (props,c1,c2,c3){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3]);
});

shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$5 = (function (props,c1,c2,c3,c4){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4]);
});

shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$6 = (function (props,c1,c2,c3,c4,c5){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5]);
});

shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$7 = (function (props,c1,c2,c3,c4,c5,c6){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6]);
});

shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$8 = (function (props,c1,c2,c3,c4,c5,c6,c7){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7]);
});

shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$9 = (function (props,c1,c2,c3,c4,c5,c6,c7,c8){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8]);
});

shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$10 = (function (props,c1,c2,c3,c4,c5,c6,c7,c8,c9){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9]);
});

shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$11 = (function (props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10]);
});

shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$12 = (function (props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11]);
});

shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$13 = (function (props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12]);
});

shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$14 = (function (props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13]);
});

shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$15 = (function (props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14]);
});

shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$16 = (function (props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15]);
});

shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$17 = (function (props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16]);
});

shadow.markup.react.impl.css.StyledElement.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el-type","el-type",1749720214,null),new cljs.core.Symbol(null,"css-sel","css-sel",-1804652482,null),new cljs.core.Symbol(null,"style-fn","style-fn",-965157553,null),cljs.core.with_meta(new cljs.core.Symbol(null,"injected?","injected?",1729313068,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

shadow.markup.react.impl.css.StyledElement.cljs$lang$type = true;

shadow.markup.react.impl.css.StyledElement.cljs$lang$ctorStr = "shadow.markup.react.impl.css/StyledElement";

shadow.markup.react.impl.css.StyledElement.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"shadow.markup.react.impl.css/StyledElement");
});

shadow.markup.react.impl.css.__GT_StyledElement = (function shadow$markup$react$impl$css$__GT_StyledElement(el_type,css_sel,style_fn,injected_QMARK_){
return (new shadow.markup.react.impl.css.StyledElement(el_type,css_sel,style_fn,injected_QMARK_));
});


module.exports = shadow.markup.react.impl.css;

//# sourceMappingURL=shadow.markup.react.impl.css.js.map
