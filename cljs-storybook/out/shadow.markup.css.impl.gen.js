var $CLJS = require("./cljs_env");
require("./cljs.core.js");
require("./clojure.string.js");
var clojure=$CLJS.clojure;
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
goog.dependencies_.written["shadow.markup.css.impl.gen.js"] = true;

goog.provide('shadow.markup.css.impl.gen');
goog.require('cljs.core');
goog.require('clojure.string');

/**
 * @interface
 */
shadow.markup.css.impl.gen.IElement = function(){};

shadow.markup.css.impl.gen.el_selector = (function shadow$markup$css$impl$gen$el_selector(x){
if((!((x == null))) && (!((x.shadow$markup$css$impl$gen$IElement$el_selector$arity$1 == null)))){
return x.shadow$markup$css$impl$gen$IElement$el_selector$arity$1(x);
} else {
var x__5859__auto__ = (((x == null))?null:x);
var m__5860__auto__ = (shadow.markup.css.impl.gen.el_selector[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__5860__auto__.call(null,x));
} else {
var m__5860__auto____$1 = (shadow.markup.css.impl.gen.el_selector["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__5860__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("IElement.el-selector",x);
}
}
}
});

shadow.markup.css.impl.gen.el_type = (function shadow$markup$css$impl$gen$el_type(x){
if((!((x == null))) && (!((x.shadow$markup$css$impl$gen$IElement$el_type$arity$1 == null)))){
return x.shadow$markup$css$impl$gen$IElement$el_type$arity$1(x);
} else {
var x__5859__auto__ = (((x == null))?null:x);
var m__5860__auto__ = (shadow.markup.css.impl.gen.el_type[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__5860__auto__.call(null,x));
} else {
var m__5860__auto____$1 = (shadow.markup.css.impl.gen.el_type["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__5860__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("IElement.el-type",x);
}
}
}
});

shadow.markup.css.impl.gen.el_root = (function shadow$markup$css$impl$gen$el_root(x,env){
if((!((x == null))) && (!((x.shadow$markup$css$impl$gen$IElement$el_root$arity$2 == null)))){
return x.shadow$markup$css$impl$gen$IElement$el_root$arity$2(x,env);
} else {
var x__5859__auto__ = (((x == null))?null:x);
var m__5860__auto__ = (shadow.markup.css.impl.gen.el_root[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(x,env) : m__5860__auto__.call(null,x,env));
} else {
var m__5860__auto____$1 = (shadow.markup.css.impl.gen.el_root["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(x,env) : m__5860__auto____$1.call(null,x,env));
} else {
throw cljs.core.missing_protocol("IElement.el-root",x);
}
}
}
});


/**
 * @interface
 */
shadow.markup.css.impl.gen.IStyleGen = function(){};

/**
 * generate a sequence of strings (css-rules)
 */
shadow.markup.css.impl.gen.gen_css_rules = (function shadow$markup$css$impl$gen$gen_css_rules(x,tag,class$){
if((!((x == null))) && (!((x.shadow$markup$css$impl$gen$IStyleGen$gen_css_rules$arity$3 == null)))){
return x.shadow$markup$css$impl$gen$IStyleGen$gen_css_rules$arity$3(x,tag,class$);
} else {
var x__5859__auto__ = (((x == null))?null:x);
var m__5860__auto__ = (shadow.markup.css.impl.gen.gen_css_rules[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$3(x,tag,class$) : m__5860__auto__.call(null,x,tag,class$));
} else {
var m__5860__auto____$1 = (shadow.markup.css.impl.gen.gen_css_rules["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$3(x,tag,class$) : m__5860__auto____$1.call(null,x,tag,class$));
} else {
throw cljs.core.missing_protocol("IStyleGen.gen-css-rules",x);
}
}
}
});

/**
 * called from macro, assumes ns as clojure.lang.Namespace and el-name as a symbol
 */
shadow.markup.css.impl.gen.gen_el_selector = (function shadow$markup$css$impl$gen$gen_el_selector(ns,el_name){
var ns__$1 = (function (){var or__5126__auto__ = new cljs.core.Keyword("shadow.markup.css","alias","shadow.markup.css/alias",-876938393).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ns));
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
}
})();
var el_name__$1 = (function (){var or__5126__auto__ = new cljs.core.Keyword("shadow.markup.css","alias","shadow.markup.css/alias",-876938393).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(el_name));
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
return cljs.core.name(el_name);
}
})();
return clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1),"--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(el_name__$1)].join(''),/\./,cljs.core.constantly("-"));
});
shadow.markup.css.impl.gen.css_rules = (function shadow$markup$css$impl$gen$css_rules(root,tag,class$){
var root__$1 = ((cljs.core.map_QMARK_(root))?(shadow.markup.css.impl.gen.map__GT_root.cljs$core$IFn$_invoke$arity$1 ? shadow.markup.css.impl.gen.map__GT_root.cljs$core$IFn$_invoke$arity$1(root) : shadow.markup.css.impl.gen.map__GT_root.call(null,root)):root);
return shadow.markup.css.impl.gen.gen_css_rules(root__$1,tag,class$);
});
shadow.markup.css.impl.gen.css_rules_for_el = (function shadow$markup$css$impl$gen$css_rules_for_el(env,el){
var root = shadow.markup.css.impl.gen.el_root(el,env);
var tag = shadow.markup.css.impl.gen.el_type(el);
var class$ = shadow.markup.css.impl.gen.el_selector(el);
return shadow.markup.css.impl.gen.css_rules(root,tag,class$);
});
shadow.markup.css.impl.gen.number_as_str_props = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),null,new cljs.core.Keyword(null,"flex","flex",-1425124628),null,new cljs.core.Keyword(null,"z-index","z-index",1892827090),null,new cljs.core.Keyword(null,"opacity","opacity",397153780),null], null), null);
shadow.markup.css.impl.gen.css_value_to_str = (function shadow$markup$css$impl$gen$css_value_to_str(key,value){
if(typeof value === 'string'){
return value;
} else {
if(typeof value === 'number'){
if((value === (0))){
return "0";
} else {
if(cljs.core.contains_QMARK_(shadow.markup.css.impl.gen.number_as_str_props,key)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"px"].join('');

}
}
} else {
if(cljs.core.vector_QMARK_(value)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30649_SHARP_){
return (shadow.markup.css.impl.gen.css_value_to_str.cljs$core$IFn$_invoke$arity$2 ? shadow.markup.css.impl.gen.css_value_to_str.cljs$core$IFn$_invoke$arity$2(key,p1__30649_SHARP_) : shadow.markup.css.impl.gen.css_value_to_str.call(null,key,p1__30649_SHARP_));
}),value));
} else {
return null;
}
}
}
});
shadow.markup.css.impl.gen.gen_rule_attrs = (function shadow$markup$css$impl$gen$gen_rule_attrs(attrs){
return cljs.core.reduce_kv((function (s,key,value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\n  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.markup.css.impl.gen.css_value_to_str(key,value)),";"].join('');
}),"",attrs);
});
shadow.markup.css.impl.gen.gen_rule = (function shadow$markup$css$impl$gen$gen_rule(selector,attrs){
if(cljs.core.seq(attrs)){
} else {
throw (new Error("Assert failed: (seq attrs)"));
}

if(typeof selector === 'string'){
} else {
throw (new Error("Assert failed: (string? selector)"));
}

if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(attrs))){
} else {
throw (new Error("Assert failed: (every? keyword? (keys attrs))"));
}

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector)," {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.markup.css.impl.gen.gen_rule_attrs(attrs)),"\n}"].join('');
});
shadow.markup.css.impl.gen.merge_selector = (function shadow$markup$css$impl$gen$merge_selector(selector,tag,class$){
if(clojure.string.includes_QMARK_(selector,"%")){
return clojure.string.replace(clojure.string.replace(selector,/%/,tag),/&/,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''));
} else {
return clojure.string.replace(selector,/&/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''));

}
});

