var $CLJS = require("./cljs_env");
require("./cljs.core.js");
require("./shadow.markup.react.impl.interop.js");
require("./shadow.markup.css.js");
require("./shadow.js.shim.module$react.js");
var cljs=$CLJS.cljs;
var shadow=$CLJS.shadow;
var goog=$CLJS.goog;

goog.dependencies_.written["shadow.markup.react.js"] = true;

goog.provide('shadow.markup.react');
goog.require('cljs.core');
goog.require('shadow.markup.react.impl.interop');
goog.require('shadow.markup.css');
goog.require('shadow.js.shim.module$react');
shadow.markup.react.for$ = (function shadow$markup$react$for(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35042 = arguments.length;
var i__6406__auto___35043 = (0);
while(true){
if((i__6406__auto___35043 < len__6405__auto___35042)){
args__6412__auto__.push((arguments[i__6406__auto___35043]));

var G__35044 = (i__6406__auto___35043 + (1));
i__6406__auto___35043 = G__35044;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.for$.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.for$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("shadow.markup.react/for is a macro",cljs.core.PersistentArrayMap.EMPTY);
});

shadow.markup.react.for$.cljs$lang$maxFixedArity = (0);

shadow.markup.react.for$.cljs$lang$applyTo = (function (seq35041){
return shadow.markup.react.for$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35041));
});

shadow.markup.react.$ = (function shadow$markup$react$$(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35047 = arguments.length;
var i__6406__auto___35048 = (0);
while(true){
if((i__6406__auto___35048 < len__6405__auto___35047)){
args__6412__auto__.push((arguments[i__6406__auto___35048]));

var G__35049 = (i__6406__auto___35048 + (1));
i__6406__auto___35048 = G__35049;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((1) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((1)),(0),null)):null);
return shadow.markup.react.$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6413__auto__);
});

shadow.markup.react.$.cljs$core$IFn$_invoke$arity$variadic = (function (type,args){
return shadow.markup.react.impl.interop.create_element(type,args);
});

shadow.markup.react.$.cljs$lang$maxFixedArity = (1);

shadow.markup.react.$.cljs$lang$applyTo = (function (seq35045){
var G__35046 = cljs.core.first(seq35045);
var seq35045__$1 = cljs.core.next(seq35045);
return shadow.markup.react.$.cljs$core$IFn$_invoke$arity$variadic(G__35046,seq35045__$1);
});

shadow.markup.react.with_inner_html = (function shadow$markup$react$with_inner_html(html,props){
var html_35050__$1 = ({"__html": html});
goog.object.set(props,"dangerouslySetInnerHTML",html_35050__$1);

return props;
});
shadow.markup.react.fragment = (function shadow$markup$react$fragment(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35052 = arguments.length;
var i__6406__auto___35053 = (0);
while(true){
if((i__6406__auto___35053 < len__6405__auto___35052)){
args__6412__auto__.push((arguments[i__6406__auto___35053]));

var G__35054 = (i__6406__auto___35053 + (1));
i__6406__auto___35053 = G__35054;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var arr = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(body);
arr.unshift(null);

arr.unshift(shadow.js.shim.module$react.Fragment);

return shadow.js.shim.module$react.createElement.apply(null,arr);
});

shadow.markup.react.fragment.cljs$lang$maxFixedArity = (0);

shadow.markup.react.fragment.cljs$lang$applyTo = (function (seq35051){
return shadow.markup.react.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35051));
});

shadow.markup.react.a = (function shadow$markup$react$a(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35180 = arguments.length;
var i__6406__auto___35181 = (0);
while(true){
if((i__6406__auto___35181 < len__6405__auto___35180)){
args__6412__auto__.push((arguments[i__6406__auto___35181]));

var G__35182 = (i__6406__auto___35181 + (1));
i__6406__auto___35181 = G__35182;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.a.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.a.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("a",args__35034__auto__);
});

shadow.markup.react.a.cljs$lang$maxFixedArity = (0);

shadow.markup.react.a.cljs$lang$applyTo = (function (seq35055){
return shadow.markup.react.a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35055));
});


shadow.markup.react.abbr = (function shadow$markup$react$abbr(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35183 = arguments.length;
var i__6406__auto___35184 = (0);
while(true){
if((i__6406__auto___35184 < len__6405__auto___35183)){
args__6412__auto__.push((arguments[i__6406__auto___35184]));

var G__35185 = (i__6406__auto___35184 + (1));
i__6406__auto___35184 = G__35185;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("abbr",args__35034__auto__);
});

shadow.markup.react.abbr.cljs$lang$maxFixedArity = (0);

shadow.markup.react.abbr.cljs$lang$applyTo = (function (seq35056){
return shadow.markup.react.abbr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35056));
});


shadow.markup.react.address = (function shadow$markup$react$address(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35186 = arguments.length;
var i__6406__auto___35187 = (0);
while(true){
if((i__6406__auto___35187 < len__6405__auto___35186)){
args__6412__auto__.push((arguments[i__6406__auto___35187]));

var G__35188 = (i__6406__auto___35187 + (1));
i__6406__auto___35187 = G__35188;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.address.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.address.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("address",args__35034__auto__);
});

shadow.markup.react.address.cljs$lang$maxFixedArity = (0);

shadow.markup.react.address.cljs$lang$applyTo = (function (seq35057){
return shadow.markup.react.address.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35057));
});


shadow.markup.react.area = (function shadow$markup$react$area(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35189 = arguments.length;
var i__6406__auto___35190 = (0);
while(true){
if((i__6406__auto___35190 < len__6405__auto___35189)){
args__6412__auto__.push((arguments[i__6406__auto___35190]));

var G__35191 = (i__6406__auto___35190 + (1));
i__6406__auto___35190 = G__35191;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.area.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.area.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("area",args__35034__auto__);
});

shadow.markup.react.area.cljs$lang$maxFixedArity = (0);

shadow.markup.react.area.cljs$lang$applyTo = (function (seq35058){
return shadow.markup.react.area.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35058));
});


shadow.markup.react.article = (function shadow$markup$react$article(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35192 = arguments.length;
var i__6406__auto___35193 = (0);
while(true){
if((i__6406__auto___35193 < len__6405__auto___35192)){
args__6412__auto__.push((arguments[i__6406__auto___35193]));

var G__35194 = (i__6406__auto___35193 + (1));
i__6406__auto___35193 = G__35194;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.article.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.article.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("article",args__35034__auto__);
});

shadow.markup.react.article.cljs$lang$maxFixedArity = (0);

shadow.markup.react.article.cljs$lang$applyTo = (function (seq35059){
return shadow.markup.react.article.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35059));
});


shadow.markup.react.aside = (function shadow$markup$react$aside(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35195 = arguments.length;
var i__6406__auto___35196 = (0);
while(true){
if((i__6406__auto___35196 < len__6405__auto___35195)){
args__6412__auto__.push((arguments[i__6406__auto___35196]));

var G__35197 = (i__6406__auto___35196 + (1));
i__6406__auto___35196 = G__35197;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("aside",args__35034__auto__);
});

shadow.markup.react.aside.cljs$lang$maxFixedArity = (0);

shadow.markup.react.aside.cljs$lang$applyTo = (function (seq35060){
return shadow.markup.react.aside.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35060));
});


shadow.markup.react.audio = (function shadow$markup$react$audio(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35198 = arguments.length;
var i__6406__auto___35199 = (0);
while(true){
if((i__6406__auto___35199 < len__6405__auto___35198)){
args__6412__auto__.push((arguments[i__6406__auto___35199]));

var G__35200 = (i__6406__auto___35199 + (1));
i__6406__auto___35199 = G__35200;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("audio",args__35034__auto__);
});

shadow.markup.react.audio.cljs$lang$maxFixedArity = (0);

shadow.markup.react.audio.cljs$lang$applyTo = (function (seq35061){
return shadow.markup.react.audio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35061));
});


shadow.markup.react.b = (function shadow$markup$react$b(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35201 = arguments.length;
var i__6406__auto___35202 = (0);
while(true){
if((i__6406__auto___35202 < len__6405__auto___35201)){
args__6412__auto__.push((arguments[i__6406__auto___35202]));

var G__35203 = (i__6406__auto___35202 + (1));
i__6406__auto___35202 = G__35203;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.b.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.b.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("b",args__35034__auto__);
});

shadow.markup.react.b.cljs$lang$maxFixedArity = (0);

shadow.markup.react.b.cljs$lang$applyTo = (function (seq35062){
return shadow.markup.react.b.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35062));
});


shadow.markup.react.base = (function shadow$markup$react$base(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35204 = arguments.length;
var i__6406__auto___35205 = (0);
while(true){
if((i__6406__auto___35205 < len__6405__auto___35204)){
args__6412__auto__.push((arguments[i__6406__auto___35205]));

var G__35206 = (i__6406__auto___35205 + (1));
i__6406__auto___35205 = G__35206;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.base.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.base.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("base",args__35034__auto__);
});

shadow.markup.react.base.cljs$lang$maxFixedArity = (0);

shadow.markup.react.base.cljs$lang$applyTo = (function (seq35063){
return shadow.markup.react.base.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35063));
});


shadow.markup.react.bdi = (function shadow$markup$react$bdi(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35207 = arguments.length;
var i__6406__auto___35208 = (0);
while(true){
if((i__6406__auto___35208 < len__6405__auto___35207)){
args__6412__auto__.push((arguments[i__6406__auto___35208]));

var G__35209 = (i__6406__auto___35208 + (1));
i__6406__auto___35208 = G__35209;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("bdi",args__35034__auto__);
});

shadow.markup.react.bdi.cljs$lang$maxFixedArity = (0);

shadow.markup.react.bdi.cljs$lang$applyTo = (function (seq35064){
return shadow.markup.react.bdi.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35064));
});


shadow.markup.react.bdo = (function shadow$markup$react$bdo(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35210 = arguments.length;
var i__6406__auto___35211 = (0);
while(true){
if((i__6406__auto___35211 < len__6405__auto___35210)){
args__6412__auto__.push((arguments[i__6406__auto___35211]));

var G__35212 = (i__6406__auto___35211 + (1));
i__6406__auto___35211 = G__35212;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("bdo",args__35034__auto__);
});

shadow.markup.react.bdo.cljs$lang$maxFixedArity = (0);

shadow.markup.react.bdo.cljs$lang$applyTo = (function (seq35065){
return shadow.markup.react.bdo.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35065));
});


