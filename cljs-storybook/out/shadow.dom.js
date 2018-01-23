var $CLJS = require("./cljs_env");
require("./cljs.core.js");
require("./goog.dom.dom.js");
require("./goog.dom.forms.js");
require("./goog.dom.classlist.js");
require("./goog.style.style.js");
require("./goog.style.transition.js");
require("./goog.string.string.js");
require("./clojure.string.js");
require("./cljs.core.async.js");
var clojure=$CLJS.clojure;
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
goog.dependencies_.written["shadow.dom.js"] = true;

goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = ((typeof window !== 'undefined')?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__5859__auto__ = (((this$ == null))?null:this$);
var m__5860__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto__.call(null,this$));
} else {
var m__5860__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__5859__auto__ = (((this$ == null))?null:this$);
var m__5860__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto__.call(null,this$));
} else {
var m__5860__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5860__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32763 = coll;
var G__32764 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32763,G__32764) : shadow.dom.lazy_native_coll_seq.call(null,G__32763,G__32764));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"shadow.dom/NativeColl");
});

shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$)))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32767 = arguments.length;
switch (G__32767) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32770 = arguments.length;
switch (G__32770) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32773 = arguments.length;
switch (G__32773) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32776 = arguments.length;
switch (G__32776) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32779 = arguments.length;
switch (G__32779) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__32780 = document;
var G__32781 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32780,G__32781);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__32782 = shadow.dom.dom_node(parent);
var G__32783 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32782,G__32783);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__32785 = shadow.dom.dom_node(el);
var G__32786 = cls;
return goog.dom.classlist.add(G__32785,G__32786);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__32787 = shadow.dom.dom_node(el);
var G__32788 = cls;
return goog.dom.classlist.remove(G__32787,G__32788);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32790 = arguments.length;
switch (G__32790) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__32791 = shadow.dom.dom_node(el);
var G__32792 = cls;
return goog.dom.classlist.toggle(G__32791,G__32792);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5126__auto__ = !(typeof document !== 'undefined');
if(or__5126__auto__){
return or__5126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32794){if((e32794 instanceof Object)){
var e = e32794;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32794;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5126__auto__ = !(typeof document !== 'undefined');
if(or__5126__auto__){
return or__5126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32795 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32796 = null;
var count__32797 = (0);
var i__32798 = (0);
while(true){
if((i__32798 < count__32797)){
var el = chunk__32796.cljs$core$IIndexed$_nth$arity$2(null,i__32798);
var handler_32805__$1 = ((function (seq__32795,chunk__32796,count__32797,i__32798,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32795,chunk__32796,count__32797,i__32798,el))
;
var G__32799_32806 = el;
var G__32800_32807 = cljs.core.name(ev);
var G__32801_32808 = handler_32805__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32799_32806,G__32800_32807,G__32801_32808) : shadow.dom.dom_listen.call(null,G__32799_32806,G__32800_32807,G__32801_32808));

var G__32809 = seq__32795;
var G__32810 = chunk__32796;
var G__32811 = count__32797;
var G__32812 = (i__32798 + (1));
seq__32795 = G__32809;
chunk__32796 = G__32810;
count__32797 = G__32811;
i__32798 = G__32812;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__32795);
if(temp__5457__auto__){
var seq__32795__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32795__$1)){
var c__6057__auto__ = cljs.core.chunk_first(seq__32795__$1);
var G__32813 = cljs.core.chunk_rest(seq__32795__$1);
var G__32814 = c__6057__auto__;
var G__32815 = cljs.core.count(c__6057__auto__);
var G__32816 = (0);
seq__32795 = G__32813;
chunk__32796 = G__32814;
count__32797 = G__32815;
i__32798 = G__32816;
continue;
} else {
var el = cljs.core.first(seq__32795__$1);
var handler_32817__$1 = ((function (seq__32795,chunk__32796,count__32797,i__32798,el,seq__32795__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32795,chunk__32796,count__32797,i__32798,el,seq__32795__$1,temp__5457__auto__))
;
var G__32802_32818 = el;
var G__32803_32819 = cljs.core.name(ev);
var G__32804_32820 = handler_32817__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32802_32818,G__32803_32819,G__32804_32820) : shadow.dom.dom_listen.call(null,G__32802_32818,G__32803_32819,G__32804_32820));

var G__32821 = cljs.core.next(seq__32795__$1);
var G__32822 = null;
var G__32823 = (0);
var G__32824 = (0);
seq__32795 = G__32821;
chunk__32796 = G__32822;
count__32797 = G__32823;
i__32798 = G__32824;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32826 = arguments.length;
switch (G__32826) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__32827 = shadow.dom.dom_node(el);
var G__32828 = cljs.core.name(ev);
var G__32829 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32827,G__32828,G__32829) : shadow.dom.dom_listen.call(null,G__32827,G__32828,G__32829));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__32831 = shadow.dom.dom_node(el);
var G__32832 = cljs.core.name(ev);
var G__32833 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__32831,G__32832,G__32833) : shadow.dom.dom_listen_remove.call(null,G__32831,G__32832,G__32833));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32834 = cljs.core.seq(events);
var chunk__32835 = null;
var count__32836 = (0);
var i__32837 = (0);
while(true){
if((i__32837 < count__32836)){
var vec__32838 = chunk__32835.cljs$core$IIndexed$_nth$arity$2(null,i__32837);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32838,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32838,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);

var G__32844 = seq__32834;
var G__32845 = chunk__32835;
var G__32846 = count__32836;
var G__32847 = (i__32837 + (1));
seq__32834 = G__32844;
chunk__32835 = G__32845;
count__32836 = G__32846;
i__32837 = G__32847;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__32834);
if(temp__5457__auto__){
var seq__32834__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32834__$1)){
var c__6057__auto__ = cljs.core.chunk_first(seq__32834__$1);
var G__32848 = cljs.core.chunk_rest(seq__32834__$1);
var G__32849 = c__6057__auto__;
var G__32850 = cljs.core.count(c__6057__auto__);
var G__32851 = (0);
seq__32834 = G__32848;
chunk__32835 = G__32849;
count__32836 = G__32850;
i__32837 = G__32851;
continue;
} else {
var vec__32841 = cljs.core.first(seq__32834__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32841,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32841,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);

var G__32852 = cljs.core.next(seq__32834__$1);
var G__32853 = null;
var G__32854 = (0);
var G__32855 = (0);
seq__32834 = G__32852;
chunk__32835 = G__32853;
count__32836 = G__32854;
i__32837 = G__32855;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32856 = cljs.core.seq(styles);
var chunk__32857 = null;
var count__32858 = (0);
var i__32859 = (0);
while(true){
if((i__32859 < count__32858)){
var vec__32860 = chunk__32857.cljs$core$IIndexed$_nth$arity$2(null,i__32859);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32860,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32860,(1),null);
var G__32863_32872 = dom;
var G__32864_32873 = cljs.core.name(k);
var G__32865_32874 = (((v == null))?"":v);
goog.style.setStyle(G__32863_32872,G__32864_32873,G__32865_32874);

var G__32875 = seq__32856;
var G__32876 = chunk__32857;
var G__32877 = count__32858;
var G__32878 = (i__32859 + (1));
seq__32856 = G__32875;
chunk__32857 = G__32876;
count__32858 = G__32877;
i__32859 = G__32878;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__32856);
if(temp__5457__auto__){
var seq__32856__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32856__$1)){
var c__6057__auto__ = cljs.core.chunk_first(seq__32856__$1);
var G__32879 = cljs.core.chunk_rest(seq__32856__$1);
var G__32880 = c__6057__auto__;
var G__32881 = cljs.core.count(c__6057__auto__);
var G__32882 = (0);
seq__32856 = G__32879;
chunk__32857 = G__32880;
count__32858 = G__32881;
i__32859 = G__32882;
continue;
} else {
var vec__32866 = cljs.core.first(seq__32856__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32866,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32866,(1),null);
var G__32869_32883 = dom;
var G__32870_32884 = cljs.core.name(k);
var G__32871_32885 = (((v == null))?"":v);
goog.style.setStyle(G__32869_32883,G__32870_32884,G__32871_32885);

var G__32886 = cljs.core.next(seq__32856__$1);
var G__32887 = null;
var G__32888 = (0);
var G__32889 = (0);
seq__32856 = G__32886;
chunk__32857 = G__32887;
count__32858 = G__32888;
i__32859 = G__32889;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32890_32891 = key;
var G__32890_32892__$1 = (((G__32890_32891 instanceof cljs.core.Keyword))?G__32890_32891.fqn:null);
switch (G__32890_32892__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_32894 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5126__auto__ = goog.string.startsWith(ks_32894,"data-");
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
return goog.string.startsWith(ks_32894,"aria-");
}
})())){
el.setAttribute(ks_32894,value);
} else {
(el[ks_32894] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__32895 = shadow.dom.dom_node(el);
var G__32896 = cls;
return goog.dom.classlist.contains(G__32895,G__32896);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32897){
var map__32898 = p__32897;
var map__32898__$1 = ((((!((map__32898 == null)))?((((map__32898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32898):map__32898);
var props = map__32898__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32898__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32900 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32900,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32900,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32900,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32903 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32903,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32903;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32905 = arguments.length;
switch (G__32905) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32907){
var vec__32908 = p__32907;
var seq__32909 = cljs.core.seq(vec__32908);
var first__32910 = cljs.core.first(seq__32909);
var seq__32909__$1 = cljs.core.next(seq__32909);
var nn = first__32910;
var first__32910__$1 = cljs.core.first(seq__32909__$1);
var seq__32909__$2 = cljs.core.next(seq__32909__$1);
var np = first__32910__$1;
var nc = seq__32909__$2;
var node = vec__32908;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if(((np == null)) && ((nc == null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32911 = nn;
var G__32912 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32911,G__32912) : create_fn.call(null,G__32911,G__32912));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32913 = nn;
var G__32914 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32913,G__32914) : create_fn.call(null,G__32913,G__32914));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32915 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32915,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32915,(1),null);
var seq__32918_32934 = cljs.core.seq(node_children);
var chunk__32919_32935 = null;
var count__32920_32936 = (0);
var i__32921_32937 = (0);
while(true){
if((i__32921_32937 < count__32920_32936)){
var child_struct_32938 = chunk__32919_32935.cljs$core$IIndexed$_nth$arity$2(null,i__32921_32937);
var children_32939 = shadow.dom.dom_node(child_struct_32938);
if(cljs.core.seq_QMARK_(children_32939)){
var seq__32922_32940 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32939));
var chunk__32924_32941 = null;
var count__32925_32942 = (0);
var i__32926_32943 = (0);
while(true){
if((i__32926_32943 < count__32925_32942)){
var child_32944 = chunk__32924_32941.cljs$core$IIndexed$_nth$arity$2(null,i__32926_32943);
if(cljs.core.truth_(child_32944)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32944);

var G__32945 = seq__32922_32940;
var G__32946 = chunk__32924_32941;
var G__32947 = count__32925_32942;
var G__32948 = (i__32926_32943 + (1));
seq__32922_32940 = G__32945;
chunk__32924_32941 = G__32946;
count__32925_32942 = G__32947;
i__32926_32943 = G__32948;
continue;
} else {
var G__32949 = seq__32922_32940;
var G__32950 = chunk__32924_32941;
var G__32951 = count__32925_32942;
var G__32952 = (i__32926_32943 + (1));
seq__32922_32940 = G__32949;
chunk__32924_32941 = G__32950;
count__32925_32942 = G__32951;
i__32926_32943 = G__32952;
continue;
}
} else {
var temp__5457__auto___32953 = cljs.core.seq(seq__32922_32940);
if(temp__5457__auto___32953){
var seq__32922_32954__$1 = temp__5457__auto___32953;
if(cljs.core.chunked_seq_QMARK_(seq__32922_32954__$1)){
var c__6057__auto___32955 = cljs.core.chunk_first(seq__32922_32954__$1);
var G__32956 = cljs.core.chunk_rest(seq__32922_32954__$1);
var G__32957 = c__6057__auto___32955;
var G__32958 = cljs.core.count(c__6057__auto___32955);
var G__32959 = (0);
seq__32922_32940 = G__32956;
chunk__32924_32941 = G__32957;
count__32925_32942 = G__32958;
i__32926_32943 = G__32959;
continue;
} else {
var child_32960 = cljs.core.first(seq__32922_32954__$1);
if(cljs.core.truth_(child_32960)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32960);

var G__32961 = cljs.core.next(seq__32922_32954__$1);
var G__32962 = null;
var G__32963 = (0);
var G__32964 = (0);
seq__32922_32940 = G__32961;
chunk__32924_32941 = G__32962;
count__32925_32942 = G__32963;
i__32926_32943 = G__32964;
continue;
} else {
var G__32965 = cljs.core.next(seq__32922_32954__$1);
var G__32966 = null;
var G__32967 = (0);
var G__32968 = (0);
seq__32922_32940 = G__32965;
chunk__32924_32941 = G__32966;
count__32925_32942 = G__32967;
i__32926_32943 = G__32968;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32939);
}

var G__32969 = seq__32918_32934;
var G__32970 = chunk__32919_32935;
var G__32971 = count__32920_32936;
var G__32972 = (i__32921_32937 + (1));
seq__32918_32934 = G__32969;
chunk__32919_32935 = G__32970;
count__32920_32936 = G__32971;
i__32921_32937 = G__32972;
continue;
} else {
var temp__5457__auto___32973 = cljs.core.seq(seq__32918_32934);
if(temp__5457__auto___32973){
var seq__32918_32974__$1 = temp__5457__auto___32973;
if(cljs.core.chunked_seq_QMARK_(seq__32918_32974__$1)){
var c__6057__auto___32975 = cljs.core.chunk_first(seq__32918_32974__$1);
var G__32976 = cljs.core.chunk_rest(seq__32918_32974__$1);
var G__32977 = c__6057__auto___32975;
var G__32978 = cljs.core.count(c__6057__auto___32975);
var G__32979 = (0);
seq__32918_32934 = G__32976;
chunk__32919_32935 = G__32977;
count__32920_32936 = G__32978;
i__32921_32937 = G__32979;
continue;
} else {
var child_struct_32980 = cljs.core.first(seq__32918_32974__$1);
var children_32981 = shadow.dom.dom_node(child_struct_32980);
if(cljs.core.seq_QMARK_(children_32981)){
var seq__32928_32982 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32981));
var chunk__32930_32983 = null;
var count__32931_32984 = (0);
var i__32932_32985 = (0);
while(true){
if((i__32932_32985 < count__32931_32984)){
var child_32986 = chunk__32930_32983.cljs$core$IIndexed$_nth$arity$2(null,i__32932_32985);
if(cljs.core.truth_(child_32986)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32986);

var G__32987 = seq__32928_32982;
var G__32988 = chunk__32930_32983;
var G__32989 = count__32931_32984;
var G__32990 = (i__32932_32985 + (1));
seq__32928_32982 = G__32987;
chunk__32930_32983 = G__32988;
count__32931_32984 = G__32989;
i__32932_32985 = G__32990;
continue;
} else {
var G__32991 = seq__32928_32982;
var G__32992 = chunk__32930_32983;
var G__32993 = count__32931_32984;
var G__32994 = (i__32932_32985 + (1));
seq__32928_32982 = G__32991;
chunk__32930_32983 = G__32992;
count__32931_32984 = G__32993;
i__32932_32985 = G__32994;
continue;
}
} else {
var temp__5457__auto___32995__$1 = cljs.core.seq(seq__32928_32982);
if(temp__5457__auto___32995__$1){
var seq__32928_32996__$1 = temp__5457__auto___32995__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32928_32996__$1)){
var c__6057__auto___32997 = cljs.core.chunk_first(seq__32928_32996__$1);
var G__32998 = cljs.core.chunk_rest(seq__32928_32996__$1);
var G__32999 = c__6057__auto___32997;
var G__33000 = cljs.core.count(c__6057__auto___32997);
var G__33001 = (0);
seq__32928_32982 = G__32998;
chunk__32930_32983 = G__32999;
count__32931_32984 = G__33000;
i__32932_32985 = G__33001;
continue;
} else {
var child_33002 = cljs.core.first(seq__32928_32996__$1);
if(cljs.core.truth_(child_33002)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33002);

var G__33003 = cljs.core.next(seq__32928_32996__$1);
var G__33004 = null;
var G__33005 = (0);
var G__33006 = (0);
seq__32928_32982 = G__33003;
chunk__32930_32983 = G__33004;
count__32931_32984 = G__33005;
i__32932_32985 = G__33006;
continue;
} else {
var G__33007 = cljs.core.next(seq__32928_32996__$1);
var G__33008 = null;
var G__33009 = (0);
var G__33010 = (0);
seq__32928_32982 = G__33007;
chunk__32930_32983 = G__33008;
count__32931_32984 = G__33009;
i__32932_32985 = G__33010;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32981);
}

var G__33011 = cljs.core.next(seq__32918_32974__$1);
var G__33012 = null;
var G__33013 = (0);
var G__33014 = (0);
seq__32918_32934 = G__33011;
chunk__32919_32935 = G__33012;
count__32920_32936 = G__33013;
i__32921_32937 = G__33014;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__33015 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__33015);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$)))?true:false):false)){
var seq__33017 = cljs.core.seq(node);
var chunk__33018 = null;
var count__33019 = (0);
var i__33020 = (0);
while(true){
if((i__33020 < count__33019)){
var n = chunk__33018.cljs$core$IIndexed$_nth$arity$2(null,i__33020);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));

var G__33021 = seq__33017;
var G__33022 = chunk__33018;
var G__33023 = count__33019;
var G__33024 = (i__33020 + (1));
seq__33017 = G__33021;
chunk__33018 = G__33022;
count__33019 = G__33023;
i__33020 = G__33024;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__33017);
if(temp__5457__auto__){
var seq__33017__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33017__$1)){
var c__6057__auto__ = cljs.core.chunk_first(seq__33017__$1);
var G__33025 = cljs.core.chunk_rest(seq__33017__$1);
var G__33026 = c__6057__auto__;
var G__33027 = cljs.core.count(c__6057__auto__);
var G__33028 = (0);
seq__33017 = G__33025;
chunk__33018 = G__33026;
count__33019 = G__33027;
i__33020 = G__33028;
continue;
} else {
var n = cljs.core.first(seq__33017__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));