/**
* @constructor
 * @implements {shadow.markup.css.impl.gen.IStyleGen}
*/
shadow.markup.css.impl.gen.Rule = (function (type,selector,attrs,nested_rules){
this.type = type;
this.selector = selector;
this.attrs = attrs;
this.nested_rules = nested_rules;
});
shadow.markup.css.impl.gen.Rule.prototype.shadow$markup$css$impl$gen$IStyleGen$ = cljs.core.PROTOCOL_SENTINEL;

shadow.markup.css.impl.gen.Rule.prototype.shadow$markup$css$impl$gen$IStyleGen$gen_css_rules$arity$3 = (function (this$,tag,class$){
var self__ = this;
var this$__$1 = this;
var G__30662 = self__.type;
var G__30662__$1 = (((G__30662 instanceof cljs.core.Keyword))?G__30662.fqn:null);
switch (G__30662__$1) {
case "root":
var self = ((cljs.core.seq(self__.attrs))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow.markup.css.impl.gen.gen_rule([cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),self__.attrs)], null):cljs.core.PersistentVector.EMPTY);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(self,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (self,G__30662,G__30662__$1,this$__$1){
return (function (p1__30658_SHARP_){
return shadow.markup.css.impl.gen.gen_css_rules(p1__30658_SHARP_,tag,class$);
});})(self,G__30662,G__30662__$1,this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.nested_rules], 0)));