shadow.markup.react.big = (function shadow$markup$react$big(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35213 = arguments.length;
var i__6406__auto___35214 = (0);
while(true){
if((i__6406__auto___35214 < len__6405__auto___35213)){
args__6412__auto__.push((arguments[i__6406__auto___35214]));

var G__35215 = (i__6406__auto___35214 + (1));
i__6406__auto___35214 = G__35215;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.big.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.big.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("big",args__35034__auto__);
});

shadow.markup.react.big.cljs$lang$maxFixedArity = (0);

shadow.markup.react.big.cljs$lang$applyTo = (function (seq35066){
return shadow.markup.react.big.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35066));
});


shadow.markup.react.blockquote = (function shadow$markup$react$blockquote(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35216 = arguments.length;
var i__6406__auto___35217 = (0);
while(true){
if((i__6406__auto___35217 < len__6405__auto___35216)){
args__6412__auto__.push((arguments[i__6406__auto___35217]));

var G__35218 = (i__6406__auto___35217 + (1));
i__6406__auto___35217 = G__35218;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("blockquote",args__35034__auto__);
});

shadow.markup.react.blockquote.cljs$lang$maxFixedArity = (0);

shadow.markup.react.blockquote.cljs$lang$applyTo = (function (seq35067){
return shadow.markup.react.blockquote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35067));
});


shadow.markup.react.body = (function shadow$markup$react$body(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35219 = arguments.length;
var i__6406__auto___35220 = (0);
while(true){
if((i__6406__auto___35220 < len__6405__auto___35219)){
args__6412__auto__.push((arguments[i__6406__auto___35220]));

var G__35221 = (i__6406__auto___35220 + (1));
i__6406__auto___35220 = G__35221;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.body.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.body.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("body",args__35034__auto__);
});

shadow.markup.react.body.cljs$lang$maxFixedArity = (0);

shadow.markup.react.body.cljs$lang$applyTo = (function (seq35068){
return shadow.markup.react.body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35068));
});


shadow.markup.react.br = (function shadow$markup$react$br(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35222 = arguments.length;
var i__6406__auto___35223 = (0);
while(true){
if((i__6406__auto___35223 < len__6405__auto___35222)){
args__6412__auto__.push((arguments[i__6406__auto___35223]));

var G__35224 = (i__6406__auto___35223 + (1));
i__6406__auto___35223 = G__35224;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.br.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.br.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("br",args__35034__auto__);
});

shadow.markup.react.br.cljs$lang$maxFixedArity = (0);

shadow.markup.react.br.cljs$lang$applyTo = (function (seq35069){
return shadow.markup.react.br.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35069));
});


shadow.markup.react.button = (function shadow$markup$react$button(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35225 = arguments.length;
var i__6406__auto___35226 = (0);
while(true){
if((i__6406__auto___35226 < len__6405__auto___35225)){
args__6412__auto__.push((arguments[i__6406__auto___35226]));

var G__35227 = (i__6406__auto___35226 + (1));
i__6406__auto___35226 = G__35227;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.button.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.button.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("button",args__35034__auto__);
});

shadow.markup.react.button.cljs$lang$maxFixedArity = (0);

shadow.markup.react.button.cljs$lang$applyTo = (function (seq35070){
return shadow.markup.react.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35070));
});


shadow.markup.react.canvas = (function shadow$markup$react$canvas(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35228 = arguments.length;
var i__6406__auto___35229 = (0);
while(true){
if((i__6406__auto___35229 < len__6405__auto___35228)){
args__6412__auto__.push((arguments[i__6406__auto___35229]));

var G__35230 = (i__6406__auto___35229 + (1));
i__6406__auto___35229 = G__35230;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("canvas",args__35034__auto__);
});

shadow.markup.react.canvas.cljs$lang$maxFixedArity = (0);

shadow.markup.react.canvas.cljs$lang$applyTo = (function (seq35071){
return shadow.markup.react.canvas.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35071));
});


shadow.markup.react.caption = (function shadow$markup$react$caption(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35231 = arguments.length;
var i__6406__auto___35232 = (0);
while(true){
if((i__6406__auto___35232 < len__6405__auto___35231)){
args__6412__auto__.push((arguments[i__6406__auto___35232]));

var G__35233 = (i__6406__auto___35232 + (1));
i__6406__auto___35232 = G__35233;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("caption",args__35034__auto__);
});

shadow.markup.react.caption.cljs$lang$maxFixedArity = (0);

shadow.markup.react.caption.cljs$lang$applyTo = (function (seq35072){
return shadow.markup.react.caption.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35072));
});


shadow.markup.react.cite = (function shadow$markup$react$cite(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35234 = arguments.length;
var i__6406__auto___35235 = (0);
while(true){
if((i__6406__auto___35235 < len__6405__auto___35234)){
args__6412__auto__.push((arguments[i__6406__auto___35235]));

var G__35236 = (i__6406__auto___35235 + (1));
i__6406__auto___35235 = G__35236;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("cite",args__35034__auto__);
});

shadow.markup.react.cite.cljs$lang$maxFixedArity = (0);

shadow.markup.react.cite.cljs$lang$applyTo = (function (seq35073){
return shadow.markup.react.cite.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35073));
});


shadow.markup.react.code = (function shadow$markup$react$code(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35237 = arguments.length;
var i__6406__auto___35238 = (0);
while(true){
if((i__6406__auto___35238 < len__6405__auto___35237)){
args__6412__auto__.push((arguments[i__6406__auto___35238]));

var G__35239 = (i__6406__auto___35238 + (1));
i__6406__auto___35238 = G__35239;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.code.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.code.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("code",args__35034__auto__);
});

shadow.markup.react.code.cljs$lang$maxFixedArity = (0);

shadow.markup.react.code.cljs$lang$applyTo = (function (seq35074){
return shadow.markup.react.code.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35074));
});


shadow.markup.react.col = (function shadow$markup$react$col(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35240 = arguments.length;
var i__6406__auto___35241 = (0);
while(true){
if((i__6406__auto___35241 < len__6405__auto___35240)){
args__6412__auto__.push((arguments[i__6406__auto___35241]));

var G__35242 = (i__6406__auto___35241 + (1));
i__6406__auto___35241 = G__35242;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.col.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.col.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("col",args__35034__auto__);
});

shadow.markup.react.col.cljs$lang$maxFixedArity = (0);

shadow.markup.react.col.cljs$lang$applyTo = (function (seq35075){
return shadow.markup.react.col.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35075));
});


shadow.markup.react.colgroup = (function shadow$markup$react$colgroup(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35243 = arguments.length;
var i__6406__auto___35244 = (0);
while(true){
if((i__6406__auto___35244 < len__6405__auto___35243)){
args__6412__auto__.push((arguments[i__6406__auto___35244]));

var G__35245 = (i__6406__auto___35244 + (1));
i__6406__auto___35244 = G__35245;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("colgroup",args__35034__auto__);
});

shadow.markup.react.colgroup.cljs$lang$maxFixedArity = (0);

shadow.markup.react.colgroup.cljs$lang$applyTo = (function (seq35076){
return shadow.markup.react.colgroup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35076));
});


shadow.markup.react.data = (function shadow$markup$react$data(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35246 = arguments.length;
var i__6406__auto___35247 = (0);
while(true){
if((i__6406__auto___35247 < len__6405__auto___35246)){
args__6412__auto__.push((arguments[i__6406__auto___35247]));

var G__35248 = (i__6406__auto___35247 + (1));
i__6406__auto___35247 = G__35248;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.data.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.data.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("data",args__35034__auto__);
});

shadow.markup.react.data.cljs$lang$maxFixedArity = (0);

shadow.markup.react.data.cljs$lang$applyTo = (function (seq35077){
return shadow.markup.react.data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35077));
});


shadow.markup.react.datalist = (function shadow$markup$react$datalist(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35249 = arguments.length;
var i__6406__auto___35250 = (0);
while(true){
if((i__6406__auto___35250 < len__6405__auto___35249)){
args__6412__auto__.push((arguments[i__6406__auto___35250]));

var G__35251 = (i__6406__auto___35250 + (1));
i__6406__auto___35250 = G__35251;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("datalist",args__35034__auto__);
});

shadow.markup.react.datalist.cljs$lang$maxFixedArity = (0);

shadow.markup.react.datalist.cljs$lang$applyTo = (function (seq35078){
return shadow.markup.react.datalist.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35078));
});


shadow.markup.react.dd = (function shadow$markup$react$dd(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35252 = arguments.length;
var i__6406__auto___35253 = (0);
while(true){
if((i__6406__auto___35253 < len__6405__auto___35252)){
args__6412__auto__.push((arguments[i__6406__auto___35253]));

var G__35254 = (i__6406__auto___35253 + (1));
i__6406__auto___35253 = G__35254;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("dd",args__35034__auto__);
});

shadow.markup.react.dd.cljs$lang$maxFixedArity = (0);

shadow.markup.react.dd.cljs$lang$applyTo = (function (seq35079){
return shadow.markup.react.dd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35079));
});


shadow.markup.react.del = (function shadow$markup$react$del(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35255 = arguments.length;
var i__6406__auto___35256 = (0);
while(true){
if((i__6406__auto___35256 < len__6405__auto___35255)){
args__6412__auto__.push((arguments[i__6406__auto___35256]));

var G__35257 = (i__6406__auto___35256 + (1));
i__6406__auto___35256 = G__35257;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.del.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.del.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("del",args__35034__auto__);
});

shadow.markup.react.del.cljs$lang$maxFixedArity = (0);

shadow.markup.react.del.cljs$lang$applyTo = (function (seq35080){
return shadow.markup.react.del.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35080));
});


shadow.markup.react.dfn = (function shadow$markup$react$dfn(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35258 = arguments.length;
var i__6406__auto___35259 = (0);
while(true){
if((i__6406__auto___35259 < len__6405__auto___35258)){
args__6412__auto__.push((arguments[i__6406__auto___35259]));

var G__35260 = (i__6406__auto___35259 + (1));
i__6406__auto___35259 = G__35260;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("dfn",args__35034__auto__);
});

shadow.markup.react.dfn.cljs$lang$maxFixedArity = (0);

shadow.markup.react.dfn.cljs$lang$applyTo = (function (seq35081){
return shadow.markup.react.dfn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35081));
});