var G__33029 = cljs.core.next(seq__33017__$1);
var G__33030 = null;
var G__33031 = (0);
var G__33032 = (0);
seq__33017 = G__33029;
chunk__33018 = G__33030;
count__33019 = G__33031;
i__33020 = G__33032;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__33033 = shadow.dom.dom_node(new$);
var G__33034 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__33033,G__33034);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33036 = arguments.length;
switch (G__33036) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33039 = arguments.length;
switch (G__33039) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33042 = arguments.length;
switch (G__33042) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__6412__auto__ = [];
var len__6405__auto___33049 = arguments.length;
var i__6406__auto___33050 = (0);
while(true){
if((i__6406__auto___33050 < len__6405__auto___33049)){
args__6412__auto__.push((arguments[i__6406__auto___33050]));

var G__33051 = (i__6406__auto___33050 + (1));
i__6406__auto___33050 = G__33051;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33045_33052 = cljs.core.seq(nodes);
var chunk__33046_33053 = null;
var count__33047_33054 = (0);
var i__33048_33055 = (0);
while(true){
if((i__33048_33055 < count__33047_33054)){
var node_33056 = chunk__33046_33053.cljs$core$IIndexed$_nth$arity$2(null,i__33048_33055);
fragment.appendChild(shadow.dom._to_dom(node_33056));

var G__33057 = seq__33045_33052;
var G__33058 = chunk__33046_33053;
var G__33059 = count__33047_33054;
var G__33060 = (i__33048_33055 + (1));
seq__33045_33052 = G__33057;
chunk__33046_33053 = G__33058;
count__33047_33054 = G__33059;
i__33048_33055 = G__33060;
continue;
} else {
var temp__5457__auto___33061 = cljs.core.seq(seq__33045_33052);
if(temp__5457__auto___33061){
var seq__33045_33062__$1 = temp__5457__auto___33061;
if(cljs.core.chunked_seq_QMARK_(seq__33045_33062__$1)){
var c__6057__auto___33063 = cljs.core.chunk_first(seq__33045_33062__$1);
var G__33064 = cljs.core.chunk_rest(seq__33045_33062__$1);
var G__33065 = c__6057__auto___33063;
var G__33066 = cljs.core.count(c__6057__auto___33063);
var G__33067 = (0);
seq__33045_33052 = G__33064;
chunk__33046_33053 = G__33065;
count__33047_33054 = G__33066;
i__33048_33055 = G__33067;
continue;
} else {
var node_33068 = cljs.core.first(seq__33045_33062__$1);
fragment.appendChild(shadow.dom._to_dom(node_33068));

var G__33069 = cljs.core.next(seq__33045_33062__$1);
var G__33070 = null;
var G__33071 = (0);
var G__33072 = (0);
seq__33045_33052 = G__33069;
chunk__33046_33053 = G__33070;
count__33047_33054 = G__33071;
i__33048_33055 = G__33072;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

shadow.dom.fragment.cljs$lang$applyTo = (function (seq33044){
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33044));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33073_33087 = cljs.core.seq(scripts);
var chunk__33074_33088 = null;
var count__33075_33089 = (0);
var i__33076_33090 = (0);
while(true){
if((i__33076_33090 < count__33075_33089)){
var vec__33077_33091 = chunk__33074_33088.cljs$core$IIndexed$_nth$arity$2(null,i__33076_33090);
var script_tag_33092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33077_33091,(0),null);
var script_body_33093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33077_33091,(1),null);
eval(script_body_33093);

var G__33094 = seq__33073_33087;
var G__33095 = chunk__33074_33088;
var G__33096 = count__33075_33089;
var G__33097 = (i__33076_33090 + (1));
seq__33073_33087 = G__33094;
chunk__33074_33088 = G__33095;
count__33075_33089 = G__33096;
i__33076_33090 = G__33097;
continue;
} else {
var temp__5457__auto___33098 = cljs.core.seq(seq__33073_33087);
if(temp__5457__auto___33098){
var seq__33073_33099__$1 = temp__5457__auto___33098;
if(cljs.core.chunked_seq_QMARK_(seq__33073_33099__$1)){
var c__6057__auto___33100 = cljs.core.chunk_first(seq__33073_33099__$1);
var G__33101 = cljs.core.chunk_rest(seq__33073_33099__$1);
var G__33102 = c__6057__auto___33100;
var G__33103 = cljs.core.count(c__6057__auto___33100);
var G__33104 = (0);
seq__33073_33087 = G__33101;
chunk__33074_33088 = G__33102;
count__33075_33089 = G__33103;
i__33076_33090 = G__33104;
continue;
} else {
var vec__33080_33105 = cljs.core.first(seq__33073_33099__$1);
var script_tag_33106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33080_33105,(0),null);
var script_body_33107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33080_33105,(1),null);
eval(script_body_33107);

var G__33108 = cljs.core.next(seq__33073_33099__$1);
var G__33109 = null;
var G__33110 = (0);
var G__33111 = (0);
seq__33073_33087 = G__33108;
chunk__33074_33088 = G__33109;
count__33075_33089 = G__33110;
i__33076_33090 = G__33111;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__33083){
var vec__33084 = p__33083;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33084,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33084,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__33112 = shadow.dom.dom_node(el);
var G__33113 = cls;
return goog.dom.getAncestorByClass(G__33112,G__33113);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33115 = arguments.length;
switch (G__33115) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__33116 = shadow.dom.dom_node(el);
var G__33117 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__33116,G__33117);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__33118 = shadow.dom.dom_node(el);
var G__33119 = cljs.core.name(tag);
var G__33120 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__33118,G__33119,G__33120);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__33122 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__33122);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__33123 = shadow.dom.dom_node(dom);
var G__33124 = value;
return goog.dom.forms.setValue(G__33123,G__33124);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33125 = cljs.core.seq(style_keys);
var chunk__33126 = null;
var count__33127 = (0);
var i__33128 = (0);
while(true){
if((i__33128 < count__33127)){
var it = chunk__33126.cljs$core$IIndexed$_nth$arity$2(null,i__33128);
shadow.dom.remove_style_STAR_(el__$1,it);

var G__33129 = seq__33125;
var G__33130 = chunk__33126;
var G__33131 = count__33127;
var G__33132 = (i__33128 + (1));
seq__33125 = G__33129;
chunk__33126 = G__33130;
count__33127 = G__33131;
i__33128 = G__33132;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__33125);
if(temp__5457__auto__){
var seq__33125__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33125__$1)){
var c__6057__auto__ = cljs.core.chunk_first(seq__33125__$1);
var G__33133 = cljs.core.chunk_rest(seq__33125__$1);
var G__33134 = c__6057__auto__;
var G__33135 = cljs.core.count(c__6057__auto__);
var G__33136 = (0);
seq__33125 = G__33133;
chunk__33126 = G__33134;
count__33127 = G__33135;
i__33128 = G__33136;
continue;
} else {
var it = cljs.core.first(seq__33125__$1);
shadow.dom.remove_style_STAR_(el__$1,it);

var G__33137 = cljs.core.next(seq__33125__$1);
var G__33138 = null;
var G__33139 = (0);
var G__33140 = (0);
seq__33125 = G__33137;
chunk__33126 = G__33138;
count__33127 = G__33139;
i__33128 = G__33140;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16799__auto__,k__16800__auto__){
var self__ = this;
var this__16799__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__16799__auto____$1,k__16800__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16801__auto__,k33142,else__16802__auto__){
var self__ = this;
var this__16801__auto____$1 = this;
var G__33146 = k33142;
var G__33146__$1 = (((G__33146 instanceof cljs.core.Keyword))?G__33146.fqn:null);
switch (G__33146__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33142,else__16802__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16813__auto__,writer__16814__auto__,opts__16815__auto__){
var self__ = this;
var this__16813__auto____$1 = this;
var pr_pair__16816__auto__ = ((function (this__16813__auto____$1){
return (function (keyval__16817__auto__){
return cljs.core.pr_sequential_writer(writer__16814__auto__,cljs.core.pr_writer,""," ","",opts__16815__auto__,keyval__16817__auto__);
});})(this__16813__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__16814__auto__,pr_pair__16816__auto__,"#shadow.dom.Coordinate{",", ","}",opts__16815__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33141){
var self__ = this;
var G__33141__$1 = this;
return (new cljs.core.RecordIter((0),G__33141__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16797__auto__){
var self__ = this;
var this__16797__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16794__auto__){
var self__ = this;
var this__16794__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16803__auto__){
var self__ = this;
var this__16803__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16795__auto__){
var self__ = this;
var this__16795__auto____$1 = this;
var h__5582__auto__ = self__.__hash;
if(!((h__5582__auto__ == null))){
return h__5582__auto__;
} else {
var h__5582__auto____$1 = (function (){var fexpr__33147 = ((function (h__5582__auto__,this__16795__auto____$1){
return (function (coll__16796__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__16796__auto__));
});})(h__5582__auto__,this__16795__auto____$1))
;
return fexpr__33147(this__16795__auto____$1);
})();
self__.__hash = h__5582__auto____$1;

return h__5582__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33143,other33144){
var self__ = this;
var this33143__$1 = this;
return (!((other33144 == null))) && ((this33143__$1.constructor === other33144.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33143__$1.x,other33144.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33143__$1.y,other33144.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33143__$1.__extmap,other33144.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16808__auto__,k__16809__auto__){
var self__ = this;
var this__16808__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__16809__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__16808__auto____$1),self__.__meta),k__16809__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__16809__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16806__auto__,k__16807__auto__,G__33141){
var self__ = this;
var this__16806__auto____$1 = this;
var pred__33148 = cljs.core.keyword_identical_QMARK_;
var expr__33149 = k__16807__auto__;
if(cljs.core.truth_((function (){var G__33151 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33152 = expr__33149;
return (pred__33148.cljs$core$IFn$_invoke$arity$2 ? pred__33148.cljs$core$IFn$_invoke$arity$2(G__33151,G__33152) : pred__33148.call(null,G__33151,G__33152));
})())){
return (new shadow.dom.Coordinate(G__33141,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33153 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33154 = expr__33149;
return (pred__33148.cljs$core$IFn$_invoke$arity$2 ? pred__33148.cljs$core$IFn$_invoke$arity$2(G__33153,G__33154) : pred__33148.call(null,G__33153,G__33154));
})())){
return (new shadow.dom.Coordinate(self__.x,G__33141,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__16807__auto__,G__33141),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16811__auto__){
var self__ = this;
var this__16811__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16798__auto__,G__33141){
var self__ = this;
var this__16798__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33141,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16804__auto__,entry__16805__auto__){
var self__ = this;
var this__16804__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__16805__auto__)){
return cljs.core._assoc(this__16804__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__16805__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__16805__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__16804__auto____$1,entry__16805__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5852__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"shadow.dom/Coordinate");
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5852__auto__,writer__5853__auto__){
return cljs.core._write(writer__5853__auto__,"shadow.dom/Coordinate");
});

shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33145){
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33145),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33145),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33145,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0))),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33156 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33156);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33157 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33157);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33158 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33158);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16799__auto__,k__16800__auto__){
var self__ = this;
var this__16799__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__16799__auto____$1,k__16800__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16801__auto__,k33160,else__16802__auto__){
var self__ = this;
var this__16801__auto____$1 = this;
var G__33164 = k33160;
var G__33164__$1 = (((G__33164 instanceof cljs.core.Keyword))?G__33164.fqn:null);
switch (G__33164__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33160,else__16802__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16813__auto__,writer__16814__auto__,opts__16815__auto__){
var self__ = this;
var this__16813__auto____$1 = this;
var pr_pair__16816__auto__ = ((function (this__16813__auto____$1){
return (function (keyval__16817__auto__){
return cljs.core.pr_sequential_writer(writer__16814__auto__,cljs.core.pr_writer,""," ","",opts__16815__auto__,keyval__16817__auto__);
});})(this__16813__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__16814__auto__,pr_pair__16816__auto__,"#shadow.dom.Size{",", ","}",opts__16815__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33159){
var self__ = this;
var G__33159__$1 = this;
return (new cljs.core.RecordIter((0),G__33159__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16797__auto__){
var self__ = this;
var this__16797__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16794__auto__){
var self__ = this;
var this__16794__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16803__auto__){
var self__ = this;
var this__16803__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16795__auto__){
var self__ = this;
var this__16795__auto____$1 = this;
var h__5582__auto__ = self__.__hash;
if(!((h__5582__auto__ == null))){
return h__5582__auto__;
} else {
var h__5582__auto____$1 = (function (){var fexpr__33165 = ((function (h__5582__auto__,this__16795__auto____$1){
return (function (coll__16796__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__16796__auto__));
});})(h__5582__auto__,this__16795__auto____$1))
;
return fexpr__33165(this__16795__auto____$1);
})();
self__.__hash = h__5582__auto____$1;

return h__5582__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33161,other33162){
var self__ = this;
var this33161__$1 = this;
return (!((other33162 == null))) && ((this33161__$1.constructor === other33162.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33161__$1.w,other33162.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33161__$1.h,other33162.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33161__$1.__extmap,other33162.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16808__auto__,k__16809__auto__){
var self__ = this;
var this__16808__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__16809__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__16808__auto____$1),self__.__meta),k__16809__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__16809__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16806__auto__,k__16807__auto__,G__33159){
var self__ = this;
var this__16806__auto____$1 = this;
var pred__33166 = cljs.core.keyword_identical_QMARK_;
var expr__33167 = k__16807__auto__;
if(cljs.core.truth_((function (){var G__33169 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33170 = expr__33167;
return (pred__33166.cljs$core$IFn$_invoke$arity$2 ? pred__33166.cljs$core$IFn$_invoke$arity$2(G__33169,G__33170) : pred__33166.call(null,G__33169,G__33170));
})())){
return (new shadow.dom.Size(G__33159,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33171 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33172 = expr__33167;
return (pred__33166.cljs$core$IFn$_invoke$arity$2 ? pred__33166.cljs$core$IFn$_invoke$arity$2(G__33171,G__33172) : pred__33166.call(null,G__33171,G__33172));
})())){
return (new shadow.dom.Size(self__.w,G__33159,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__16807__auto__,G__33159),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16811__auto__){
var self__ = this;
var this__16811__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16798__auto__,G__33159){
var self__ = this;
var this__16798__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33159,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16804__auto__,entry__16805__auto__){
var self__ = this;
var this__16804__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__16805__auto__)){
return cljs.core._assoc(this__16804__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__16805__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__16805__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__16804__auto____$1,entry__16805__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5852__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"shadow.dom/Size");
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5852__auto__,writer__5853__auto__){
return cljs.core._write(writer__5853__auto__,"shadow.dom/Size");
});

shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33163){
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33163),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33163),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33163,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0))),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33174 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33174);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__6164__auto__ = opts;
var l__6165__auto__ = a__6164__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__6165__auto__)){
var G__33175 = (i + (1));
var G__33176 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33175;
ret = G__33176;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33177){
var vec__33178 = p__33177;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33178,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33178,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33181 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
return encodeURIComponent(G__33181);
})())].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33183 = arguments.length;
switch (G__33183) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33185_33187 = new_node;
var G__33186_33188 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33185_33187,G__33186_33188);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33189_33191 = new_node;
var G__33190_33192 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33189_33191,G__33190_33192);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33193 = ps;
var G__33194 = (i + (1));
el__$1 = G__33193;
i = G__33194;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33195 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33195);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__33196 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33196);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33197 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33197);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33198 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33198,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33198,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33198,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33201_33211 = cljs.core.seq(props);
var chunk__33202_33212 = null;
var count__33203_33213 = (0);
var i__33204_33214 = (0);
while(true){
if((i__33204_33214 < count__33203_33213)){
var vec__33205_33215 = chunk__33202_33212.cljs$core$IIndexed$_nth$arity$2(null,i__33204_33214);
var k_33216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33205_33215,(0),null);
var v_33217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33205_33215,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_33216);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33216),v_33217);