break;
case "rule":
var self = ((cljs.core.seq(self__.attrs))?(function (){var selector__$1 = shadow.markup.css.impl.gen.merge_selector(self__.selector,tag,class$);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow.markup.css.impl.gen.gen_rule(selector__$1,self__.attrs)], null);
})():cljs.core.PersistentVector.EMPTY);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(self,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (self,G__30662,G__30662__$1,this$__$1){
return (function (p1__30659_SHARP_){
return shadow.markup.css.impl.gen.gen_css_rules(p1__30659_SHARP_,tag,class$);
});})(self,G__30662,G__30662__$1,this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.nested_rules], 0)));

break;
case "group":
var nested = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__30662,G__30662__$1,this$__$1){
return (function (p1__30660_SHARP_){
return shadow.markup.css.impl.gen.gen_css_rules(p1__30660_SHARP_,tag,class$);
});})(G__30662,G__30662__$1,this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.nested_rules], 0));
if((cljs.core.not(cljs.core.seq(self__.attrs))) && (cljs.core.not(cljs.core.seq(nested)))){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.selector)," {\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq(self__.attrs))?shadow.markup.css.impl.gen.gen_rule([cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),self__.attrs):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq(nested))?["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",nested))].join(''):null)),"\n}"].join('')], null);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30662__$1)].join('')));

}
});

shadow.markup.css.impl.gen.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"nested-rules","nested-rules",753753256,null)], null);
});

shadow.markup.css.impl.gen.Rule.cljs$lang$type = true;

shadow.markup.css.impl.gen.Rule.cljs$lang$ctorStr = "shadow.markup.css.impl.gen/Rule";

shadow.markup.css.impl.gen.Rule.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"shadow.markup.css.impl.gen/Rule");
});

shadow.markup.css.impl.gen.__GT_Rule = (function shadow$markup$css$impl$gen$__GT_Rule(type,selector,attrs,nested_rules){
return (new shadow.markup.css.impl.gen.Rule(type,selector,attrs,nested_rules));
});

shadow.markup.css.impl.gen.rule_QMARK_ = (function shadow$markup$css$impl$gen$rule_QMARK_(x){
return (x instanceof shadow.markup.css.impl.gen.Rule);
});
shadow.markup.css.impl.gen.group_STAR_ = (function shadow$markup$css$impl$gen$group_STAR_(query,attrs,rules){
if(typeof query === 'string'){
} else {
throw (new Error("Assert failed: (string? query)"));
}

if(cljs.core.map_QMARK_(attrs)){
} else {
throw (new Error("Assert failed: (map? attrs)"));
}

if(cljs.core.every_QMARK_(shadow.markup.css.impl.gen.rule_QMARK_,rules)){
} else {
throw (new Error("Assert failed: (every? rule? rules)"));
}

return (new shadow.markup.css.impl.gen.Rule(new cljs.core.Keyword(null,"group","group",582596132),query,attrs,rules));
});
shadow.markup.css.impl.gen.media = (function shadow$markup$css$impl$gen$media(var_args){
var args__6412__auto__ = [];
var len__6405__auto___30693 = arguments.length;
var i__6406__auto___30694 = (0);
while(true){
if((i__6406__auto___30694 < len__6405__auto___30693)){
args__6412__auto__.push((arguments[i__6406__auto___30694]));

var G__30695 = (i__6406__auto___30694 + (1));
i__6406__auto___30694 = G__30695;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((2) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((2)),(0),null)):null);
return shadow.markup.css.impl.gen.media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6413__auto__);
});