shadow.markup.react.div = (function shadow$markup$react$div(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35261 = arguments.length;
var i__6406__auto___35262 = (0);
while(true){
if((i__6406__auto___35262 < len__6405__auto___35261)){
args__6412__auto__.push((arguments[i__6406__auto___35262]));

var G__35263 = (i__6406__auto___35262 + (1));
i__6406__auto___35262 = G__35263;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.div.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.div.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("div",args__35034__auto__);
});

shadow.markup.react.div.cljs$lang$maxFixedArity = (0);

shadow.markup.react.div.cljs$lang$applyTo = (function (seq35082){
return shadow.markup.react.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35082));
});


shadow.markup.react.dl = (function shadow$markup$react$dl(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35264 = arguments.length;
var i__6406__auto___35265 = (0);
while(true){
if((i__6406__auto___35265 < len__6405__auto___35264)){
args__6412__auto__.push((arguments[i__6406__auto___35265]));

var G__35266 = (i__6406__auto___35265 + (1));
i__6406__auto___35265 = G__35266;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("dl",args__35034__auto__);
});

shadow.markup.react.dl.cljs$lang$maxFixedArity = (0);

shadow.markup.react.dl.cljs$lang$applyTo = (function (seq35083){
return shadow.markup.react.dl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35083));
});


shadow.markup.react.dt = (function shadow$markup$react$dt(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35267 = arguments.length;
var i__6406__auto___35268 = (0);
while(true){
if((i__6406__auto___35268 < len__6405__auto___35267)){
args__6412__auto__.push((arguments[i__6406__auto___35268]));

var G__35269 = (i__6406__auto___35268 + (1));
i__6406__auto___35268 = G__35269;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("dt",args__35034__auto__);
});

shadow.markup.react.dt.cljs$lang$maxFixedArity = (0);

shadow.markup.react.dt.cljs$lang$applyTo = (function (seq35084){
return shadow.markup.react.dt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35084));
});


shadow.markup.react.em = (function shadow$markup$react$em(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35270 = arguments.length;
var i__6406__auto___35271 = (0);
while(true){
if((i__6406__auto___35271 < len__6405__auto___35270)){
args__6412__auto__.push((arguments[i__6406__auto___35271]));

var G__35272 = (i__6406__auto___35271 + (1));
i__6406__auto___35271 = G__35272;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.em.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.em.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("em",args__35034__auto__);
});

shadow.markup.react.em.cljs$lang$maxFixedArity = (0);

shadow.markup.react.em.cljs$lang$applyTo = (function (seq35085){
return shadow.markup.react.em.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35085));
});


shadow.markup.react.embed = (function shadow$markup$react$embed(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35273 = arguments.length;
var i__6406__auto___35274 = (0);
while(true){
if((i__6406__auto___35274 < len__6405__auto___35273)){
args__6412__auto__.push((arguments[i__6406__auto___35274]));

var G__35275 = (i__6406__auto___35274 + (1));
i__6406__auto___35274 = G__35275;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("embed",args__35034__auto__);
});

shadow.markup.react.embed.cljs$lang$maxFixedArity = (0);

shadow.markup.react.embed.cljs$lang$applyTo = (function (seq35086){
return shadow.markup.react.embed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35086));
});


shadow.markup.react.fieldset = (function shadow$markup$react$fieldset(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35276 = arguments.length;
var i__6406__auto___35277 = (0);
while(true){
if((i__6406__auto___35277 < len__6405__auto___35276)){
args__6412__auto__.push((arguments[i__6406__auto___35277]));

var G__35278 = (i__6406__auto___35277 + (1));
i__6406__auto___35277 = G__35278;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("fieldset",args__35034__auto__);
});

shadow.markup.react.fieldset.cljs$lang$maxFixedArity = (0);

shadow.markup.react.fieldset.cljs$lang$applyTo = (function (seq35087){
return shadow.markup.react.fieldset.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35087));
});


shadow.markup.react.figcaption = (function shadow$markup$react$figcaption(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35279 = arguments.length;
var i__6406__auto___35280 = (0);
while(true){
if((i__6406__auto___35280 < len__6405__auto___35279)){
args__6412__auto__.push((arguments[i__6406__auto___35280]));

var G__35281 = (i__6406__auto___35280 + (1));
i__6406__auto___35280 = G__35281;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("figcaption",args__35034__auto__);
});

shadow.markup.react.figcaption.cljs$lang$maxFixedArity = (0);

shadow.markup.react.figcaption.cljs$lang$applyTo = (function (seq35088){
return shadow.markup.react.figcaption.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35088));
});


shadow.markup.react.figure = (function shadow$markup$react$figure(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35282 = arguments.length;
var i__6406__auto___35283 = (0);
while(true){
if((i__6406__auto___35283 < len__6405__auto___35282)){
args__6412__auto__.push((arguments[i__6406__auto___35283]));

var G__35284 = (i__6406__auto___35283 + (1));
i__6406__auto___35283 = G__35284;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("figure",args__35034__auto__);
});

shadow.markup.react.figure.cljs$lang$maxFixedArity = (0);

shadow.markup.react.figure.cljs$lang$applyTo = (function (seq35089){
return shadow.markup.react.figure.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35089));
});


shadow.markup.react.footer = (function shadow$markup$react$footer(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35285 = arguments.length;
var i__6406__auto___35286 = (0);
while(true){
if((i__6406__auto___35286 < len__6405__auto___35285)){
args__6412__auto__.push((arguments[i__6406__auto___35286]));

var G__35287 = (i__6406__auto___35286 + (1));
i__6406__auto___35286 = G__35287;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("footer",args__35034__auto__);
});

shadow.markup.react.footer.cljs$lang$maxFixedArity = (0);

shadow.markup.react.footer.cljs$lang$applyTo = (function (seq35090){
return shadow.markup.react.footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35090));
});


shadow.markup.react.form = (function shadow$markup$react$form(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35288 = arguments.length;
var i__6406__auto___35289 = (0);
while(true){
if((i__6406__auto___35289 < len__6405__auto___35288)){
args__6412__auto__.push((arguments[i__6406__auto___35289]));

var G__35290 = (i__6406__auto___35289 + (1));
i__6406__auto___35289 = G__35290;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.form.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.form.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("form",args__35034__auto__);
});

shadow.markup.react.form.cljs$lang$maxFixedArity = (0);

shadow.markup.react.form.cljs$lang$applyTo = (function (seq35091){
return shadow.markup.react.form.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35091));
});


shadow.markup.react.input = (function shadow$markup$react$input(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35291 = arguments.length;
var i__6406__auto___35292 = (0);
while(true){
if((i__6406__auto___35292 < len__6405__auto___35291)){
args__6412__auto__.push((arguments[i__6406__auto___35292]));

var G__35293 = (i__6406__auto___35292 + (1));
i__6406__auto___35292 = G__35293;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.input.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.input.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("input",args__35034__auto__);
});

shadow.markup.react.input.cljs$lang$maxFixedArity = (0);

shadow.markup.react.input.cljs$lang$applyTo = (function (seq35092){
return shadow.markup.react.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35092));
});


shadow.markup.react.textarea = (function shadow$markup$react$textarea(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35294 = arguments.length;
var i__6406__auto___35295 = (0);
while(true){
if((i__6406__auto___35295 < len__6405__auto___35294)){
args__6412__auto__.push((arguments[i__6406__auto___35295]));

var G__35296 = (i__6406__auto___35295 + (1));
i__6406__auto___35295 = G__35296;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("textarea",args__35034__auto__);
});

shadow.markup.react.textarea.cljs$lang$maxFixedArity = (0);

shadow.markup.react.textarea.cljs$lang$applyTo = (function (seq35093){
return shadow.markup.react.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35093));
});


shadow.markup.react.option = (function shadow$markup$react$option(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35297 = arguments.length;
var i__6406__auto___35298 = (0);
while(true){
if((i__6406__auto___35298 < len__6405__auto___35297)){
args__6412__auto__.push((arguments[i__6406__auto___35298]));

var G__35299 = (i__6406__auto___35298 + (1));
i__6406__auto___35298 = G__35299;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.option.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.option.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("option",args__35034__auto__);
});

shadow.markup.react.option.cljs$lang$maxFixedArity = (0);

shadow.markup.react.option.cljs$lang$applyTo = (function (seq35094){
return shadow.markup.react.option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35094));
});


shadow.markup.react.h1 = (function shadow$markup$react$h1(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35300 = arguments.length;
var i__6406__auto___35301 = (0);
while(true){
if((i__6406__auto___35301 < len__6405__auto___35300)){
args__6412__auto__.push((arguments[i__6406__auto___35301]));

var G__35302 = (i__6406__auto___35301 + (1));
i__6406__auto___35301 = G__35302;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("h1",args__35034__auto__);
});

shadow.markup.react.h1.cljs$lang$maxFixedArity = (0);

shadow.markup.react.h1.cljs$lang$applyTo = (function (seq35095){
return shadow.markup.react.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35095));
});


shadow.markup.react.h2 = (function shadow$markup$react$h2(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35303 = arguments.length;
var i__6406__auto___35304 = (0);
while(true){
if((i__6406__auto___35304 < len__6405__auto___35303)){
args__6412__auto__.push((arguments[i__6406__auto___35304]));

var G__35305 = (i__6406__auto___35304 + (1));
i__6406__auto___35304 = G__35305;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("h2",args__35034__auto__);
});

shadow.markup.react.h2.cljs$lang$maxFixedArity = (0);

shadow.markup.react.h2.cljs$lang$applyTo = (function (seq35096){
return shadow.markup.react.h2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35096));
});


shadow.markup.react.h3 = (function shadow$markup$react$h3(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35306 = arguments.length;
var i__6406__auto___35307 = (0);
while(true){
if((i__6406__auto___35307 < len__6405__auto___35306)){
args__6412__auto__.push((arguments[i__6406__auto___35307]));

var G__35308 = (i__6406__auto___35307 + (1));
i__6406__auto___35307 = G__35308;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("h3",args__35034__auto__);
});

shadow.markup.react.h3.cljs$lang$maxFixedArity = (0);

shadow.markup.react.h3.cljs$lang$applyTo = (function (seq35097){
return shadow.markup.react.h3.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35097));
});


shadow.markup.react.h4 = (function shadow$markup$react$h4(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35309 = arguments.length;
var i__6406__auto___35310 = (0);
while(true){
if((i__6406__auto___35310 < len__6405__auto___35309)){
args__6412__auto__.push((arguments[i__6406__auto___35310]));

var G__35311 = (i__6406__auto___35310 + (1));
i__6406__auto___35310 = G__35311;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("h4",args__35034__auto__);
});

shadow.markup.react.h4.cljs$lang$maxFixedArity = (0);

shadow.markup.react.h4.cljs$lang$applyTo = (function (seq35098){
return shadow.markup.react.h4.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35098));
});