var G__33218 = seq__33201_33211;
var G__33219 = chunk__33202_33212;
var G__33220 = count__33203_33213;
var G__33221 = (i__33204_33214 + (1));
seq__33201_33211 = G__33218;
chunk__33202_33212 = G__33219;
count__33203_33213 = G__33220;
i__33204_33214 = G__33221;
continue;
} else {
var temp__5457__auto___33222 = cljs.core.seq(seq__33201_33211);
if(temp__5457__auto___33222){
var seq__33201_33223__$1 = temp__5457__auto___33222;
if(cljs.core.chunked_seq_QMARK_(seq__33201_33223__$1)){
var c__6057__auto___33224 = cljs.core.chunk_first(seq__33201_33223__$1);
var G__33225 = cljs.core.chunk_rest(seq__33201_33223__$1);
var G__33226 = c__6057__auto___33224;
var G__33227 = cljs.core.count(c__6057__auto___33224);
var G__33228 = (0);
seq__33201_33211 = G__33225;
chunk__33202_33212 = G__33226;
count__33203_33213 = G__33227;
i__33204_33214 = G__33228;
continue;
} else {
var vec__33208_33229 = cljs.core.first(seq__33201_33223__$1);
var k_33230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33208_33229,(0),null);
var v_33231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33208_33229,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_33230);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33230),v_33231);