shadow.markup.css.impl.gen.media.cljs$core$IFn$_invoke$arity$variadic = (function (query,attrs,rules){
return shadow.markup.css.impl.gen.group_STAR_(["@media",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join(''),attrs,rules);
});

shadow.markup.css.impl.gen.media.cljs$lang$maxFixedArity = (2);

shadow.markup.css.impl.gen.media.cljs$lang$applyTo = (function (seq30686){
var G__30687 = cljs.core.first(seq30686);
var seq30686__$1 = cljs.core.next(seq30686);
var G__30688 = cljs.core.first(seq30686__$1);
var seq30686__$2 = cljs.core.next(seq30686__$1);
return shadow.markup.css.impl.gen.media.cljs$core$IFn$_invoke$arity$variadic(G__30687,G__30688,seq30686__$2);
});

shadow.markup.css.impl.gen.rule = (function shadow$markup$css$impl$gen$rule(selector,attrs){
if(typeof selector === 'string'){
} else {
throw (new Error("Assert failed: (string? selector)"));
}

if(cljs.core.map_QMARK_(attrs)){
} else {
throw (new Error("Assert failed: (map? attrs)"));
}

if(clojure.string.includes_QMARK_(selector,"&")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("rules must contain & to place prefix (&:hover instead of :hover)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selector","selector",762528866),selector,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs], null));
}

return (new shadow.markup.css.impl.gen.Rule(new cljs.core.Keyword(null,"rule","rule",729973257),selector,attrs,cljs.core.PersistentVector.EMPTY));
});
shadow.markup.css.impl.gen.nested_rule = (function shadow$markup$css$impl$gen$nested_rule(parent,attrs){
var selector = ((((!((parent == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === parent.shadow$markup$css$impl$gen$IElement$)))?true:(((!parent.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.markup.css.impl.gen.IElement,parent):false)):cljs.core.native_satisfies_QMARK_(shadow.markup.css.impl.gen.IElement,parent)))?[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.markup.css.impl.gen.el_selector(parent))," &"].join(''):(((function (){var and__5114__auto__ = cljs.core.vector_QMARK_(parent);
if(and__5114__auto__){
var and__5114__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(parent));
if(and__5114__auto____$1){
var G__30704 = cljs.core.first(parent);
if(!((G__30704 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__30704.shadow$markup$css$impl$gen$IElement$))){
return true;
} else {
if((!G__30704.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(shadow.markup.css.impl.gen.IElement,G__30704);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(shadow.markup.css.impl.gen.IElement,G__30704);
}
} else {
return and__5114__auto____$1;
}
} else {
return and__5114__auto__;
}
})())?[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.markup.css.impl.gen.el_selector(cljs.core.first(parent)))," &"].join(''):(((cljs.core.vector_QMARK_(parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(parent))))?(function (){var vec__30705 = parent;
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30705,(0),null);
var suffix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30705,(1),null);
if(((!((el == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$markup$css$impl$gen$IElement$)))?true:(((!el.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.markup.css.impl.gen.IElement,el):false)):cljs.core.native_satisfies_QMARK_(shadow.markup.css.impl.gen.IElement,el))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("need to be nested in IElement",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs], null));
}

return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.markup.css.impl.gen.el_selector(el)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)," &"].join('');
})():null)));
return (new shadow.markup.css.impl.gen.Rule(new cljs.core.Keyword(null,"rule","rule",729973257),selector,attrs,cljs.core.PersistentVector.EMPTY));
});
shadow.markup.css.impl.gen.root_STAR_ = (function shadow$markup$css$impl$gen$root_STAR_(attrs,rules){
if(cljs.core.map_QMARK_(attrs)){
} else {
throw (new Error("Assert failed: (map? attrs)"));
}

if(cljs.core.every_QMARK_(shadow.markup.css.impl.gen.rule_QMARK_,rules)){
} else {
throw (new Error("Assert failed: (every? rule? rules)"));
}

return (new shadow.markup.css.impl.gen.Rule(new cljs.core.Keyword(null,"root","root",-448657453),null,attrs,rules));
});
shadow.markup.css.impl.gen.root = (function shadow$markup$css$impl$gen$root(var_args){
var args__6412__auto__ = [];
var len__6405__auto___30752 = arguments.length;
var i__6406__auto___30753 = (0);
while(true){
if((i__6406__auto___30753 < len__6405__auto___30752)){
args__6412__auto__.push((arguments[i__6406__auto___30753]));

var G__30754 = (i__6406__auto___30753 + (1));
i__6406__auto___30753 = G__30754;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((1) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((1)),(0),null)):null);
return shadow.markup.css.impl.gen.root.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6413__auto__);
});