shadow.markup.react.h5 = (function shadow$markup$react$h5(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35312 = arguments.length;
var i__6406__auto___35313 = (0);
while(true){
if((i__6406__auto___35313 < len__6405__auto___35312)){
args__6412__auto__.push((arguments[i__6406__auto___35313]));

var G__35314 = (i__6406__auto___35313 + (1));
i__6406__auto___35313 = G__35314;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("h5",args__35034__auto__);
});

shadow.markup.react.h5.cljs$lang$maxFixedArity = (0);

shadow.markup.react.h5.cljs$lang$applyTo = (function (seq35099){
return shadow.markup.react.h5.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35099));
});


shadow.markup.react.h6 = (function shadow$markup$react$h6(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35315 = arguments.length;
var i__6406__auto___35316 = (0);
while(true){
if((i__6406__auto___35316 < len__6405__auto___35315)){
args__6412__auto__.push((arguments[i__6406__auto___35316]));

var G__35317 = (i__6406__auto___35316 + (1));
i__6406__auto___35316 = G__35317;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("h6",args__35034__auto__);
});

shadow.markup.react.h6.cljs$lang$maxFixedArity = (0);

shadow.markup.react.h6.cljs$lang$applyTo = (function (seq35100){
return shadow.markup.react.h6.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35100));
});


shadow.markup.react.head = (function shadow$markup$react$head(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35318 = arguments.length;
var i__6406__auto___35319 = (0);
while(true){
if((i__6406__auto___35319 < len__6405__auto___35318)){
args__6412__auto__.push((arguments[i__6406__auto___35319]));

var G__35320 = (i__6406__auto___35319 + (1));
i__6406__auto___35319 = G__35320;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.head.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.head.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("head",args__35034__auto__);
});

shadow.markup.react.head.cljs$lang$maxFixedArity = (0);

shadow.markup.react.head.cljs$lang$applyTo = (function (seq35101){
return shadow.markup.react.head.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35101));
});


shadow.markup.react.header = (function shadow$markup$react$header(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35321 = arguments.length;
var i__6406__auto___35322 = (0);
while(true){
if((i__6406__auto___35322 < len__6405__auto___35321)){
args__6412__auto__.push((arguments[i__6406__auto___35322]));

var G__35323 = (i__6406__auto___35322 + (1));
i__6406__auto___35322 = G__35323;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.header.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.header.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("header",args__35034__auto__);
});

shadow.markup.react.header.cljs$lang$maxFixedArity = (0);

shadow.markup.react.header.cljs$lang$applyTo = (function (seq35102){
return shadow.markup.react.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35102));
});


shadow.markup.react.hr = (function shadow$markup$react$hr(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35324 = arguments.length;
var i__6406__auto___35325 = (0);
while(true){
if((i__6406__auto___35325 < len__6405__auto___35324)){
args__6412__auto__.push((arguments[i__6406__auto___35325]));

var G__35326 = (i__6406__auto___35325 + (1));
i__6406__auto___35325 = G__35326;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("hr",args__35034__auto__);
});

shadow.markup.react.hr.cljs$lang$maxFixedArity = (0);

shadow.markup.react.hr.cljs$lang$applyTo = (function (seq35103){
return shadow.markup.react.hr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35103));
});


shadow.markup.react.html = (function shadow$markup$react$html(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35327 = arguments.length;
var i__6406__auto___35328 = (0);
while(true){
if((i__6406__auto___35328 < len__6405__auto___35327)){
args__6412__auto__.push((arguments[i__6406__auto___35328]));

var G__35329 = (i__6406__auto___35328 + (1));
i__6406__auto___35328 = G__35329;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.html.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("html",args__35034__auto__);
});

shadow.markup.react.html.cljs$lang$maxFixedArity = (0);

shadow.markup.react.html.cljs$lang$applyTo = (function (seq35104){
return shadow.markup.react.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35104));
});


shadow.markup.react.i = (function shadow$markup$react$i(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35330 = arguments.length;
var i__6406__auto___35331 = (0);
while(true){
if((i__6406__auto___35331 < len__6405__auto___35330)){
args__6412__auto__.push((arguments[i__6406__auto___35331]));

var G__35332 = (i__6406__auto___35331 + (1));
i__6406__auto___35331 = G__35332;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.i.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.i.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("i",args__35034__auto__);
});

shadow.markup.react.i.cljs$lang$maxFixedArity = (0);

shadow.markup.react.i.cljs$lang$applyTo = (function (seq35105){
return shadow.markup.react.i.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35105));
});


shadow.markup.react.iframe = (function shadow$markup$react$iframe(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35333 = arguments.length;
var i__6406__auto___35334 = (0);
while(true){
if((i__6406__auto___35334 < len__6405__auto___35333)){
args__6412__auto__.push((arguments[i__6406__auto___35334]));

var G__35335 = (i__6406__auto___35334 + (1));
i__6406__auto___35334 = G__35335;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("iframe",args__35034__auto__);
});

shadow.markup.react.iframe.cljs$lang$maxFixedArity = (0);

shadow.markup.react.iframe.cljs$lang$applyTo = (function (seq35106){
return shadow.markup.react.iframe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35106));
});


shadow.markup.react.img = (function shadow$markup$react$img(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35336 = arguments.length;
var i__6406__auto___35337 = (0);
while(true){
if((i__6406__auto___35337 < len__6405__auto___35336)){
args__6412__auto__.push((arguments[i__6406__auto___35337]));

var G__35338 = (i__6406__auto___35337 + (1));
i__6406__auto___35337 = G__35338;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.img.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.img.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("img",args__35034__auto__);
});

shadow.markup.react.img.cljs$lang$maxFixedArity = (0);

shadow.markup.react.img.cljs$lang$applyTo = (function (seq35107){
return shadow.markup.react.img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35107));
});


shadow.markup.react.ins = (function shadow$markup$react$ins(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35339 = arguments.length;
var i__6406__auto___35340 = (0);
while(true){
if((i__6406__auto___35340 < len__6405__auto___35339)){
args__6412__auto__.push((arguments[i__6406__auto___35340]));

var G__35341 = (i__6406__auto___35340 + (1));
i__6406__auto___35340 = G__35341;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("ins",args__35034__auto__);
});

shadow.markup.react.ins.cljs$lang$maxFixedArity = (0);

shadow.markup.react.ins.cljs$lang$applyTo = (function (seq35108){
return shadow.markup.react.ins.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35108));
});


shadow.markup.react.kbd = (function shadow$markup$react$kbd(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35342 = arguments.length;
var i__6406__auto___35343 = (0);
while(true){
if((i__6406__auto___35343 < len__6405__auto___35342)){
args__6412__auto__.push((arguments[i__6406__auto___35343]));

var G__35344 = (i__6406__auto___35343 + (1));
i__6406__auto___35343 = G__35344;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("kbd",args__35034__auto__);
});

shadow.markup.react.kbd.cljs$lang$maxFixedArity = (0);

shadow.markup.react.kbd.cljs$lang$applyTo = (function (seq35109){
return shadow.markup.react.kbd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35109));
});


shadow.markup.react.keygen = (function shadow$markup$react$keygen(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35345 = arguments.length;
var i__6406__auto___35346 = (0);
while(true){
if((i__6406__auto___35346 < len__6405__auto___35345)){
args__6412__auto__.push((arguments[i__6406__auto___35346]));

var G__35347 = (i__6406__auto___35346 + (1));
i__6406__auto___35346 = G__35347;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("keygen",args__35034__auto__);
});

shadow.markup.react.keygen.cljs$lang$maxFixedArity = (0);

shadow.markup.react.keygen.cljs$lang$applyTo = (function (seq35110){
return shadow.markup.react.keygen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35110));
});


shadow.markup.react.label = (function shadow$markup$react$label(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35348 = arguments.length;
var i__6406__auto___35349 = (0);
while(true){
if((i__6406__auto___35349 < len__6405__auto___35348)){
args__6412__auto__.push((arguments[i__6406__auto___35349]));

var G__35350 = (i__6406__auto___35349 + (1));
i__6406__auto___35349 = G__35350;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.label.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.label.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("label",args__35034__auto__);
});

shadow.markup.react.label.cljs$lang$maxFixedArity = (0);

shadow.markup.react.label.cljs$lang$applyTo = (function (seq35111){
return shadow.markup.react.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35111));
});


shadow.markup.react.legend = (function shadow$markup$react$legend(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35351 = arguments.length;
var i__6406__auto___35352 = (0);
while(true){
if((i__6406__auto___35352 < len__6405__auto___35351)){
args__6412__auto__.push((arguments[i__6406__auto___35352]));

var G__35353 = (i__6406__auto___35352 + (1));
i__6406__auto___35352 = G__35353;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("legend",args__35034__auto__);
});

shadow.markup.react.legend.cljs$lang$maxFixedArity = (0);

shadow.markup.react.legend.cljs$lang$applyTo = (function (seq35112){
return shadow.markup.react.legend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35112));
});


shadow.markup.react.li = (function shadow$markup$react$li(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35354 = arguments.length;
var i__6406__auto___35355 = (0);
while(true){
if((i__6406__auto___35355 < len__6405__auto___35354)){
args__6412__auto__.push((arguments[i__6406__auto___35355]));

var G__35356 = (i__6406__auto___35355 + (1));
i__6406__auto___35355 = G__35356;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.li.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.li.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("li",args__35034__auto__);
});

shadow.markup.react.li.cljs$lang$maxFixedArity = (0);

shadow.markup.react.li.cljs$lang$applyTo = (function (seq35113){
return shadow.markup.react.li.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35113));
});


shadow.markup.react.link = (function shadow$markup$react$link(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35357 = arguments.length;
var i__6406__auto___35358 = (0);
while(true){
if((i__6406__auto___35358 < len__6405__auto___35357)){
args__6412__auto__.push((arguments[i__6406__auto___35358]));

var G__35359 = (i__6406__auto___35358 + (1));
i__6406__auto___35358 = G__35359;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.link.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.link.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("link",args__35034__auto__);
});

shadow.markup.react.link.cljs$lang$maxFixedArity = (0);

shadow.markup.react.link.cljs$lang$applyTo = (function (seq35114){
return shadow.markup.react.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35114));
});