var G__33232 = cljs.core.next(seq__33201_33223__$1);
var G__33233 = null;
var G__33234 = (0);
var G__33235 = (0);
seq__33201_33211 = G__33232;
chunk__33202_33212 = G__33233;
count__33203_33213 = G__33234;
i__33204_33214 = G__33235;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$)))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33237 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33237,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33237,(1),null);
var seq__33240_33258 = cljs.core.seq(node_children);
var chunk__33242_33259 = null;
var count__33243_33260 = (0);
var i__33244_33261 = (0);
while(true){
if((i__33244_33261 < count__33243_33260)){
var child_struct_33262 = chunk__33242_33259.cljs$core$IIndexed$_nth$arity$2(null,i__33244_33261);
if(!((child_struct_33262 == null))){
if(typeof child_struct_33262 === 'string'){
var text_33263 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33263),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_33262)].join(''));
} else {
var children_33264 = shadow.dom.svg_node(child_struct_33262);
if(cljs.core.seq_QMARK_(children_33264)){
var seq__33246_33265 = cljs.core.seq(children_33264);
var chunk__33248_33266 = null;
var count__33249_33267 = (0);
var i__33250_33268 = (0);
while(true){
if((i__33250_33268 < count__33249_33267)){
var child_33269 = chunk__33248_33266.cljs$core$IIndexed$_nth$arity$2(null,i__33250_33268);
if(cljs.core.truth_(child_33269)){
node.appendChild(child_33269);

var G__33270 = seq__33246_33265;
var G__33271 = chunk__33248_33266;
var G__33272 = count__33249_33267;
var G__33273 = (i__33250_33268 + (1));
seq__33246_33265 = G__33270;
chunk__33248_33266 = G__33271;
count__33249_33267 = G__33272;
i__33250_33268 = G__33273;
continue;
} else {
var G__33274 = seq__33246_33265;
var G__33275 = chunk__33248_33266;
var G__33276 = count__33249_33267;
var G__33277 = (i__33250_33268 + (1));
seq__33246_33265 = G__33274;
chunk__33248_33266 = G__33275;
count__33249_33267 = G__33276;
i__33250_33268 = G__33277;
continue;
}
} else {
var temp__5457__auto___33278 = cljs.core.seq(seq__33246_33265);
if(temp__5457__auto___33278){
var seq__33246_33279__$1 = temp__5457__auto___33278;
if(cljs.core.chunked_seq_QMARK_(seq__33246_33279__$1)){
var c__6057__auto___33280 = cljs.core.chunk_first(seq__33246_33279__$1);
var G__33281 = cljs.core.chunk_rest(seq__33246_33279__$1);
var G__33282 = c__6057__auto___33280;
var G__33283 = cljs.core.count(c__6057__auto___33280);
var G__33284 = (0);
seq__33246_33265 = G__33281;
chunk__33248_33266 = G__33282;
count__33249_33267 = G__33283;
i__33250_33268 = G__33284;
continue;
} else {
var child_33285 = cljs.core.first(seq__33246_33279__$1);
if(cljs.core.truth_(child_33285)){
node.appendChild(child_33285);

var G__33286 = cljs.core.next(seq__33246_33279__$1);
var G__33287 = null;
var G__33288 = (0);
var G__33289 = (0);
seq__33246_33265 = G__33286;
chunk__33248_33266 = G__33287;
count__33249_33267 = G__33288;
i__33250_33268 = G__33289;
continue;
} else {
var G__33290 = cljs.core.next(seq__33246_33279__$1);
var G__33291 = null;
var G__33292 = (0);
var G__33293 = (0);
seq__33246_33265 = G__33290;
chunk__33248_33266 = G__33291;
count__33249_33267 = G__33292;
i__33250_33268 = G__33293;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33264);
}
}

var G__33294 = seq__33240_33258;
var G__33295 = chunk__33242_33259;
var G__33296 = count__33243_33260;
var G__33297 = (i__33244_33261 + (1));
seq__33240_33258 = G__33294;
chunk__33242_33259 = G__33295;
count__33243_33260 = G__33296;
i__33244_33261 = G__33297;
continue;
} else {
var G__33298 = seq__33240_33258;
var G__33299 = chunk__33242_33259;
var G__33300 = count__33243_33260;
var G__33301 = (i__33244_33261 + (1));
seq__33240_33258 = G__33298;
chunk__33242_33259 = G__33299;
count__33243_33260 = G__33300;
i__33244_33261 = G__33301;
continue;
}
} else {
var temp__5457__auto___33302 = cljs.core.seq(seq__33240_33258);
if(temp__5457__auto___33302){
var seq__33240_33303__$1 = temp__5457__auto___33302;
if(cljs.core.chunked_seq_QMARK_(seq__33240_33303__$1)){
var c__6057__auto___33304 = cljs.core.chunk_first(seq__33240_33303__$1);
var G__33305 = cljs.core.chunk_rest(seq__33240_33303__$1);
var G__33306 = c__6057__auto___33304;
var G__33307 = cljs.core.count(c__6057__auto___33304);
var G__33308 = (0);
seq__33240_33258 = G__33305;
chunk__33242_33259 = G__33306;
count__33243_33260 = G__33307;
i__33244_33261 = G__33308;
continue;
} else {
var child_struct_33309 = cljs.core.first(seq__33240_33303__$1);
if(!((child_struct_33309 == null))){
if(typeof child_struct_33309 === 'string'){
var text_33310 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33310),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_33309)].join(''));
} else {
var children_33311 = shadow.dom.svg_node(child_struct_33309);
if(cljs.core.seq_QMARK_(children_33311)){
var seq__33252_33312 = cljs.core.seq(children_33311);
var chunk__33254_33313 = null;
var count__33255_33314 = (0);
var i__33256_33315 = (0);
while(true){
if((i__33256_33315 < count__33255_33314)){
var child_33316 = chunk__33254_33313.cljs$core$IIndexed$_nth$arity$2(null,i__33256_33315);
if(cljs.core.truth_(child_33316)){
node.appendChild(child_33316);

var G__33317 = seq__33252_33312;
var G__33318 = chunk__33254_33313;
var G__33319 = count__33255_33314;
var G__33320 = (i__33256_33315 + (1));
seq__33252_33312 = G__33317;
chunk__33254_33313 = G__33318;
count__33255_33314 = G__33319;
i__33256_33315 = G__33320;
continue;
} else {
var G__33321 = seq__33252_33312;
var G__33322 = chunk__33254_33313;
var G__33323 = count__33255_33314;
var G__33324 = (i__33256_33315 + (1));
seq__33252_33312 = G__33321;
chunk__33254_33313 = G__33322;
count__33255_33314 = G__33323;
i__33256_33315 = G__33324;
continue;
}
} else {
var temp__5457__auto___33325__$1 = cljs.core.seq(seq__33252_33312);
if(temp__5457__auto___33325__$1){
var seq__33252_33326__$1 = temp__5457__auto___33325__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33252_33326__$1)){
var c__6057__auto___33327 = cljs.core.chunk_first(seq__33252_33326__$1);
var G__33328 = cljs.core.chunk_rest(seq__33252_33326__$1);
var G__33329 = c__6057__auto___33327;
var G__33330 = cljs.core.count(c__6057__auto___33327);
var G__33331 = (0);
seq__33252_33312 = G__33328;
chunk__33254_33313 = G__33329;
count__33255_33314 = G__33330;
i__33256_33315 = G__33331;
continue;
} else {
var child_33332 = cljs.core.first(seq__33252_33326__$1);
if(cljs.core.truth_(child_33332)){
node.appendChild(child_33332);

var G__33333 = cljs.core.next(seq__33252_33326__$1);
var G__33334 = null;
var G__33335 = (0);
var G__33336 = (0);
seq__33252_33312 = G__33333;
chunk__33254_33313 = G__33334;
count__33255_33314 = G__33335;
i__33256_33315 = G__33336;
continue;
} else {
var G__33337 = cljs.core.next(seq__33252_33326__$1);
var G__33338 = null;
var G__33339 = (0);
var G__33340 = (0);
seq__33252_33312 = G__33337;
chunk__33254_33313 = G__33338;
count__33255_33314 = G__33339;
i__33256_33315 = G__33340;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33311);
}
}

var G__33341 = cljs.core.next(seq__33240_33303__$1);
var G__33342 = null;
var G__33343 = (0);
var G__33344 = (0);
seq__33240_33258 = G__33341;
chunk__33242_33259 = G__33342;
count__33243_33260 = G__33343;
i__33244_33261 = G__33344;
continue;
} else {
var G__33345 = cljs.core.next(seq__33240_33303__$1);
var G__33346 = null;
var G__33347 = (0);
var G__33348 = (0);
seq__33240_33258 = G__33345;
chunk__33242_33259 = G__33346;
count__33243_33260 = G__33347;
i__33244_33261 = G__33348;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__33349_33355 = shadow.dom._to_svg;
var G__33350_33356 = "string";
var G__33351_33357 = ((function (G__33349_33355,G__33350_33356){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__33349_33355,G__33350_33356))
;
goog.object.set(G__33349_33355,G__33350_33356,G__33351_33357);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__33352_33358 = shadow.dom._to_svg;
var G__33353_33359 = "null";
var G__33354_33360 = ((function (G__33352_33358,G__33353_33359){
return (function (_){
return null;
});})(G__33352_33358,G__33353_33359))
;
goog.object.set(G__33352_33358,G__33353_33359,G__33354_33360);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__6412__auto__ = [];
var len__6405__auto___33363 = arguments.length;
var i__6406__auto___33364 = (0);
while(true){
if((i__6406__auto___33364 < len__6405__auto___33363)){
args__6412__auto__.push((arguments[i__6406__auto___33364]));

var G__33365 = (i__6406__auto___33364 + (1));
i__6406__auto___33364 = G__33365;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((1) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6413__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

shadow.dom.svg.cljs$lang$applyTo = (function (seq33361){
var G__33362 = cljs.core.first(seq33361);
var seq33361__$1 = cljs.core.next(seq33361);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__33362,seq33361__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33367 = arguments.length;
switch (G__33367) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__33368_33383 = shadow.dom.dom_node(el);
var G__33369_33384 = cljs.core.name(event);
var G__33370_33385 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33368_33383,G__33369_33384,G__33370_33385) : shadow.dom.dom_listen.call(null,G__33368_33383,G__33369_33384,G__33370_33385));

if(cljs.core.truth_((function (){var and__5114__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5114__auto__)){
return !(once_or_cleanup === true);
} else {
return and__5114__auto__;
}
})())){
var c__30821__auto___33386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30821__auto___33386,buf,chan,event_fn){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (c__30821__auto___33386,buf,chan,event_fn){
return (function (state_33375){
var state_val_33376 = (state_33375[(1)]);
if((state_val_33376 === (1))){
var state_33375__$1 = state_33375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33375__$1,(2),once_or_cleanup);
} else {
if((state_val_33376 === (2))){
var inst_33372 = (state_33375[(2)]);
var inst_33373 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33375__$1 = (function (){var statearr_33377 = state_33375;
(statearr_33377[(7)] = inst_33372);

return statearr_33377;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33375__$1,inst_33373);
} else {
return null;
}
}
});})(c__30821__auto___33386,buf,chan,event_fn))
;
return ((function (switch__30621__auto__,c__30821__auto___33386,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__30622__auto__ = null;
var shadow$dom$state_machine__30622__auto____0 = (function (){
var statearr_33378 = [null,null,null,null,null,null,null,null];
(statearr_33378[(0)] = shadow$dom$state_machine__30622__auto__);

(statearr_33378[(1)] = (1));

return statearr_33378;
});
var shadow$dom$state_machine__30622__auto____1 = (function (state_33375){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_33375);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e33379){if((e33379 instanceof Object)){
var ex__30625__auto__ = e33379;
var statearr_33380_33387 = state_33375;
(statearr_33380_33387[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33379;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33388 = state_33375;
state_33375 = G__33388;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
shadow$dom$state_machine__30622__auto__ = function(state_33375){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30622__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30622__auto____1.call(this,state_33375);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$dom$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30622__auto____0;
shadow$dom$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30622__auto____1;
return shadow$dom$state_machine__30622__auto__;
})()
;})(switch__30621__auto__,c__30821__auto___33386,buf,chan,event_fn))
})();
var state__30823__auto__ = (function (){var statearr_33381 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_33381[(6)] = c__30821__auto___33386);

return statearr_33381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(c__30821__auto___33386,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


module.exports = shadow.dom;

//# sourceMappingURL=shadow.dom.js.map
