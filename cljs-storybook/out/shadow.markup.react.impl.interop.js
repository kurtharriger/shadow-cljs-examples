var $CLJS = require("./cljs_env");
require("./cljs.core.js");
require("./goog.object.object.js");
require("./shadow.js.shim.module$react.js");
var cljs=$CLJS.cljs;
var shadow=$CLJS.shadow;
var goog=$CLJS.goog;

goog.dependencies_.written["shadow.markup.react.impl.interop.js"] = true;

goog.provide('shadow.markup.react.impl.interop');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('shadow.js.shim.module$react');
shadow.markup.react.impl.interop.element_marker = (function (){var G__29332 = shadow.js.shim.module$react.createElement("div",null);
var G__29333 = "$$typeof";
return goog.object.get(G__29332,G__29333);
})();
shadow.markup.react.impl.interop.element_QMARK_ = (function shadow$markup$react$impl$interop$element_QMARK_(x){
return (cljs.core.object_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.markup.react.impl.interop.element_marker,goog.object.get(x,"$$typeof")));
});
shadow.markup.react.impl.interop.convert_props = (function shadow$markup$react$impl$interop$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
shadow.markup.react.impl.interop.create_element_STAR_ = (function shadow$markup$react$impl$interop$create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return shadow.js.shim.module$react.createElement.apply(null,arr);
});
shadow.markup.react.impl.interop.arr_append_STAR_ = (function shadow$markup$react$impl$interop$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
shadow.markup.react.impl.interop.arr_append = (function shadow$markup$react$impl$interop$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.markup.react.impl.interop.arr_append_STAR_,arr,tail);
});
shadow.markup.react.impl.interop.create_element = (function shadow$markup$react$impl$interop$create_element(type,args){
var vec__29340 = args;
var seq__29341 = cljs.core.seq(vec__29340);
var first__29342 = cljs.core.first(seq__29341);
var seq__29341__$1 = cljs.core.next(seq__29341);
var head = first__29342;
var tail = seq__29341__$1;
if(cljs.core.map_QMARK_(head)){
return shadow.markup.react.impl.interop.create_element_STAR_((function (){var G__29343 = [type,shadow.markup.react.impl.interop.convert_props(head)];
shadow.markup.react.impl.interop.arr_append(G__29343,tail);

return G__29343;
})());
} else {
if((head == null)){
return shadow.markup.react.impl.interop.create_element_STAR_((function (){var G__29344 = [type,null];
shadow.markup.react.impl.interop.arr_append(G__29344,tail);

return G__29344;
})());
} else {
if(cljs.core.truth_(shadow.markup.react.impl.interop.element_QMARK_(head))){
return shadow.markup.react.impl.interop.create_element_STAR_((function (){var G__29345 = [type,null];
shadow.markup.react.impl.interop.arr_append(G__29345,args);

return G__29345;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return shadow.markup.react.impl.interop.create_element_STAR_((function (){var G__29346 = [type,head];
shadow.markup.react.impl.interop.arr_append(G__29346,tail);

return G__29346;
})());
} else {
return shadow.markup.react.impl.interop.create_element_STAR_((function (){var G__29347 = [type,null];
shadow.markup.react.impl.interop.arr_append(G__29347,args);

return G__29347;
})());

}
}
}
}
});

module.exports = shadow.markup.react.impl.interop;

//# sourceMappingURL=shadow.markup.react.impl.interop.js.map