shadow.markup.react.main = (function shadow$markup$react$main(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35360 = arguments.length;
var i__6406__auto___35361 = (0);
while(true){
if((i__6406__auto___35361 < len__6405__auto___35360)){
args__6412__auto__.push((arguments[i__6406__auto___35361]));

var G__35362 = (i__6406__auto___35361 + (1));
i__6406__auto___35361 = G__35362;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.main.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.main.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("main",args__35034__auto__);
});

shadow.markup.react.main.cljs$lang$maxFixedArity = (0);

shadow.markup.react.main.cljs$lang$applyTo = (function (seq35115){
return shadow.markup.react.main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35115));
});


shadow.markup.react.map = (function shadow$markup$react$map(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35363 = arguments.length;
var i__6406__auto___35364 = (0);
while(true){
if((i__6406__auto___35364 < len__6405__auto___35363)){
args__6412__auto__.push((arguments[i__6406__auto___35364]));

var G__35365 = (i__6406__auto___35364 + (1));
i__6406__auto___35364 = G__35365;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.map.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.map.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("map",args__35034__auto__);
});

shadow.markup.react.map.cljs$lang$maxFixedArity = (0);

shadow.markup.react.map.cljs$lang$applyTo = (function (seq35116){
return shadow.markup.react.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35116));
});


shadow.markup.react.mark = (function shadow$markup$react$mark(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35366 = arguments.length;
var i__6406__auto___35367 = (0);
while(true){
if((i__6406__auto___35367 < len__6405__auto___35366)){
args__6412__auto__.push((arguments[i__6406__auto___35367]));

var G__35368 = (i__6406__auto___35367 + (1));
i__6406__auto___35367 = G__35368;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("mark",args__35034__auto__);
});

shadow.markup.react.mark.cljs$lang$maxFixedArity = (0);

shadow.markup.react.mark.cljs$lang$applyTo = (function (seq35117){
return shadow.markup.react.mark.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35117));
});


shadow.markup.react.marquee = (function shadow$markup$react$marquee(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35369 = arguments.length;
var i__6406__auto___35370 = (0);
while(true){
if((i__6406__auto___35370 < len__6405__auto___35369)){
args__6412__auto__.push((arguments[i__6406__auto___35370]));

var G__35371 = (i__6406__auto___35370 + (1));
i__6406__auto___35370 = G__35371;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.marquee.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("marquee",args__35034__auto__);
});

shadow.markup.react.marquee.cljs$lang$maxFixedArity = (0);

shadow.markup.react.marquee.cljs$lang$applyTo = (function (seq35118){
return shadow.markup.react.marquee.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35118));
});


shadow.markup.react.menu = (function shadow$markup$react$menu(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35372 = arguments.length;
var i__6406__auto___35373 = (0);
while(true){
if((i__6406__auto___35373 < len__6405__auto___35372)){
args__6412__auto__.push((arguments[i__6406__auto___35373]));

var G__35374 = (i__6406__auto___35373 + (1));
i__6406__auto___35373 = G__35374;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("menu",args__35034__auto__);
});

shadow.markup.react.menu.cljs$lang$maxFixedArity = (0);

shadow.markup.react.menu.cljs$lang$applyTo = (function (seq35119){
return shadow.markup.react.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35119));
});


shadow.markup.react.menuitem = (function shadow$markup$react$menuitem(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35375 = arguments.length;
var i__6406__auto___35376 = (0);
while(true){
if((i__6406__auto___35376 < len__6405__auto___35375)){
args__6412__auto__.push((arguments[i__6406__auto___35376]));

var G__35377 = (i__6406__auto___35376 + (1));
i__6406__auto___35376 = G__35377;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("menuitem",args__35034__auto__);
});

shadow.markup.react.menuitem.cljs$lang$maxFixedArity = (0);

shadow.markup.react.menuitem.cljs$lang$applyTo = (function (seq35120){
return shadow.markup.react.menuitem.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35120));
});


shadow.markup.react.meta = (function shadow$markup$react$meta(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35378 = arguments.length;
var i__6406__auto___35379 = (0);
while(true){
if((i__6406__auto___35379 < len__6405__auto___35378)){
args__6412__auto__.push((arguments[i__6406__auto___35379]));

var G__35380 = (i__6406__auto___35379 + (1));
i__6406__auto___35379 = G__35380;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("meta",args__35034__auto__);
});

shadow.markup.react.meta.cljs$lang$maxFixedArity = (0);

shadow.markup.react.meta.cljs$lang$applyTo = (function (seq35121){
return shadow.markup.react.meta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35121));
});


shadow.markup.react.meter = (function shadow$markup$react$meter(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35381 = arguments.length;
var i__6406__auto___35382 = (0);
while(true){
if((i__6406__auto___35382 < len__6405__auto___35381)){
args__6412__auto__.push((arguments[i__6406__auto___35382]));

var G__35383 = (i__6406__auto___35382 + (1));
i__6406__auto___35382 = G__35383;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("meter",args__35034__auto__);
});

shadow.markup.react.meter.cljs$lang$maxFixedArity = (0);

shadow.markup.react.meter.cljs$lang$applyTo = (function (seq35122){
return shadow.markup.react.meter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35122));
});


shadow.markup.react.nav = (function shadow$markup$react$nav(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35384 = arguments.length;
var i__6406__auto___35385 = (0);
while(true){
if((i__6406__auto___35385 < len__6405__auto___35384)){
args__6412__auto__.push((arguments[i__6406__auto___35385]));

var G__35386 = (i__6406__auto___35385 + (1));
i__6406__auto___35385 = G__35386;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("nav",args__35034__auto__);
});

shadow.markup.react.nav.cljs$lang$maxFixedArity = (0);

shadow.markup.react.nav.cljs$lang$applyTo = (function (seq35123){
return shadow.markup.react.nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35123));
});


shadow.markup.react.noscript = (function shadow$markup$react$noscript(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35387 = arguments.length;
var i__6406__auto___35388 = (0);
while(true){
if((i__6406__auto___35388 < len__6405__auto___35387)){
args__6412__auto__.push((arguments[i__6406__auto___35388]));

var G__35389 = (i__6406__auto___35388 + (1));
i__6406__auto___35388 = G__35389;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("noscript",args__35034__auto__);
});

shadow.markup.react.noscript.cljs$lang$maxFixedArity = (0);

shadow.markup.react.noscript.cljs$lang$applyTo = (function (seq35124){
return shadow.markup.react.noscript.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35124));
});


shadow.markup.react.object = (function shadow$markup$react$object(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35390 = arguments.length;
var i__6406__auto___35391 = (0);
while(true){
if((i__6406__auto___35391 < len__6405__auto___35390)){
args__6412__auto__.push((arguments[i__6406__auto___35391]));

var G__35392 = (i__6406__auto___35391 + (1));
i__6406__auto___35391 = G__35392;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.object.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.object.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("object",args__35034__auto__);
});

shadow.markup.react.object.cljs$lang$maxFixedArity = (0);

shadow.markup.react.object.cljs$lang$applyTo = (function (seq35125){
return shadow.markup.react.object.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35125));
});


shadow.markup.react.ol = (function shadow$markup$react$ol(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35393 = arguments.length;
var i__6406__auto___35394 = (0);
while(true){
if((i__6406__auto___35394 < len__6405__auto___35393)){
args__6412__auto__.push((arguments[i__6406__auto___35394]));

var G__35395 = (i__6406__auto___35394 + (1));
i__6406__auto___35394 = G__35395;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("ol",args__35034__auto__);
});

shadow.markup.react.ol.cljs$lang$maxFixedArity = (0);

shadow.markup.react.ol.cljs$lang$applyTo = (function (seq35126){
return shadow.markup.react.ol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35126));
});


shadow.markup.react.optgroup = (function shadow$markup$react$optgroup(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35396 = arguments.length;
var i__6406__auto___35397 = (0);
while(true){
if((i__6406__auto___35397 < len__6405__auto___35396)){
args__6412__auto__.push((arguments[i__6406__auto___35397]));

var G__35398 = (i__6406__auto___35397 + (1));
i__6406__auto___35397 = G__35398;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("optgroup",args__35034__auto__);
});

shadow.markup.react.optgroup.cljs$lang$maxFixedArity = (0);

shadow.markup.react.optgroup.cljs$lang$applyTo = (function (seq35127){
return shadow.markup.react.optgroup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35127));
});


shadow.markup.react.output = (function shadow$markup$react$output(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35399 = arguments.length;
var i__6406__auto___35400 = (0);
while(true){
if((i__6406__auto___35400 < len__6405__auto___35399)){
args__6412__auto__.push((arguments[i__6406__auto___35400]));

var G__35401 = (i__6406__auto___35400 + (1));
i__6406__auto___35400 = G__35401;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.output.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.output.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("output",args__35034__auto__);
});

shadow.markup.react.output.cljs$lang$maxFixedArity = (0);

shadow.markup.react.output.cljs$lang$applyTo = (function (seq35128){
return shadow.markup.react.output.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35128));
});


shadow.markup.react.p = (function shadow$markup$react$p(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35402 = arguments.length;
var i__6406__auto___35403 = (0);
while(true){
if((i__6406__auto___35403 < len__6405__auto___35402)){
args__6412__auto__.push((arguments[i__6406__auto___35403]));

var G__35404 = (i__6406__auto___35403 + (1));
i__6406__auto___35403 = G__35404;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.p.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.p.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("p",args__35034__auto__);
});

shadow.markup.react.p.cljs$lang$maxFixedArity = (0);

shadow.markup.react.p.cljs$lang$applyTo = (function (seq35129){
return shadow.markup.react.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35129));
});


shadow.markup.react.param = (function shadow$markup$react$param(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35405 = arguments.length;
var i__6406__auto___35406 = (0);
while(true){
if((i__6406__auto___35406 < len__6405__auto___35405)){
args__6412__auto__.push((arguments[i__6406__auto___35406]));

var G__35407 = (i__6406__auto___35406 + (1));
i__6406__auto___35406 = G__35407;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.param.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.param.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("param",args__35034__auto__);
});

shadow.markup.react.param.cljs$lang$maxFixedArity = (0);

shadow.markup.react.param.cljs$lang$applyTo = (function (seq35130){
return shadow.markup.react.param.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35130));
});