shadow.markup.css.impl.gen.root.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,rules){
return shadow.markup.css.impl.gen.root_STAR_(attrs,rules);
});

shadow.markup.css.impl.gen.root.cljs$lang$maxFixedArity = (1);

shadow.markup.css.impl.gen.root.cljs$lang$applyTo = (function (seq30733){
var G__30734 = cljs.core.first(seq30733);
var seq30733__$1 = cljs.core.next(seq30733);
return shadow.markup.css.impl.gen.root.cljs$core$IFn$_invoke$arity$variadic(G__30734,seq30733__$1);
});

shadow.markup.css.impl.gen.attrs_from_map = (function shadow$markup$css$impl$gen$attrs_from_map(m){
return cljs.core.reduce_kv((function (m__$1,k,v){
if(!((k instanceof cljs.core.Keyword))){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
shadow.markup.css.impl.gen.no_nested_rules_BANG_ = (function shadow$markup$css$impl$gen$no_nested_rules_BANG_(selector,rules){
if(cljs.core.seq(rules)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("selector cannot have nested rules",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selector","selector",762528866),selector,new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selector","selector",762528866),rules)], null));
} else {
return null;
}
});
shadow.markup.css.impl.gen.rules_from_map = (function shadow$markup$css$impl$gen$rules_from_map(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (selector){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,selector);
var sub_rules = (shadow.markup.css.impl.gen.rules_from_map.cljs$core$IFn$_invoke$arity$1 ? shadow.markup.css.impl.gen.rules_from_map.cljs$core$IFn$_invoke$arity$1(v) : shadow.markup.css.impl.gen.rules_from_map.call(null,v));
var attrs = shadow.markup.css.impl.gen.attrs_from_map(v);
if((typeof selector === 'string') && (clojure.string.starts_with_QMARK_(selector,"@"))){
return shadow.markup.css.impl.gen.group_STAR_(selector,attrs,sub_rules);
} else {
if(typeof selector === 'string'){
shadow.markup.css.impl.gen.no_nested_rules_BANG_(selector,sub_rules);

return shadow.markup.css.impl.gen.rule(selector,attrs);
} else {
if(((!((selector == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === selector.shadow$markup$css$impl$gen$IElement$)))?true:(((!selector.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.markup.css.impl.gen.IElement,selector):false)):cljs.core.native_satisfies_QMARK_(shadow.markup.css.impl.gen.IElement,selector))){
shadow.markup.css.impl.gen.no_nested_rules_BANG_(selector,sub_rules);

return shadow.markup.css.impl.gen.nested_rule(selector,attrs);
} else {
if(cljs.core.vector_QMARK_(selector)){
shadow.markup.css.impl.gen.no_nested_rules_BANG_(selector,sub_rules);

return shadow.markup.css.impl.gen.nested_rule(selector,attrs);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid key in map",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),selector,new cljs.core.Keyword(null,"value","value",305978217),v], null));

}
}
}
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),cljs.core.keys(m))));
});
shadow.markup.css.impl.gen.map__GT_root = (function shadow$markup$css$impl$gen$map__GT_root(m){
return shadow.markup.css.impl.gen.root_STAR_(shadow.markup.css.impl.gen.attrs_from_map(m),shadow.markup.css.impl.gen.rules_from_map(m));
});

module.exports = shadow.markup.css.impl.gen;

//# sourceMappingURL=shadow.markup.css.impl.gen.js.map