shadow.markup.react.pre = (function shadow$markup$react$pre(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35408 = arguments.length;
var i__6406__auto___35409 = (0);
while(true){
if((i__6406__auto___35409 < len__6405__auto___35408)){
args__6412__auto__.push((arguments[i__6406__auto___35409]));

var G__35410 = (i__6406__auto___35409 + (1));
i__6406__auto___35409 = G__35410;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("pre",args__35034__auto__);
});

shadow.markup.react.pre.cljs$lang$maxFixedArity = (0);

shadow.markup.react.pre.cljs$lang$applyTo = (function (seq35131){
return shadow.markup.react.pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35131));
});


shadow.markup.react.progress = (function shadow$markup$react$progress(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35411 = arguments.length;
var i__6406__auto___35412 = (0);
while(true){
if((i__6406__auto___35412 < len__6405__auto___35411)){
args__6412__auto__.push((arguments[i__6406__auto___35412]));

var G__35413 = (i__6406__auto___35412 + (1));
i__6406__auto___35412 = G__35413;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("progress",args__35034__auto__);
});

shadow.markup.react.progress.cljs$lang$maxFixedArity = (0);

shadow.markup.react.progress.cljs$lang$applyTo = (function (seq35132){
return shadow.markup.react.progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35132));
});


shadow.markup.react.q = (function shadow$markup$react$q(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35414 = arguments.length;
var i__6406__auto___35415 = (0);
while(true){
if((i__6406__auto___35415 < len__6405__auto___35414)){
args__6412__auto__.push((arguments[i__6406__auto___35415]));

var G__35416 = (i__6406__auto___35415 + (1));
i__6406__auto___35415 = G__35416;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.q.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.q.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("q",args__35034__auto__);
});

shadow.markup.react.q.cljs$lang$maxFixedArity = (0);

shadow.markup.react.q.cljs$lang$applyTo = (function (seq35133){
return shadow.markup.react.q.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35133));
});


shadow.markup.react.rp = (function shadow$markup$react$rp(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35417 = arguments.length;
var i__6406__auto___35418 = (0);
while(true){
if((i__6406__auto___35418 < len__6405__auto___35417)){
args__6412__auto__.push((arguments[i__6406__auto___35418]));

var G__35419 = (i__6406__auto___35418 + (1));
i__6406__auto___35418 = G__35419;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("rp",args__35034__auto__);
});

shadow.markup.react.rp.cljs$lang$maxFixedArity = (0);

shadow.markup.react.rp.cljs$lang$applyTo = (function (seq35134){
return shadow.markup.react.rp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35134));
});


shadow.markup.react.rt = (function shadow$markup$react$rt(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35420 = arguments.length;
var i__6406__auto___35421 = (0);
while(true){
if((i__6406__auto___35421 < len__6405__auto___35420)){
args__6412__auto__.push((arguments[i__6406__auto___35421]));

var G__35422 = (i__6406__auto___35421 + (1));
i__6406__auto___35421 = G__35422;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("rt",args__35034__auto__);
});

shadow.markup.react.rt.cljs$lang$maxFixedArity = (0);

shadow.markup.react.rt.cljs$lang$applyTo = (function (seq35135){
return shadow.markup.react.rt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35135));
});


shadow.markup.react.ruby = (function shadow$markup$react$ruby(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35423 = arguments.length;
var i__6406__auto___35424 = (0);
while(true){
if((i__6406__auto___35424 < len__6405__auto___35423)){
args__6412__auto__.push((arguments[i__6406__auto___35424]));

var G__35425 = (i__6406__auto___35424 + (1));
i__6406__auto___35424 = G__35425;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("ruby",args__35034__auto__);
});

shadow.markup.react.ruby.cljs$lang$maxFixedArity = (0);

shadow.markup.react.ruby.cljs$lang$applyTo = (function (seq35136){
return shadow.markup.react.ruby.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35136));
});


shadow.markup.react.s = (function shadow$markup$react$s(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35426 = arguments.length;
var i__6406__auto___35427 = (0);
while(true){
if((i__6406__auto___35427 < len__6405__auto___35426)){
args__6412__auto__.push((arguments[i__6406__auto___35427]));

var G__35428 = (i__6406__auto___35427 + (1));
i__6406__auto___35427 = G__35428;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.s.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.s.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("s",args__35034__auto__);
});

shadow.markup.react.s.cljs$lang$maxFixedArity = (0);

shadow.markup.react.s.cljs$lang$applyTo = (function (seq35137){
return shadow.markup.react.s.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35137));
});


shadow.markup.react.samp = (function shadow$markup$react$samp(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35429 = arguments.length;
var i__6406__auto___35430 = (0);
while(true){
if((i__6406__auto___35430 < len__6405__auto___35429)){
args__6412__auto__.push((arguments[i__6406__auto___35430]));

var G__35431 = (i__6406__auto___35430 + (1));
i__6406__auto___35430 = G__35431;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("samp",args__35034__auto__);
});

shadow.markup.react.samp.cljs$lang$maxFixedArity = (0);

shadow.markup.react.samp.cljs$lang$applyTo = (function (seq35138){
return shadow.markup.react.samp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35138));
});


shadow.markup.react.script = (function shadow$markup$react$script(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35432 = arguments.length;
var i__6406__auto___35433 = (0);
while(true){
if((i__6406__auto___35433 < len__6405__auto___35432)){
args__6412__auto__.push((arguments[i__6406__auto___35433]));

var G__35434 = (i__6406__auto___35433 + (1));
i__6406__auto___35433 = G__35434;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.script.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.script.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("script",args__35034__auto__);
});

shadow.markup.react.script.cljs$lang$maxFixedArity = (0);

shadow.markup.react.script.cljs$lang$applyTo = (function (seq35139){
return shadow.markup.react.script.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35139));
});


shadow.markup.react.section = (function shadow$markup$react$section(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35435 = arguments.length;
var i__6406__auto___35436 = (0);
while(true){
if((i__6406__auto___35436 < len__6405__auto___35435)){
args__6412__auto__.push((arguments[i__6406__auto___35436]));

var G__35437 = (i__6406__auto___35436 + (1));
i__6406__auto___35436 = G__35437;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.section.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.section.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("section",args__35034__auto__);
});

shadow.markup.react.section.cljs$lang$maxFixedArity = (0);

shadow.markup.react.section.cljs$lang$applyTo = (function (seq35140){
return shadow.markup.react.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35140));
});


shadow.markup.react.select = (function shadow$markup$react$select(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35438 = arguments.length;
var i__6406__auto___35439 = (0);
while(true){
if((i__6406__auto___35439 < len__6405__auto___35438)){
args__6412__auto__.push((arguments[i__6406__auto___35439]));

var G__35440 = (i__6406__auto___35439 + (1));
i__6406__auto___35439 = G__35440;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.select.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.select.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("select",args__35034__auto__);
});

shadow.markup.react.select.cljs$lang$maxFixedArity = (0);

shadow.markup.react.select.cljs$lang$applyTo = (function (seq35141){
return shadow.markup.react.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35141));
});


shadow.markup.react.small = (function shadow$markup$react$small(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35441 = arguments.length;
var i__6406__auto___35442 = (0);
while(true){
if((i__6406__auto___35442 < len__6405__auto___35441)){
args__6412__auto__.push((arguments[i__6406__auto___35442]));

var G__35443 = (i__6406__auto___35442 + (1));
i__6406__auto___35442 = G__35443;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.small.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.small.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("small",args__35034__auto__);
});

shadow.markup.react.small.cljs$lang$maxFixedArity = (0);

shadow.markup.react.small.cljs$lang$applyTo = (function (seq35142){
return shadow.markup.react.small.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35142));
});


shadow.markup.react.source = (function shadow$markup$react$source(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35444 = arguments.length;
var i__6406__auto___35445 = (0);
while(true){
if((i__6406__auto___35445 < len__6405__auto___35444)){
args__6412__auto__.push((arguments[i__6406__auto___35445]));

var G__35446 = (i__6406__auto___35445 + (1));
i__6406__auto___35445 = G__35446;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.source.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.source.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("source",args__35034__auto__);
});

shadow.markup.react.source.cljs$lang$maxFixedArity = (0);

shadow.markup.react.source.cljs$lang$applyTo = (function (seq35143){
return shadow.markup.react.source.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35143));
});


shadow.markup.react.span = (function shadow$markup$react$span(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35447 = arguments.length;
var i__6406__auto___35448 = (0);
while(true){
if((i__6406__auto___35448 < len__6405__auto___35447)){
args__6412__auto__.push((arguments[i__6406__auto___35448]));

var G__35449 = (i__6406__auto___35448 + (1));
i__6406__auto___35448 = G__35449;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.span.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.span.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("span",args__35034__auto__);
});

shadow.markup.react.span.cljs$lang$maxFixedArity = (0);

shadow.markup.react.span.cljs$lang$applyTo = (function (seq35144){
return shadow.markup.react.span.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35144));
});


shadow.markup.react.strong = (function shadow$markup$react$strong(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35450 = arguments.length;
var i__6406__auto___35451 = (0);
while(true){
if((i__6406__auto___35451 < len__6405__auto___35450)){
args__6412__auto__.push((arguments[i__6406__auto___35451]));

var G__35452 = (i__6406__auto___35451 + (1));
i__6406__auto___35451 = G__35452;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("strong",args__35034__auto__);
});

shadow.markup.react.strong.cljs$lang$maxFixedArity = (0);

shadow.markup.react.strong.cljs$lang$applyTo = (function (seq35145){
return shadow.markup.react.strong.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35145));
});


shadow.markup.react.style = (function shadow$markup$react$style(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35453 = arguments.length;
var i__6406__auto___35454 = (0);
while(true){
if((i__6406__auto___35454 < len__6405__auto___35453)){
args__6412__auto__.push((arguments[i__6406__auto___35454]));

var G__35455 = (i__6406__auto___35454 + (1));
i__6406__auto___35454 = G__35455;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.style.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.style.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("style",args__35034__auto__);
});

shadow.markup.react.style.cljs$lang$maxFixedArity = (0);

shadow.markup.react.style.cljs$lang$applyTo = (function (seq35146){
return shadow.markup.react.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35146));
});


shadow.markup.react.sub = (function shadow$markup$react$sub(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35456 = arguments.length;
var i__6406__auto___35457 = (0);
while(true){
if((i__6406__auto___35457 < len__6405__auto___35456)){
args__6412__auto__.push((arguments[i__6406__auto___35457]));

var G__35458 = (i__6406__auto___35457 + (1));
i__6406__auto___35457 = G__35458;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("sub",args__35034__auto__);
});

shadow.markup.react.sub.cljs$lang$maxFixedArity = (0);

shadow.markup.react.sub.cljs$lang$applyTo = (function (seq35147){
return shadow.markup.react.sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35147));
});


shadow.markup.react.summary = (function shadow$markup$react$summary(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35459 = arguments.length;
var i__6406__auto___35460 = (0);
while(true){
if((i__6406__auto___35460 < len__6405__auto___35459)){
args__6412__auto__.push((arguments[i__6406__auto___35460]));

var G__35461 = (i__6406__auto___35460 + (1));
i__6406__auto___35460 = G__35461;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("summary",args__35034__auto__);
});

shadow.markup.react.summary.cljs$lang$maxFixedArity = (0);

shadow.markup.react.summary.cljs$lang$applyTo = (function (seq35148){
return shadow.markup.react.summary.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35148));
});


shadow.markup.react.sup = (function shadow$markup$react$sup(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35462 = arguments.length;
var i__6406__auto___35463 = (0);
while(true){
if((i__6406__auto___35463 < len__6405__auto___35462)){
args__6412__auto__.push((arguments[i__6406__auto___35463]));

var G__35464 = (i__6406__auto___35463 + (1));
i__6406__auto___35463 = G__35464;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("sup",args__35034__auto__);
});

shadow.markup.react.sup.cljs$lang$maxFixedArity = (0);

shadow.markup.react.sup.cljs$lang$applyTo = (function (seq35149){
return shadow.markup.react.sup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35149));
});


shadow.markup.react.table = (function shadow$markup$react$table(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35465 = arguments.length;
var i__6406__auto___35466 = (0);
while(true){
if((i__6406__auto___35466 < len__6405__auto___35465)){
args__6412__auto__.push((arguments[i__6406__auto___35466]));

var G__35467 = (i__6406__auto___35466 + (1));
i__6406__auto___35466 = G__35467;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.table.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.table.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("table",args__35034__auto__);
});

shadow.markup.react.table.cljs$lang$maxFixedArity = (0);

shadow.markup.react.table.cljs$lang$applyTo = (function (seq35150){
return shadow.markup.react.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35150));
});


shadow.markup.react.tbody = (function shadow$markup$react$tbody(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35468 = arguments.length;
var i__6406__auto___35469 = (0);
while(true){
if((i__6406__auto___35469 < len__6405__auto___35468)){
args__6412__auto__.push((arguments[i__6406__auto___35469]));

var G__35470 = (i__6406__auto___35469 + (1));
i__6406__auto___35469 = G__35470;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("tbody",args__35034__auto__);
});

shadow.markup.react.tbody.cljs$lang$maxFixedArity = (0);

shadow.markup.react.tbody.cljs$lang$applyTo = (function (seq35151){
return shadow.markup.react.tbody.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35151));
});


shadow.markup.react.td = (function shadow$markup$react$td(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35471 = arguments.length;
var i__6406__auto___35472 = (0);
while(true){
if((i__6406__auto___35472 < len__6405__auto___35471)){
args__6412__auto__.push((arguments[i__6406__auto___35472]));

var G__35473 = (i__6406__auto___35472 + (1));
i__6406__auto___35472 = G__35473;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.td.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.td.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("td",args__35034__auto__);
});

shadow.markup.react.td.cljs$lang$maxFixedArity = (0);

shadow.markup.react.td.cljs$lang$applyTo = (function (seq35152){
return shadow.markup.react.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35152));
});


shadow.markup.react.tfoot = (function shadow$markup$react$tfoot(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35474 = arguments.length;
var i__6406__auto___35475 = (0);
while(true){
if((i__6406__auto___35475 < len__6405__auto___35474)){
args__6412__auto__.push((arguments[i__6406__auto___35475]));

var G__35476 = (i__6406__auto___35475 + (1));
i__6406__auto___35475 = G__35476;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("tfoot",args__35034__auto__);
});

shadow.markup.react.tfoot.cljs$lang$maxFixedArity = (0);

shadow.markup.react.tfoot.cljs$lang$applyTo = (function (seq35153){
return shadow.markup.react.tfoot.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35153));
});


shadow.markup.react.th = (function shadow$markup$react$th(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35477 = arguments.length;
var i__6406__auto___35478 = (0);
while(true){
if((i__6406__auto___35478 < len__6405__auto___35477)){
args__6412__auto__.push((arguments[i__6406__auto___35478]));

var G__35479 = (i__6406__auto___35478 + (1));
i__6406__auto___35478 = G__35479;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.th.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.th.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("th",args__35034__auto__);
});

shadow.markup.react.th.cljs$lang$maxFixedArity = (0);

shadow.markup.react.th.cljs$lang$applyTo = (function (seq35154){
return shadow.markup.react.th.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35154));
});


shadow.markup.react.thead = (function shadow$markup$react$thead(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35480 = arguments.length;
var i__6406__auto___35481 = (0);
while(true){
if((i__6406__auto___35481 < len__6405__auto___35480)){
args__6412__auto__.push((arguments[i__6406__auto___35481]));

var G__35482 = (i__6406__auto___35481 + (1));
i__6406__auto___35481 = G__35482;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("thead",args__35034__auto__);
});

shadow.markup.react.thead.cljs$lang$maxFixedArity = (0);

shadow.markup.react.thead.cljs$lang$applyTo = (function (seq35155){
return shadow.markup.react.thead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35155));
});


shadow.markup.react.time = (function shadow$markup$react$time(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35483 = arguments.length;
var i__6406__auto___35484 = (0);
while(true){
if((i__6406__auto___35484 < len__6405__auto___35483)){
args__6412__auto__.push((arguments[i__6406__auto___35484]));

var G__35485 = (i__6406__auto___35484 + (1));
i__6406__auto___35484 = G__35485;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.time.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.time.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("time",args__35034__auto__);
});

shadow.markup.react.time.cljs$lang$maxFixedArity = (0);

shadow.markup.react.time.cljs$lang$applyTo = (function (seq35156){
return shadow.markup.react.time.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35156));
});


shadow.markup.react.title = (function shadow$markup$react$title(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35486 = arguments.length;
var i__6406__auto___35487 = (0);
while(true){
if((i__6406__auto___35487 < len__6405__auto___35486)){
args__6412__auto__.push((arguments[i__6406__auto___35487]));

var G__35488 = (i__6406__auto___35487 + (1));
i__6406__auto___35487 = G__35488;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.title.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.title.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("title",args__35034__auto__);
});

shadow.markup.react.title.cljs$lang$maxFixedArity = (0);

shadow.markup.react.title.cljs$lang$applyTo = (function (seq35157){
return shadow.markup.react.title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35157));
});


shadow.markup.react.tr = (function shadow$markup$react$tr(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35489 = arguments.length;
var i__6406__auto___35490 = (0);
while(true){
if((i__6406__auto___35490 < len__6405__auto___35489)){
args__6412__auto__.push((arguments[i__6406__auto___35490]));

var G__35491 = (i__6406__auto___35490 + (1));
i__6406__auto___35490 = G__35491;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("tr",args__35034__auto__);
});

shadow.markup.react.tr.cljs$lang$maxFixedArity = (0);

shadow.markup.react.tr.cljs$lang$applyTo = (function (seq35158){
return shadow.markup.react.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35158));
});


shadow.markup.react.track = (function shadow$markup$react$track(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35492 = arguments.length;
var i__6406__auto___35493 = (0);
while(true){
if((i__6406__auto___35493 < len__6405__auto___35492)){
args__6412__auto__.push((arguments[i__6406__auto___35493]));

var G__35494 = (i__6406__auto___35493 + (1));
i__6406__auto___35493 = G__35494;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.track.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.track.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("track",args__35034__auto__);
});

shadow.markup.react.track.cljs$lang$maxFixedArity = (0);

shadow.markup.react.track.cljs$lang$applyTo = (function (seq35159){
return shadow.markup.react.track.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35159));
});


shadow.markup.react.u = (function shadow$markup$react$u(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35495 = arguments.length;
var i__6406__auto___35496 = (0);
while(true){
if((i__6406__auto___35496 < len__6405__auto___35495)){
args__6412__auto__.push((arguments[i__6406__auto___35496]));

var G__35497 = (i__6406__auto___35496 + (1));
i__6406__auto___35496 = G__35497;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.u.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.u.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("u",args__35034__auto__);
});

shadow.markup.react.u.cljs$lang$maxFixedArity = (0);

shadow.markup.react.u.cljs$lang$applyTo = (function (seq35160){
return shadow.markup.react.u.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35160));
});


shadow.markup.react.ul = (function shadow$markup$react$ul(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35498 = arguments.length;
var i__6406__auto___35499 = (0);
while(true){
if((i__6406__auto___35499 < len__6405__auto___35498)){
args__6412__auto__.push((arguments[i__6406__auto___35499]));

var G__35500 = (i__6406__auto___35499 + (1));
i__6406__auto___35499 = G__35500;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("ul",args__35034__auto__);
});

shadow.markup.react.ul.cljs$lang$maxFixedArity = (0);

shadow.markup.react.ul.cljs$lang$applyTo = (function (seq35161){
return shadow.markup.react.ul.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35161));
});


shadow.markup.react.var$ = (function shadow$markup$react$var(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35501 = arguments.length;
var i__6406__auto___35502 = (0);
while(true){
if((i__6406__auto___35502 < len__6405__auto___35501)){
args__6412__auto__.push((arguments[i__6406__auto___35502]));

var G__35503 = (i__6406__auto___35502 + (1));
i__6406__auto___35502 = G__35503;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("var",args__35034__auto__);
});

shadow.markup.react.var$.cljs$lang$maxFixedArity = (0);

shadow.markup.react.var$.cljs$lang$applyTo = (function (seq35162){
return shadow.markup.react.var$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35162));
});


shadow.markup.react.video = (function shadow$markup$react$video(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35504 = arguments.length;
var i__6406__auto___35505 = (0);
while(true){
if((i__6406__auto___35505 < len__6405__auto___35504)){
args__6412__auto__.push((arguments[i__6406__auto___35505]));

var G__35506 = (i__6406__auto___35505 + (1));
i__6406__auto___35505 = G__35506;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.video.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.video.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("video",args__35034__auto__);
});

shadow.markup.react.video.cljs$lang$maxFixedArity = (0);

shadow.markup.react.video.cljs$lang$applyTo = (function (seq35163){
return shadow.markup.react.video.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35163));
});


shadow.markup.react.wbr = (function shadow$markup$react$wbr(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35507 = arguments.length;
var i__6406__auto___35508 = (0);
while(true){
if((i__6406__auto___35508 < len__6405__auto___35507)){
args__6412__auto__.push((arguments[i__6406__auto___35508]));

var G__35509 = (i__6406__auto___35508 + (1));
i__6406__auto___35508 = G__35509;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("wbr",args__35034__auto__);
});

shadow.markup.react.wbr.cljs$lang$maxFixedArity = (0);

shadow.markup.react.wbr.cljs$lang$applyTo = (function (seq35164){
return shadow.markup.react.wbr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35164));
});


shadow.markup.react.circle = (function shadow$markup$react$circle(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35510 = arguments.length;
var i__6406__auto___35511 = (0);
while(true){
if((i__6406__auto___35511 < len__6405__auto___35510)){
args__6412__auto__.push((arguments[i__6406__auto___35511]));

var G__35512 = (i__6406__auto___35511 + (1));
i__6406__auto___35511 = G__35512;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("circle",args__35034__auto__);
});

shadow.markup.react.circle.cljs$lang$maxFixedArity = (0);

shadow.markup.react.circle.cljs$lang$applyTo = (function (seq35165){
return shadow.markup.react.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35165));
});


shadow.markup.react.ellipse = (function shadow$markup$react$ellipse(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35513 = arguments.length;
var i__6406__auto___35514 = (0);
while(true){
if((i__6406__auto___35514 < len__6405__auto___35513)){
args__6412__auto__.push((arguments[i__6406__auto___35514]));

var G__35515 = (i__6406__auto___35514 + (1));
i__6406__auto___35514 = G__35515;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("ellipse",args__35034__auto__);
});

shadow.markup.react.ellipse.cljs$lang$maxFixedArity = (0);

shadow.markup.react.ellipse.cljs$lang$applyTo = (function (seq35166){
return shadow.markup.react.ellipse.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35166));
});


shadow.markup.react.g = (function shadow$markup$react$g(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35516 = arguments.length;
var i__6406__auto___35517 = (0);
while(true){
if((i__6406__auto___35517 < len__6405__auto___35516)){
args__6412__auto__.push((arguments[i__6406__auto___35517]));

var G__35518 = (i__6406__auto___35517 + (1));
i__6406__auto___35517 = G__35518;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.g.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.g.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("g",args__35034__auto__);
});

shadow.markup.react.g.cljs$lang$maxFixedArity = (0);

shadow.markup.react.g.cljs$lang$applyTo = (function (seq35167){
return shadow.markup.react.g.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35167));
});


shadow.markup.react.line = (function shadow$markup$react$line(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35519 = arguments.length;
var i__6406__auto___35520 = (0);
while(true){
if((i__6406__auto___35520 < len__6405__auto___35519)){
args__6412__auto__.push((arguments[i__6406__auto___35520]));

var G__35521 = (i__6406__auto___35520 + (1));
i__6406__auto___35520 = G__35521;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.line.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.line.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("line",args__35034__auto__);
});

shadow.markup.react.line.cljs$lang$maxFixedArity = (0);

shadow.markup.react.line.cljs$lang$applyTo = (function (seq35168){
return shadow.markup.react.line.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35168));
});


shadow.markup.react.path = (function shadow$markup$react$path(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35522 = arguments.length;
var i__6406__auto___35523 = (0);
while(true){
if((i__6406__auto___35523 < len__6405__auto___35522)){
args__6412__auto__.push((arguments[i__6406__auto___35523]));

var G__35524 = (i__6406__auto___35523 + (1));
i__6406__auto___35523 = G__35524;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.path.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.path.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("path",args__35034__auto__);
});

shadow.markup.react.path.cljs$lang$maxFixedArity = (0);

shadow.markup.react.path.cljs$lang$applyTo = (function (seq35169){
return shadow.markup.react.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35169));
});


shadow.markup.react.polyline = (function shadow$markup$react$polyline(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35525 = arguments.length;
var i__6406__auto___35526 = (0);
while(true){
if((i__6406__auto___35526 < len__6405__auto___35525)){
args__6412__auto__.push((arguments[i__6406__auto___35526]));

var G__35527 = (i__6406__auto___35526 + (1));
i__6406__auto___35526 = G__35527;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("polyline",args__35034__auto__);
});

shadow.markup.react.polyline.cljs$lang$maxFixedArity = (0);

shadow.markup.react.polyline.cljs$lang$applyTo = (function (seq35170){
return shadow.markup.react.polyline.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35170));
});


shadow.markup.react.rect = (function shadow$markup$react$rect(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35528 = arguments.length;
var i__6406__auto___35529 = (0);
while(true){
if((i__6406__auto___35529 < len__6405__auto___35528)){
args__6412__auto__.push((arguments[i__6406__auto___35529]));

var G__35530 = (i__6406__auto___35529 + (1));
i__6406__auto___35529 = G__35530;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("rect",args__35034__auto__);
});

shadow.markup.react.rect.cljs$lang$maxFixedArity = (0);

shadow.markup.react.rect.cljs$lang$applyTo = (function (seq35171){
return shadow.markup.react.rect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35171));
});


shadow.markup.react.svg = (function shadow$markup$react$svg(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35531 = arguments.length;
var i__6406__auto___35532 = (0);
while(true){
if((i__6406__auto___35532 < len__6405__auto___35531)){
args__6412__auto__.push((arguments[i__6406__auto___35532]));

var G__35533 = (i__6406__auto___35532 + (1));
i__6406__auto___35532 = G__35533;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("svg",args__35034__auto__);
});

shadow.markup.react.svg.cljs$lang$maxFixedArity = (0);

shadow.markup.react.svg.cljs$lang$applyTo = (function (seq35172){
return shadow.markup.react.svg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35172));
});


shadow.markup.react.text = (function shadow$markup$react$text(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35534 = arguments.length;
var i__6406__auto___35535 = (0);
while(true){
if((i__6406__auto___35535 < len__6405__auto___35534)){
args__6412__auto__.push((arguments[i__6406__auto___35535]));

var G__35536 = (i__6406__auto___35535 + (1));
i__6406__auto___35535 = G__35536;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.text.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.text.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("text",args__35034__auto__);
});

shadow.markup.react.text.cljs$lang$maxFixedArity = (0);

shadow.markup.react.text.cljs$lang$applyTo = (function (seq35173){
return shadow.markup.react.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35173));
});


shadow.markup.react.defs = (function shadow$markup$react$defs(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35537 = arguments.length;
var i__6406__auto___35538 = (0);
while(true){
if((i__6406__auto___35538 < len__6405__auto___35537)){
args__6412__auto__.push((arguments[i__6406__auto___35538]));

var G__35539 = (i__6406__auto___35538 + (1));
i__6406__auto___35538 = G__35539;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("defs",args__35034__auto__);
});

shadow.markup.react.defs.cljs$lang$maxFixedArity = (0);

shadow.markup.react.defs.cljs$lang$applyTo = (function (seq35174){
return shadow.markup.react.defs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35174));
});


shadow.markup.react.linearGradient = (function shadow$markup$react$linearGradient(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35540 = arguments.length;
var i__6406__auto___35541 = (0);
while(true){
if((i__6406__auto___35541 < len__6405__auto___35540)){
args__6412__auto__.push((arguments[i__6406__auto___35541]));

var G__35542 = (i__6406__auto___35541 + (1));
i__6406__auto___35541 = G__35542;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("linearGradient",args__35034__auto__);
});

shadow.markup.react.linearGradient.cljs$lang$maxFixedArity = (0);

shadow.markup.react.linearGradient.cljs$lang$applyTo = (function (seq35175){
return shadow.markup.react.linearGradient.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35175));
});


shadow.markup.react.polygon = (function shadow$markup$react$polygon(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35543 = arguments.length;
var i__6406__auto___35544 = (0);
while(true){
if((i__6406__auto___35544 < len__6405__auto___35543)){
args__6412__auto__.push((arguments[i__6406__auto___35544]));

var G__35545 = (i__6406__auto___35544 + (1));
i__6406__auto___35544 = G__35545;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("polygon",args__35034__auto__);
});

shadow.markup.react.polygon.cljs$lang$maxFixedArity = (0);

shadow.markup.react.polygon.cljs$lang$applyTo = (function (seq35176){
return shadow.markup.react.polygon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35176));
});


shadow.markup.react.radialGradient = (function shadow$markup$react$radialGradient(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35546 = arguments.length;
var i__6406__auto___35547 = (0);
while(true){
if((i__6406__auto___35547 < len__6405__auto___35546)){
args__6412__auto__.push((arguments[i__6406__auto___35547]));

var G__35548 = (i__6406__auto___35547 + (1));
i__6406__auto___35547 = G__35548;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("radialGradient",args__35034__auto__);
});

shadow.markup.react.radialGradient.cljs$lang$maxFixedArity = (0);

shadow.markup.react.radialGradient.cljs$lang$applyTo = (function (seq35177){
return shadow.markup.react.radialGradient.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35177));
});


shadow.markup.react.stop = (function shadow$markup$react$stop(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35549 = arguments.length;
var i__6406__auto___35550 = (0);
while(true){
if((i__6406__auto___35550 < len__6405__auto___35549)){
args__6412__auto__.push((arguments[i__6406__auto___35550]));

var G__35551 = (i__6406__auto___35550 + (1));
i__6406__auto___35550 = G__35551;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("stop",args__35034__auto__);
});

shadow.markup.react.stop.cljs$lang$maxFixedArity = (0);

shadow.markup.react.stop.cljs$lang$applyTo = (function (seq35178){
return shadow.markup.react.stop.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35178));
});


shadow.markup.react.tspan = (function shadow$markup$react$tspan(var_args){
var args__6412__auto__ = [];
var len__6405__auto___35552 = arguments.length;
var i__6406__auto___35553 = (0);
while(true){
if((i__6406__auto___35553 < len__6405__auto___35552)){
args__6412__auto__.push((arguments[i__6406__auto___35553]));

var G__35554 = (i__6406__auto___35553 + (1));
i__6406__auto___35553 = G__35554;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((0) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__6413__auto__);
});

shadow.markup.react.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args__35034__auto__){
return shadow.markup.react.impl.interop.create_element("tspan",args__35034__auto__);
});

shadow.markup.react.tspan.cljs$lang$maxFixedArity = (0);

shadow.markup.react.tspan.cljs$lang$applyTo = (function (seq35179){
return shadow.markup.react.tspan.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35179));
});


module.exports = shadow.markup.react;

//# sourceMappingURL=shadow.markup.react.js.map
