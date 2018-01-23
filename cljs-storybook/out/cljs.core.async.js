var $CLJS = require("./cljs_env");
require("./cljs.core.js");
require("./cljs.core.async.impl.protocols.js");
require("./cljs.core.async.impl.channels.js");
require("./cljs.core.async.impl.buffers.js");
require("./cljs.core.async.impl.timers.js");
require("./cljs.core.async.impl.dispatch.js");
require("./cljs.core.async.impl.ioc_helpers.js");
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;

goog.dependencies_.written["cljs.core.async.js"] = true;

goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30879 = arguments.length;
switch (G__30879) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30880 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30880 = (function (f,blockable,meta30881){
this.f = f;
this.blockable = blockable;
this.meta30881 = meta30881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30882,meta30881__$1){
var self__ = this;
var _30882__$1 = this;
return (new cljs.core.async.t_cljs$core$async30880(self__.f,self__.blockable,meta30881__$1));
});

cljs.core.async.t_cljs$core$async30880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30882){
var self__ = this;
var _30882__$1 = this;
return self__.meta30881;
});

cljs.core.async.t_cljs$core$async30880.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30880.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30880.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30880.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30881","meta30881",553961452,null)], null);
});

cljs.core.async.t_cljs$core$async30880.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30880.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30880";

cljs.core.async.t_cljs$core$async30880.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async30880");
});

cljs.core.async.__GT_t_cljs$core$async30880 = (function cljs$core$async$__GT_t_cljs$core$async30880(f__$1,blockable__$1,meta30881){
return (new cljs.core.async.t_cljs$core$async30880(f__$1,blockable__$1,meta30881));
});

}

return (new cljs.core.async.t_cljs$core$async30880(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30886 = arguments.length;
switch (G__30886) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30889 = arguments.length;
switch (G__30889) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30892 = arguments.length;
switch (G__30892) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_30894 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30894) : fn1.call(null,val_30894));
} else {
cljs.core.async.impl.dispatch.run(((function (val_30894,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30894) : fn1.call(null,val_30894));
});})(val_30894,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30896 = arguments.length;
switch (G__30896) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__6171__auto___30898 = n;
var x_30899 = (0);
while(true){
if((x_30899 < n__6171__auto___30898)){
(a[x_30899] = (0));

var G__30900 = (x_30899 + (1));
x_30899 = G__30900;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__30901 = (i + (1));
i = G__30901;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async30902 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30902 = (function (flag,meta30903){
this.flag = flag;
this.meta30903 = meta30903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30904,meta30903__$1){
var self__ = this;
var _30904__$1 = this;
return (new cljs.core.async.t_cljs$core$async30902(self__.flag,meta30903__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30902.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30904){
var self__ = this;
var _30904__$1 = this;
return self__.meta30903;
});})(flag))
;

cljs.core.async.t_cljs$core$async30902.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30902.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30902.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30902.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30902.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30903","meta30903",740529658,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30902.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30902";

cljs.core.async.t_cljs$core$async30902.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async30902");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30902 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30902(flag__$1,meta30903){
return (new cljs.core.async.t_cljs$core$async30902(flag__$1,meta30903));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30902(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30905 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30905 = (function (flag,cb,meta30906){
this.flag = flag;
this.cb = cb;
this.meta30906 = meta30906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30907,meta30906__$1){
var self__ = this;
var _30907__$1 = this;
return (new cljs.core.async.t_cljs$core$async30905(self__.flag,self__.cb,meta30906__$1));
});

cljs.core.async.t_cljs$core$async30905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30907){
var self__ = this;
var _30907__$1 = this;
return self__.meta30906;
});

cljs.core.async.t_cljs$core$async30905.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30905.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async30905.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30905.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30906","meta30906",-429052717,null)], null);
});

cljs.core.async.t_cljs$core$async30905.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30905";

cljs.core.async.t_cljs$core$async30905.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async30905");
});

cljs.core.async.__GT_t_cljs$core$async30905 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30905(flag__$1,cb__$1,meta30906){
return (new cljs.core.async.t_cljs$core$async30905(flag__$1,cb__$1,meta30906));
});

}

return (new cljs.core.async.t_cljs$core$async30905(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30908_SHARP_){
var G__30910 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30908_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30910) : fret.call(null,G__30910));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30909_SHARP_){
var G__30911 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30909_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30911) : fret.call(null,G__30911));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5126__auto__ = wport;
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30912 = (i + (1));
i = G__30912;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5126__auto__ = ret;
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__5114__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__5114__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__5114__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__6412__auto__ = [];
var len__6405__auto___30918 = arguments.length;
var i__6406__auto___30919 = (0);
while(true){
if((i__6406__auto___30919 < len__6405__auto___30918)){
args__6412__auto__.push((arguments[i__6406__auto___30919]));

var G__30920 = (i__6406__auto___30919 + (1));
i__6406__auto___30919 = G__30920;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((1) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6413__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30915){
var map__30916 = p__30915;
var map__30916__$1 = ((((!((map__30916 == null)))?((((map__30916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30916):map__30916);
var opts = map__30916__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30913){
var G__30914 = cljs.core.first(seq30913);
var seq30913__$1 = cljs.core.next(seq30913);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30914,seq30913__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30922 = arguments.length;
switch (G__30922) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30821__auto___30968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30821__auto___30968){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (c__30821__auto___30968){
return (function (state_30946){
var state_val_30947 = (state_30946[(1)]);
if((state_val_30947 === (7))){
var inst_30942 = (state_30946[(2)]);
var state_30946__$1 = state_30946;
var statearr_30948_30969 = state_30946__$1;
(statearr_30948_30969[(2)] = inst_30942);

(statearr_30948_30969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (1))){
var state_30946__$1 = state_30946;
var statearr_30949_30970 = state_30946__$1;
(statearr_30949_30970[(2)] = null);

(statearr_30949_30970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (4))){
var inst_30925 = (state_30946[(7)]);
var inst_30925__$1 = (state_30946[(2)]);
var inst_30926 = (inst_30925__$1 == null);
var state_30946__$1 = (function (){var statearr_30950 = state_30946;
(statearr_30950[(7)] = inst_30925__$1);

return statearr_30950;
})();
if(cljs.core.truth_(inst_30926)){
var statearr_30951_30971 = state_30946__$1;
(statearr_30951_30971[(1)] = (5));

} else {
var statearr_30952_30972 = state_30946__$1;
(statearr_30952_30972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (13))){
var state_30946__$1 = state_30946;
var statearr_30953_30973 = state_30946__$1;
(statearr_30953_30973[(2)] = null);

(statearr_30953_30973[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (6))){
var inst_30925 = (state_30946[(7)]);
var state_30946__$1 = state_30946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30946__$1,(11),to,inst_30925);
} else {
if((state_val_30947 === (3))){
var inst_30944 = (state_30946[(2)]);
var state_30946__$1 = state_30946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30946__$1,inst_30944);
} else {
if((state_val_30947 === (12))){
var state_30946__$1 = state_30946;
var statearr_30954_30974 = state_30946__$1;
(statearr_30954_30974[(2)] = null);

(statearr_30954_30974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (2))){
var state_30946__$1 = state_30946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30946__$1,(4),from);
} else {
if((state_val_30947 === (11))){
var inst_30935 = (state_30946[(2)]);
var state_30946__$1 = state_30946;
if(cljs.core.truth_(inst_30935)){
var statearr_30955_30975 = state_30946__$1;
(statearr_30955_30975[(1)] = (12));

} else {
var statearr_30956_30976 = state_30946__$1;
(statearr_30956_30976[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (9))){
var state_30946__$1 = state_30946;
var statearr_30957_30977 = state_30946__$1;
(statearr_30957_30977[(2)] = null);

(statearr_30957_30977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (5))){
var state_30946__$1 = state_30946;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30958_30978 = state_30946__$1;
(statearr_30958_30978[(1)] = (8));

} else {
var statearr_30959_30979 = state_30946__$1;
(statearr_30959_30979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (14))){
var inst_30940 = (state_30946[(2)]);
var state_30946__$1 = state_30946;
var statearr_30960_30980 = state_30946__$1;
(statearr_30960_30980[(2)] = inst_30940);

(statearr_30960_30980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (10))){
var inst_30932 = (state_30946[(2)]);
var state_30946__$1 = state_30946;
var statearr_30961_30981 = state_30946__$1;
(statearr_30961_30981[(2)] = inst_30932);

(statearr_30961_30981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (8))){
var inst_30929 = cljs.core.async.close_BANG_(to);
var state_30946__$1 = state_30946;
var statearr_30962_30982 = state_30946__$1;
(statearr_30962_30982[(2)] = inst_30929);

(statearr_30962_30982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30821__auto___30968))
;
return ((function (switch__30621__auto__,c__30821__auto___30968){
return (function() {
var cljs$core$async$state_machine__30622__auto__ = null;
var cljs$core$async$state_machine__30622__auto____0 = (function (){
var statearr_30963 = [null,null,null,null,null,null,null,null];
(statearr_30963[(0)] = cljs$core$async$state_machine__30622__auto__);

(statearr_30963[(1)] = (1));

return statearr_30963;
});
var cljs$core$async$state_machine__30622__auto____1 = (function (state_30946){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_30946);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e30964){if((e30964 instanceof Object)){
var ex__30625__auto__ = e30964;
var statearr_30965_30983 = state_30946;
(statearr_30965_30983[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30984 = state_30946;
state_30946 = G__30984;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$state_machine__30622__auto__ = function(state_30946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30622__auto____1.call(this,state_30946);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30622__auto____0;
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30622__auto____1;
return cljs$core$async$state_machine__30622__auto__;
})()
;})(switch__30621__auto__,c__30821__auto___30968))
})();
var state__30823__auto__ = (function (){var statearr_30966 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_30966[(6)] = c__30821__auto___30968);

return statearr_30966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(c__30821__auto___30968))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__30985){
var vec__30986 = p__30985;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30986,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30986,(1),null);
var job = vec__30986;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30821__auto___31157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30821__auto___31157,res,vec__30986,v,p,job,jobs,results){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (c__30821__auto___31157,res,vec__30986,v,p,job,jobs,results){
return (function (state_30993){
var state_val_30994 = (state_30993[(1)]);
if((state_val_30994 === (1))){
var state_30993__$1 = state_30993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30993__$1,(2),res,v);
} else {
if((state_val_30994 === (2))){
var inst_30990 = (state_30993[(2)]);
var inst_30991 = cljs.core.async.close_BANG_(res);
var state_30993__$1 = (function (){var statearr_30995 = state_30993;
(statearr_30995[(7)] = inst_30990);

return statearr_30995;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30993__$1,inst_30991);
} else {
return null;
}
}
});})(c__30821__auto___31157,res,vec__30986,v,p,job,jobs,results))
;
return ((function (switch__30621__auto__,c__30821__auto___31157,res,vec__30986,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____0 = (function (){
var statearr_30996 = [null,null,null,null,null,null,null,null];
(statearr_30996[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__);

(statearr_30996[(1)] = (1));

return statearr_30996;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____1 = (function (state_30993){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_30993);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e30997){if((e30997 instanceof Object)){
var ex__30625__auto__ = e30997;
var statearr_30998_31158 = state_30993;
(statearr_30998_31158[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30997;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31159 = state_30993;
state_30993 = G__31159;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__ = function(state_30993){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____1.call(this,state_30993);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__;
})()
;})(switch__30621__auto__,c__30821__auto___31157,res,vec__30986,v,p,job,jobs,results))
})();
var state__30823__auto__ = (function (){var statearr_30999 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_30999[(6)] = c__30821__auto___31157);

return statearr_30999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(c__30821__auto___31157,res,vec__30986,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31000){
var vec__31001 = p__31000;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31001,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31001,(1),null);
var job = vec__31001;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__6171__auto___31160 = n;
var __31161 = (0);
while(true){
if((__31161 < n__6171__auto___31160)){
var G__31004_31162 = type;
var G__31004_31163__$1 = (((G__31004_31162 instanceof cljs.core.Keyword))?G__31004_31162.fqn:null);
switch (G__31004_31163__$1) {
case "compute":
var c__30821__auto___31165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31161,c__30821__auto___31165,G__31004_31162,G__31004_31163__$1,n__6171__auto___31160,jobs,results,process,async){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (__31161,c__30821__auto___31165,G__31004_31162,G__31004_31163__$1,n__6171__auto___31160,jobs,results,process,async){
return (function (state_31017){
var state_val_31018 = (state_31017[(1)]);
if((state_val_31018 === (1))){
var state_31017__$1 = state_31017;
var statearr_31019_31166 = state_31017__$1;
(statearr_31019_31166[(2)] = null);

(statearr_31019_31166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (2))){
var state_31017__$1 = state_31017;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31017__$1,(4),jobs);
} else {
if((state_val_31018 === (3))){
var inst_31015 = (state_31017[(2)]);
var state_31017__$1 = state_31017;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31017__$1,inst_31015);
} else {
if((state_val_31018 === (4))){
var inst_31007 = (state_31017[(2)]);
var inst_31008 = process(inst_31007);
var state_31017__$1 = state_31017;
if(cljs.core.truth_(inst_31008)){
var statearr_31020_31167 = state_31017__$1;
(statearr_31020_31167[(1)] = (5));

} else {
var statearr_31021_31168 = state_31017__$1;
(statearr_31021_31168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (5))){
var state_31017__$1 = state_31017;
var statearr_31022_31169 = state_31017__$1;
(statearr_31022_31169[(2)] = null);

(statearr_31022_31169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (6))){
var state_31017__$1 = state_31017;
var statearr_31023_31170 = state_31017__$1;
(statearr_31023_31170[(2)] = null);

(statearr_31023_31170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (7))){
var inst_31013 = (state_31017[(2)]);
var state_31017__$1 = state_31017;
var statearr_31024_31171 = state_31017__$1;
(statearr_31024_31171[(2)] = inst_31013);

(statearr_31024_31171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31161,c__30821__auto___31165,G__31004_31162,G__31004_31163__$1,n__6171__auto___31160,jobs,results,process,async))
;
return ((function (__31161,switch__30621__auto__,c__30821__auto___31165,G__31004_31162,G__31004_31163__$1,n__6171__auto___31160,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____0 = (function (){
var statearr_31025 = [null,null,null,null,null,null,null];
(statearr_31025[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__);

(statearr_31025[(1)] = (1));

return statearr_31025;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____1 = (function (state_31017){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_31017);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e31026){if((e31026 instanceof Object)){
var ex__30625__auto__ = e31026;
var statearr_31027_31172 = state_31017;
(statearr_31027_31172[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31026;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31173 = state_31017;
state_31017 = G__31173;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__ = function(state_31017){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____1.call(this,state_31017);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__;
})()
;})(__31161,switch__30621__auto__,c__30821__auto___31165,G__31004_31162,G__31004_31163__$1,n__6171__auto___31160,jobs,results,process,async))
})();
var state__30823__auto__ = (function (){var statearr_31028 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_31028[(6)] = c__30821__auto___31165);

return statearr_31028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(__31161,c__30821__auto___31165,G__31004_31162,G__31004_31163__$1,n__6171__auto___31160,jobs,results,process,async))
);


break;
case "async":
var c__30821__auto___31174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31161,c__30821__auto___31174,G__31004_31162,G__31004_31163__$1,n__6171__auto___31160,jobs,results,process,async){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (__31161,c__30821__auto___31174,G__31004_31162,G__31004_31163__$1,n__6171__auto___31160,jobs,results,process,async){
return (function (state_31041){
var state_val_31042 = (state_31041[(1)]);
if((state_val_31042 === (1))){
var state_31041__$1 = state_31041;
var statearr_31043_31175 = state_31041__$1;
(statearr_31043_31175[(2)] = null);

(statearr_31043_31175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (2))){
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31041__$1,(4),jobs);
} else {
if((state_val_31042 === (3))){
var inst_31039 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31041__$1,inst_31039);
} else {
if((state_val_31042 === (4))){
var inst_31031 = (state_31041[(2)]);
var inst_31032 = async(inst_31031);
var state_31041__$1 = state_31041;
if(cljs.core.truth_(inst_31032)){
var statearr_31044_31176 = state_31041__$1;
(statearr_31044_31176[(1)] = (5));

} else {
var statearr_31045_31177 = state_31041__$1;
(statearr_31045_31177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (5))){
var state_31041__$1 = state_31041;
var statearr_31046_31178 = state_31041__$1;
(statearr_31046_31178[(2)] = null);

(statearr_31046_31178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (6))){
var state_31041__$1 = state_31041;
var statearr_31047_31179 = state_31041__$1;
(statearr_31047_31179[(2)] = null);

(statearr_31047_31179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (7))){
var inst_31037 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31048_31180 = state_31041__$1;
(statearr_31048_31180[(2)] = inst_31037);

(statearr_31048_31180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31161,c__30821__auto___31174,G__31004_31162,G__31004_31163__$1,n__6171__auto___31160,jobs,results,process,async))
;
return ((function (__31161,switch__30621__auto__,c__30821__auto___31174,G__31004_31162,G__31004_31163__$1,n__6171__auto___31160,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____0 = (function (){
var statearr_31049 = [null,null,null,null,null,null,null];
(statearr_31049[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__);

(statearr_31049[(1)] = (1));

return statearr_31049;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____1 = (function (state_31041){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_31041);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e31050){if((e31050 instanceof Object)){
var ex__30625__auto__ = e31050;
var statearr_31051_31181 = state_31041;
(statearr_31051_31181[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31050;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31182 = state_31041;
state_31041 = G__31182;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__ = function(state_31041){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____1.call(this,state_31041);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__;
})()
;})(__31161,switch__30621__auto__,c__30821__auto___31174,G__31004_31162,G__31004_31163__$1,n__6171__auto___31160,jobs,results,process,async))
})();
var state__30823__auto__ = (function (){var statearr_31052 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_31052[(6)] = c__30821__auto___31174);

return statearr_31052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(__31161,c__30821__auto___31174,G__31004_31162,G__31004_31163__$1,n__6171__auto___31160,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31004_31163__$1)].join('')));

}

var G__31183 = (__31161 + (1));
__31161 = G__31183;
continue;
} else {
}
break;
}

var c__30821__auto___31184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30821__auto___31184,jobs,results,process,async){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (c__30821__auto___31184,jobs,results,process,async){
return (function (state_31074){
var state_val_31075 = (state_31074[(1)]);
if((state_val_31075 === (1))){
var state_31074__$1 = state_31074;
var statearr_31076_31185 = state_31074__$1;
(statearr_31076_31185[(2)] = null);

(statearr_31076_31185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31075 === (2))){
var state_31074__$1 = state_31074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31074__$1,(4),from);
} else {
if((state_val_31075 === (3))){
var inst_31072 = (state_31074[(2)]);
var state_31074__$1 = state_31074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31074__$1,inst_31072);
} else {
if((state_val_31075 === (4))){
var inst_31055 = (state_31074[(7)]);
var inst_31055__$1 = (state_31074[(2)]);
var inst_31056 = (inst_31055__$1 == null);
var state_31074__$1 = (function (){var statearr_31077 = state_31074;
(statearr_31077[(7)] = inst_31055__$1);

return statearr_31077;
})();
if(cljs.core.truth_(inst_31056)){
var statearr_31078_31186 = state_31074__$1;
(statearr_31078_31186[(1)] = (5));

} else {
var statearr_31079_31187 = state_31074__$1;
(statearr_31079_31187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31075 === (5))){
var inst_31058 = cljs.core.async.close_BANG_(jobs);
var state_31074__$1 = state_31074;
var statearr_31080_31188 = state_31074__$1;
(statearr_31080_31188[(2)] = inst_31058);

(statearr_31080_31188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31075 === (6))){
var inst_31060 = (state_31074[(8)]);
var inst_31055 = (state_31074[(7)]);
var inst_31060__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31061 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31062 = [inst_31055,inst_31060__$1];
var inst_31063 = (new cljs.core.PersistentVector(null,2,(5),inst_31061,inst_31062,null));
var state_31074__$1 = (function (){var statearr_31081 = state_31074;
(statearr_31081[(8)] = inst_31060__$1);

return statearr_31081;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31074__$1,(8),jobs,inst_31063);
} else {
if((state_val_31075 === (7))){
var inst_31070 = (state_31074[(2)]);
var state_31074__$1 = state_31074;
var statearr_31082_31189 = state_31074__$1;
(statearr_31082_31189[(2)] = inst_31070);

(statearr_31082_31189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31075 === (8))){
var inst_31060 = (state_31074[(8)]);
var inst_31065 = (state_31074[(2)]);
var state_31074__$1 = (function (){var statearr_31083 = state_31074;
(statearr_31083[(9)] = inst_31065);

return statearr_31083;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31074__$1,(9),results,inst_31060);
} else {
if((state_val_31075 === (9))){
var inst_31067 = (state_31074[(2)]);
var state_31074__$1 = (function (){var statearr_31084 = state_31074;
(statearr_31084[(10)] = inst_31067);

return statearr_31084;
})();
var statearr_31085_31190 = state_31074__$1;
(statearr_31085_31190[(2)] = null);

(statearr_31085_31190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__30821__auto___31184,jobs,results,process,async))
;
return ((function (switch__30621__auto__,c__30821__auto___31184,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____0 = (function (){
var statearr_31086 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31086[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__);

(statearr_31086[(1)] = (1));

return statearr_31086;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____1 = (function (state_31074){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_31074);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e31087){if((e31087 instanceof Object)){
var ex__30625__auto__ = e31087;
var statearr_31088_31191 = state_31074;
(statearr_31088_31191[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31087;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31192 = state_31074;
state_31074 = G__31192;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__ = function(state_31074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____1.call(this,state_31074);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__;
})()
;})(switch__30621__auto__,c__30821__auto___31184,jobs,results,process,async))
})();
var state__30823__auto__ = (function (){var statearr_31089 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_31089[(6)] = c__30821__auto___31184);

return statearr_31089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(c__30821__auto___31184,jobs,results,process,async))
);


var c__30821__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30821__auto__,jobs,results,process,async){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (c__30821__auto__,jobs,results,process,async){
return (function (state_31127){
var state_val_31128 = (state_31127[(1)]);
if((state_val_31128 === (7))){
var inst_31123 = (state_31127[(2)]);
var state_31127__$1 = state_31127;
var statearr_31129_31193 = state_31127__$1;
(statearr_31129_31193[(2)] = inst_31123);

(statearr_31129_31193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (20))){
var state_31127__$1 = state_31127;
var statearr_31130_31194 = state_31127__$1;
(statearr_31130_31194[(2)] = null);

(statearr_31130_31194[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (1))){
var state_31127__$1 = state_31127;
var statearr_31131_31195 = state_31127__$1;
(statearr_31131_31195[(2)] = null);

(statearr_31131_31195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (4))){
var inst_31092 = (state_31127[(7)]);
var inst_31092__$1 = (state_31127[(2)]);
var inst_31093 = (inst_31092__$1 == null);
var state_31127__$1 = (function (){var statearr_31132 = state_31127;
(statearr_31132[(7)] = inst_31092__$1);

return statearr_31132;
})();
if(cljs.core.truth_(inst_31093)){
var statearr_31133_31196 = state_31127__$1;
(statearr_31133_31196[(1)] = (5));

} else {
var statearr_31134_31197 = state_31127__$1;
(statearr_31134_31197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (15))){
var inst_31105 = (state_31127[(8)]);
var state_31127__$1 = state_31127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31127__$1,(18),to,inst_31105);
} else {
if((state_val_31128 === (21))){
var inst_31118 = (state_31127[(2)]);
var state_31127__$1 = state_31127;
var statearr_31135_31198 = state_31127__$1;
(statearr_31135_31198[(2)] = inst_31118);

(statearr_31135_31198[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (13))){
var inst_31120 = (state_31127[(2)]);
var state_31127__$1 = (function (){var statearr_31136 = state_31127;
(statearr_31136[(9)] = inst_31120);

return statearr_31136;
})();
var statearr_31137_31199 = state_31127__$1;
(statearr_31137_31199[(2)] = null);

(statearr_31137_31199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (6))){
var inst_31092 = (state_31127[(7)]);
var state_31127__$1 = state_31127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31127__$1,(11),inst_31092);
} else {
if((state_val_31128 === (17))){
var inst_31113 = (state_31127[(2)]);
var state_31127__$1 = state_31127;
if(cljs.core.truth_(inst_31113)){
var statearr_31138_31200 = state_31127__$1;
(statearr_31138_31200[(1)] = (19));

} else {
var statearr_31139_31201 = state_31127__$1;
(statearr_31139_31201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (3))){
var inst_31125 = (state_31127[(2)]);
var state_31127__$1 = state_31127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31127__$1,inst_31125);
} else {
if((state_val_31128 === (12))){
var inst_31102 = (state_31127[(10)]);
var state_31127__$1 = state_31127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31127__$1,(14),inst_31102);
} else {
if((state_val_31128 === (2))){
var state_31127__$1 = state_31127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31127__$1,(4),results);
} else {
if((state_val_31128 === (19))){
var state_31127__$1 = state_31127;
var statearr_31140_31202 = state_31127__$1;
(statearr_31140_31202[(2)] = null);

(statearr_31140_31202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (11))){
var inst_31102 = (state_31127[(2)]);
var state_31127__$1 = (function (){var statearr_31141 = state_31127;
(statearr_31141[(10)] = inst_31102);

return statearr_31141;
})();
var statearr_31142_31203 = state_31127__$1;
(statearr_31142_31203[(2)] = null);

(statearr_31142_31203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (9))){
var state_31127__$1 = state_31127;
var statearr_31143_31204 = state_31127__$1;
(statearr_31143_31204[(2)] = null);

(statearr_31143_31204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (5))){
var state_31127__$1 = state_31127;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31144_31205 = state_31127__$1;
(statearr_31144_31205[(1)] = (8));

} else {
var statearr_31145_31206 = state_31127__$1;
(statearr_31145_31206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (14))){
var inst_31107 = (state_31127[(11)]);
var inst_31105 = (state_31127[(8)]);
var inst_31105__$1 = (state_31127[(2)]);
var inst_31106 = (inst_31105__$1 == null);
var inst_31107__$1 = cljs.core.not(inst_31106);
var state_31127__$1 = (function (){var statearr_31146 = state_31127;
(statearr_31146[(11)] = inst_31107__$1);

(statearr_31146[(8)] = inst_31105__$1);

return statearr_31146;
})();
if(inst_31107__$1){
var statearr_31147_31207 = state_31127__$1;
(statearr_31147_31207[(1)] = (15));

} else {
var statearr_31148_31208 = state_31127__$1;
(statearr_31148_31208[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (16))){
var inst_31107 = (state_31127[(11)]);
var state_31127__$1 = state_31127;
var statearr_31149_31209 = state_31127__$1;
(statearr_31149_31209[(2)] = inst_31107);

(statearr_31149_31209[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (10))){
var inst_31099 = (state_31127[(2)]);
var state_31127__$1 = state_31127;
var statearr_31150_31210 = state_31127__$1;
(statearr_31150_31210[(2)] = inst_31099);

(statearr_31150_31210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (18))){
var inst_31110 = (state_31127[(2)]);
var state_31127__$1 = state_31127;
var statearr_31151_31211 = state_31127__$1;
(statearr_31151_31211[(2)] = inst_31110);

(statearr_31151_31211[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (8))){
var inst_31096 = cljs.core.async.close_BANG_(to);
var state_31127__$1 = state_31127;
var statearr_31152_31212 = state_31127__$1;
(statearr_31152_31212[(2)] = inst_31096);

(statearr_31152_31212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30821__auto__,jobs,results,process,async))
;
return ((function (switch__30621__auto__,c__30821__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____0 = (function (){
var statearr_31153 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31153[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__);

(statearr_31153[(1)] = (1));

return statearr_31153;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____1 = (function (state_31127){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_31127);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e31154){if((e31154 instanceof Object)){
var ex__30625__auto__ = e31154;
var statearr_31155_31213 = state_31127;
(statearr_31155_31213[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31154;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31214 = state_31127;
state_31127 = G__31214;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__ = function(state_31127){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____1.call(this,state_31127);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30622__auto__;
})()
;})(switch__30621__auto__,c__30821__auto__,jobs,results,process,async))
})();
var state__30823__auto__ = (function (){var statearr_31156 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_31156[(6)] = c__30821__auto__);

return statearr_31156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(c__30821__auto__,jobs,results,process,async))
);

return c__30821__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31216 = arguments.length;
switch (G__31216) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31219 = arguments.length;
switch (G__31219) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31222 = arguments.length;
switch (G__31222) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30821__auto___31271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30821__auto___31271,tc,fc){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (c__30821__auto___31271,tc,fc){
return (function (state_31248){
var state_val_31249 = (state_31248[(1)]);
if((state_val_31249 === (7))){
var inst_31244 = (state_31248[(2)]);
var state_31248__$1 = state_31248;
var statearr_31250_31272 = state_31248__$1;
(statearr_31250_31272[(2)] = inst_31244);

(statearr_31250_31272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31249 === (1))){
var state_31248__$1 = state_31248;
var statearr_31251_31273 = state_31248__$1;
(statearr_31251_31273[(2)] = null);

(statearr_31251_31273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31249 === (4))){
var inst_31225 = (state_31248[(7)]);
var inst_31225__$1 = (state_31248[(2)]);
var inst_31226 = (inst_31225__$1 == null);
var state_31248__$1 = (function (){var statearr_31252 = state_31248;
(statearr_31252[(7)] = inst_31225__$1);

return statearr_31252;
})();
if(cljs.core.truth_(inst_31226)){
var statearr_31253_31274 = state_31248__$1;
(statearr_31253_31274[(1)] = (5));

} else {
var statearr_31254_31275 = state_31248__$1;
(statearr_31254_31275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31249 === (13))){
var state_31248__$1 = state_31248;
var statearr_31255_31276 = state_31248__$1;
(statearr_31255_31276[(2)] = null);

(statearr_31255_31276[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31249 === (6))){
var inst_31225 = (state_31248[(7)]);
var inst_31231 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31225) : p.call(null,inst_31225));
var state_31248__$1 = state_31248;
if(cljs.core.truth_(inst_31231)){
var statearr_31256_31277 = state_31248__$1;
(statearr_31256_31277[(1)] = (9));

} else {
var statearr_31257_31278 = state_31248__$1;
(statearr_31257_31278[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31249 === (3))){
var inst_31246 = (state_31248[(2)]);
var state_31248__$1 = state_31248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31248__$1,inst_31246);
} else {
if((state_val_31249 === (12))){
var state_31248__$1 = state_31248;
var statearr_31258_31279 = state_31248__$1;
(statearr_31258_31279[(2)] = null);

(statearr_31258_31279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31249 === (2))){
var state_31248__$1 = state_31248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31248__$1,(4),ch);
} else {
if((state_val_31249 === (11))){
var inst_31225 = (state_31248[(7)]);
var inst_31235 = (state_31248[(2)]);
var state_31248__$1 = state_31248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31248__$1,(8),inst_31235,inst_31225);
} else {
if((state_val_31249 === (9))){
var state_31248__$1 = state_31248;
var statearr_31259_31280 = state_31248__$1;
(statearr_31259_31280[(2)] = tc);

(statearr_31259_31280[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31249 === (5))){
var inst_31228 = cljs.core.async.close_BANG_(tc);
var inst_31229 = cljs.core.async.close_BANG_(fc);
var state_31248__$1 = (function (){var statearr_31260 = state_31248;
(statearr_31260[(8)] = inst_31228);

return statearr_31260;
})();
var statearr_31261_31281 = state_31248__$1;
(statearr_31261_31281[(2)] = inst_31229);

(statearr_31261_31281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31249 === (14))){
var inst_31242 = (state_31248[(2)]);
var state_31248__$1 = state_31248;
var statearr_31262_31282 = state_31248__$1;
(statearr_31262_31282[(2)] = inst_31242);

(statearr_31262_31282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31249 === (10))){
var state_31248__$1 = state_31248;
var statearr_31263_31283 = state_31248__$1;
(statearr_31263_31283[(2)] = fc);

(statearr_31263_31283[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31249 === (8))){
var inst_31237 = (state_31248[(2)]);
var state_31248__$1 = state_31248;
if(cljs.core.truth_(inst_31237)){
var statearr_31264_31284 = state_31248__$1;
(statearr_31264_31284[(1)] = (12));

} else {
var statearr_31265_31285 = state_31248__$1;
(statearr_31265_31285[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30821__auto___31271,tc,fc))
;
return ((function (switch__30621__auto__,c__30821__auto___31271,tc,fc){
return (function() {
var cljs$core$async$state_machine__30622__auto__ = null;
var cljs$core$async$state_machine__30622__auto____0 = (function (){
var statearr_31266 = [null,null,null,null,null,null,null,null,null];
(statearr_31266[(0)] = cljs$core$async$state_machine__30622__auto__);

(statearr_31266[(1)] = (1));

return statearr_31266;
});
var cljs$core$async$state_machine__30622__auto____1 = (function (state_31248){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_31248);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e31267){if((e31267 instanceof Object)){
var ex__30625__auto__ = e31267;
var statearr_31268_31286 = state_31248;
(statearr_31268_31286[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31267;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31287 = state_31248;
state_31248 = G__31287;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$state_machine__30622__auto__ = function(state_31248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30622__auto____1.call(this,state_31248);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30622__auto____0;
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30622__auto____1;
return cljs$core$async$state_machine__30622__auto__;
})()
;})(switch__30621__auto__,c__30821__auto___31271,tc,fc))
})();
var state__30823__auto__ = (function (){var statearr_31269 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_31269[(6)] = c__30821__auto___31271);

return statearr_31269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(c__30821__auto___31271,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30821__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30821__auto__){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (c__30821__auto__){
return (function (state_31308){
var state_val_31309 = (state_31308[(1)]);
if((state_val_31309 === (7))){
var inst_31304 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
var statearr_31310_31328 = state_31308__$1;
(statearr_31310_31328[(2)] = inst_31304);

(statearr_31310_31328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (1))){
var inst_31288 = init;
var state_31308__$1 = (function (){var statearr_31311 = state_31308;
(statearr_31311[(7)] = inst_31288);

return statearr_31311;
})();
var statearr_31312_31329 = state_31308__$1;
(statearr_31312_31329[(2)] = null);

(statearr_31312_31329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (4))){
var inst_31291 = (state_31308[(8)]);
var inst_31291__$1 = (state_31308[(2)]);
var inst_31292 = (inst_31291__$1 == null);
var state_31308__$1 = (function (){var statearr_31313 = state_31308;
(statearr_31313[(8)] = inst_31291__$1);

return statearr_31313;
})();
if(cljs.core.truth_(inst_31292)){
var statearr_31314_31330 = state_31308__$1;
(statearr_31314_31330[(1)] = (5));

} else {
var statearr_31315_31331 = state_31308__$1;
(statearr_31315_31331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (6))){
var inst_31291 = (state_31308[(8)]);
var inst_31295 = (state_31308[(9)]);
var inst_31288 = (state_31308[(7)]);
var inst_31295__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31288,inst_31291) : f.call(null,inst_31288,inst_31291));
var inst_31296 = cljs.core.reduced_QMARK_(inst_31295__$1);
var state_31308__$1 = (function (){var statearr_31316 = state_31308;
(statearr_31316[(9)] = inst_31295__$1);

return statearr_31316;
})();
if(inst_31296){
var statearr_31317_31332 = state_31308__$1;
(statearr_31317_31332[(1)] = (8));

} else {
var statearr_31318_31333 = state_31308__$1;
(statearr_31318_31333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (3))){
var inst_31306 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31308__$1,inst_31306);
} else {
if((state_val_31309 === (2))){
var state_31308__$1 = state_31308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31308__$1,(4),ch);
} else {
if((state_val_31309 === (9))){
var inst_31295 = (state_31308[(9)]);
var inst_31288 = inst_31295;
var state_31308__$1 = (function (){var statearr_31319 = state_31308;
(statearr_31319[(7)] = inst_31288);

return statearr_31319;
})();
var statearr_31320_31334 = state_31308__$1;
(statearr_31320_31334[(2)] = null);

(statearr_31320_31334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (5))){
var inst_31288 = (state_31308[(7)]);
var state_31308__$1 = state_31308;
var statearr_31321_31335 = state_31308__$1;
(statearr_31321_31335[(2)] = inst_31288);

(statearr_31321_31335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (10))){
var inst_31302 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
var statearr_31322_31336 = state_31308__$1;
(statearr_31322_31336[(2)] = inst_31302);

(statearr_31322_31336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (8))){
var inst_31295 = (state_31308[(9)]);
var inst_31298 = cljs.core.deref(inst_31295);
var state_31308__$1 = state_31308;
var statearr_31323_31337 = state_31308__$1;
(statearr_31323_31337[(2)] = inst_31298);

(statearr_31323_31337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__30821__auto__))
;
return ((function (switch__30621__auto__,c__30821__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30622__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30622__auto____0 = (function (){
var statearr_31324 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31324[(0)] = cljs$core$async$reduce_$_state_machine__30622__auto__);

(statearr_31324[(1)] = (1));

return statearr_31324;
});
var cljs$core$async$reduce_$_state_machine__30622__auto____1 = (function (state_31308){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_31308);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e31325){if((e31325 instanceof Object)){
var ex__30625__auto__ = e31325;
var statearr_31326_31338 = state_31308;
(statearr_31326_31338[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31325;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31339 = state_31308;
state_31308 = G__31339;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30622__auto__ = function(state_31308){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30622__auto____1.call(this,state_31308);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30622__auto____0;
cljs$core$async$reduce_$_state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30622__auto____1;
return cljs$core$async$reduce_$_state_machine__30622__auto__;
})()
;})(switch__30621__auto__,c__30821__auto__))
})();
var state__30823__auto__ = (function (){var statearr_31327 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_31327[(6)] = c__30821__auto__);

return statearr_31327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(c__30821__auto__))
);

return c__30821__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30821__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30821__auto__,f__$1){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (c__30821__auto__,f__$1){
return (function (state_31345){
var state_val_31346 = (state_31345[(1)]);
if((state_val_31346 === (1))){
var inst_31340 = cljs.core.async.reduce(f__$1,init,ch);
var state_31345__$1 = state_31345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31345__$1,(2),inst_31340);
} else {
if((state_val_31346 === (2))){
var inst_31342 = (state_31345[(2)]);
var inst_31343 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31342) : f__$1.call(null,inst_31342));
var state_31345__$1 = state_31345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31345__$1,inst_31343);
} else {
return null;
}
}
});})(c__30821__auto__,f__$1))
;
return ((function (switch__30621__auto__,c__30821__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30622__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30622__auto____0 = (function (){
var statearr_31347 = [null,null,null,null,null,null,null];
(statearr_31347[(0)] = cljs$core$async$transduce_$_state_machine__30622__auto__);

(statearr_31347[(1)] = (1));

return statearr_31347;
});
var cljs$core$async$transduce_$_state_machine__30622__auto____1 = (function (state_31345){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_31345);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e31348){if((e31348 instanceof Object)){
var ex__30625__auto__ = e31348;
var statearr_31349_31351 = state_31345;
(statearr_31349_31351[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31348;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31352 = state_31345;
state_31345 = G__31352;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30622__auto__ = function(state_31345){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30622__auto____1.call(this,state_31345);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30622__auto____0;
cljs$core$async$transduce_$_state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30622__auto____1;
return cljs$core$async$transduce_$_state_machine__30622__auto__;
})()
;})(switch__30621__auto__,c__30821__auto__,f__$1))
})();
var state__30823__auto__ = (function (){var statearr_31350 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_31350[(6)] = c__30821__auto__);

return statearr_31350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(c__30821__auto__,f__$1))
);

return c__30821__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31354 = arguments.length;
switch (G__31354) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30821__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30821__auto__){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (c__30821__auto__){
return (function (state_31379){
var state_val_31380 = (state_31379[(1)]);
if((state_val_31380 === (7))){
var inst_31361 = (state_31379[(2)]);
var state_31379__$1 = state_31379;
var statearr_31381_31402 = state_31379__$1;
(statearr_31381_31402[(2)] = inst_31361);

(statearr_31381_31402[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (1))){
var inst_31355 = cljs.core.seq(coll);
var inst_31356 = inst_31355;
var state_31379__$1 = (function (){var statearr_31382 = state_31379;
(statearr_31382[(7)] = inst_31356);

return statearr_31382;
})();
var statearr_31383_31403 = state_31379__$1;
(statearr_31383_31403[(2)] = null);

(statearr_31383_31403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (4))){
var inst_31356 = (state_31379[(7)]);
var inst_31359 = cljs.core.first(inst_31356);
var state_31379__$1 = state_31379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31379__$1,(7),ch,inst_31359);
} else {
if((state_val_31380 === (13))){
var inst_31373 = (state_31379[(2)]);
var state_31379__$1 = state_31379;
var statearr_31384_31404 = state_31379__$1;
(statearr_31384_31404[(2)] = inst_31373);

(statearr_31384_31404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (6))){
var inst_31364 = (state_31379[(2)]);
var state_31379__$1 = state_31379;
if(cljs.core.truth_(inst_31364)){
var statearr_31385_31405 = state_31379__$1;
(statearr_31385_31405[(1)] = (8));

} else {
var statearr_31386_31406 = state_31379__$1;
(statearr_31386_31406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (3))){
var inst_31377 = (state_31379[(2)]);
var state_31379__$1 = state_31379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31379__$1,inst_31377);
} else {
if((state_val_31380 === (12))){
var state_31379__$1 = state_31379;
var statearr_31387_31407 = state_31379__$1;
(statearr_31387_31407[(2)] = null);

(statearr_31387_31407[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (2))){
var inst_31356 = (state_31379[(7)]);
var state_31379__$1 = state_31379;
if(cljs.core.truth_(inst_31356)){
var statearr_31388_31408 = state_31379__$1;
(statearr_31388_31408[(1)] = (4));

} else {
var statearr_31389_31409 = state_31379__$1;
(statearr_31389_31409[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (11))){
var inst_31370 = cljs.core.async.close_BANG_(ch);
var state_31379__$1 = state_31379;
var statearr_31390_31410 = state_31379__$1;
(statearr_31390_31410[(2)] = inst_31370);

(statearr_31390_31410[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (9))){
var state_31379__$1 = state_31379;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31391_31411 = state_31379__$1;
(statearr_31391_31411[(1)] = (11));

} else {
var statearr_31392_31412 = state_31379__$1;
(statearr_31392_31412[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (5))){
var inst_31356 = (state_31379[(7)]);
var state_31379__$1 = state_31379;
var statearr_31393_31413 = state_31379__$1;
(statearr_31393_31413[(2)] = inst_31356);

(statearr_31393_31413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (10))){
var inst_31375 = (state_31379[(2)]);
var state_31379__$1 = state_31379;
var statearr_31394_31414 = state_31379__$1;
(statearr_31394_31414[(2)] = inst_31375);

(statearr_31394_31414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (8))){
var inst_31356 = (state_31379[(7)]);
var inst_31366 = cljs.core.next(inst_31356);
var inst_31356__$1 = inst_31366;
var state_31379__$1 = (function (){var statearr_31395 = state_31379;
(statearr_31395[(7)] = inst_31356__$1);

return statearr_31395;
})();
var statearr_31396_31415 = state_31379__$1;
(statearr_31396_31415[(2)] = null);

(statearr_31396_31415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30821__auto__))
;
return ((function (switch__30621__auto__,c__30821__auto__){
return (function() {
var cljs$core$async$state_machine__30622__auto__ = null;
var cljs$core$async$state_machine__30622__auto____0 = (function (){
var statearr_31397 = [null,null,null,null,null,null,null,null];
(statearr_31397[(0)] = cljs$core$async$state_machine__30622__auto__);

(statearr_31397[(1)] = (1));

return statearr_31397;
});
var cljs$core$async$state_machine__30622__auto____1 = (function (state_31379){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_31379);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e31398){if((e31398 instanceof Object)){
var ex__30625__auto__ = e31398;
var statearr_31399_31416 = state_31379;
(statearr_31399_31416[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31398;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31417 = state_31379;
state_31379 = G__31417;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$state_machine__30622__auto__ = function(state_31379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30622__auto____1.call(this,state_31379);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30622__auto____0;
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30622__auto____1;
return cljs$core$async$state_machine__30622__auto__;
})()
;})(switch__30621__auto__,c__30821__auto__))
})();
var state__30823__auto__ = (function (){var statearr_31400 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_31400[(6)] = c__30821__auto__);

return statearr_31400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(c__30821__auto__))
);

return c__30821__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5859__auto__ = (((_ == null))?null:_);
var m__5860__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5860__auto__.call(null,_));
} else {
var m__5860__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5860__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5860__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5860__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5860__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5860__auto__.call(null,m,ch));
} else {
var m__5860__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5860__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5860__auto__.call(null,m));
} else {
var m__5860__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5860__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31418 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31418 = (function (ch,cs,meta31419){
this.ch = ch;
this.cs = cs;
this.meta31419 = meta31419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31420,meta31419__$1){
var self__ = this;
var _31420__$1 = this;
return (new cljs.core.async.t_cljs$core$async31418(self__.ch,self__.cs,meta31419__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31420){
var self__ = this;
var _31420__$1 = this;
return self__.meta31419;
});})(cs))
;

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31418.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31419","meta31419",-183405585,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31418";

cljs.core.async.t_cljs$core$async31418.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async31418");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31418 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31418(ch__$1,cs__$1,meta31419){
return (new cljs.core.async.t_cljs$core$async31418(ch__$1,cs__$1,meta31419));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31418(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30821__auto___31640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30821__auto___31640,cs,m,dchan,dctr,done){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (c__30821__auto___31640,cs,m,dchan,dctr,done){
return (function (state_31555){
var state_val_31556 = (state_31555[(1)]);
if((state_val_31556 === (7))){
var inst_31551 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31557_31641 = state_31555__$1;
(statearr_31557_31641[(2)] = inst_31551);

(statearr_31557_31641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (20))){
var inst_31454 = (state_31555[(7)]);
var inst_31466 = cljs.core.first(inst_31454);
var inst_31467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31466,(0),null);
var inst_31468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31466,(1),null);
var state_31555__$1 = (function (){var statearr_31558 = state_31555;
(statearr_31558[(8)] = inst_31467);

return statearr_31558;
})();
if(cljs.core.truth_(inst_31468)){
var statearr_31559_31642 = state_31555__$1;
(statearr_31559_31642[(1)] = (22));

} else {
var statearr_31560_31643 = state_31555__$1;
(statearr_31560_31643[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (27))){
var inst_31423 = (state_31555[(9)]);
var inst_31496 = (state_31555[(10)]);
var inst_31503 = (state_31555[(11)]);
var inst_31498 = (state_31555[(12)]);
var inst_31503__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31496,inst_31498);
var inst_31504 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31503__$1,inst_31423,done);
var state_31555__$1 = (function (){var statearr_31561 = state_31555;
(statearr_31561[(11)] = inst_31503__$1);

return statearr_31561;
})();
if(cljs.core.truth_(inst_31504)){
var statearr_31562_31644 = state_31555__$1;
(statearr_31562_31644[(1)] = (30));

} else {
var statearr_31563_31645 = state_31555__$1;
(statearr_31563_31645[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (1))){
var state_31555__$1 = state_31555;
var statearr_31564_31646 = state_31555__$1;
(statearr_31564_31646[(2)] = null);

(statearr_31564_31646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (24))){
var inst_31454 = (state_31555[(7)]);
var inst_31473 = (state_31555[(2)]);
var inst_31474 = cljs.core.next(inst_31454);
var inst_31432 = inst_31474;
var inst_31433 = null;
var inst_31434 = (0);
var inst_31435 = (0);
var state_31555__$1 = (function (){var statearr_31565 = state_31555;
(statearr_31565[(13)] = inst_31435);

(statearr_31565[(14)] = inst_31434);

(statearr_31565[(15)] = inst_31433);

(statearr_31565[(16)] = inst_31473);

(statearr_31565[(17)] = inst_31432);

return statearr_31565;
})();
var statearr_31566_31647 = state_31555__$1;
(statearr_31566_31647[(2)] = null);

(statearr_31566_31647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (39))){
var state_31555__$1 = state_31555;
var statearr_31570_31648 = state_31555__$1;
(statearr_31570_31648[(2)] = null);

(statearr_31570_31648[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (4))){
var inst_31423 = (state_31555[(9)]);
var inst_31423__$1 = (state_31555[(2)]);
var inst_31424 = (inst_31423__$1 == null);
var state_31555__$1 = (function (){var statearr_31571 = state_31555;
(statearr_31571[(9)] = inst_31423__$1);

return statearr_31571;
})();
if(cljs.core.truth_(inst_31424)){
var statearr_31572_31649 = state_31555__$1;
(statearr_31572_31649[(1)] = (5));

} else {
var statearr_31573_31650 = state_31555__$1;
(statearr_31573_31650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (15))){
var inst_31435 = (state_31555[(13)]);
var inst_31434 = (state_31555[(14)]);
var inst_31433 = (state_31555[(15)]);
var inst_31432 = (state_31555[(17)]);
var inst_31450 = (state_31555[(2)]);
var inst_31451 = (inst_31435 + (1));
var tmp31567 = inst_31434;
var tmp31568 = inst_31433;
var tmp31569 = inst_31432;
var inst_31432__$1 = tmp31569;
var inst_31433__$1 = tmp31568;
var inst_31434__$1 = tmp31567;
var inst_31435__$1 = inst_31451;
var state_31555__$1 = (function (){var statearr_31574 = state_31555;
(statearr_31574[(18)] = inst_31450);

(statearr_31574[(13)] = inst_31435__$1);

(statearr_31574[(14)] = inst_31434__$1);

(statearr_31574[(15)] = inst_31433__$1);

(statearr_31574[(17)] = inst_31432__$1);

return statearr_31574;
})();
var statearr_31575_31651 = state_31555__$1;
(statearr_31575_31651[(2)] = null);

(statearr_31575_31651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (21))){
var inst_31477 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31579_31652 = state_31555__$1;
(statearr_31579_31652[(2)] = inst_31477);

(statearr_31579_31652[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (31))){
var inst_31503 = (state_31555[(11)]);
var inst_31507 = done(null);
var inst_31508 = cljs.core.async.untap_STAR_(m,inst_31503);
var state_31555__$1 = (function (){var statearr_31580 = state_31555;
(statearr_31580[(19)] = inst_31507);

return statearr_31580;
})();
var statearr_31581_31653 = state_31555__$1;
(statearr_31581_31653[(2)] = inst_31508);

(statearr_31581_31653[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (32))){
var inst_31496 = (state_31555[(10)]);
var inst_31495 = (state_31555[(20)]);
var inst_31497 = (state_31555[(21)]);
var inst_31498 = (state_31555[(12)]);
var inst_31510 = (state_31555[(2)]);
var inst_31511 = (inst_31498 + (1));
var tmp31576 = inst_31496;
var tmp31577 = inst_31495;
var tmp31578 = inst_31497;
var inst_31495__$1 = tmp31577;
var inst_31496__$1 = tmp31576;
var inst_31497__$1 = tmp31578;
var inst_31498__$1 = inst_31511;
var state_31555__$1 = (function (){var statearr_31582 = state_31555;
(statearr_31582[(10)] = inst_31496__$1);

(statearr_31582[(22)] = inst_31510);

(statearr_31582[(20)] = inst_31495__$1);

(statearr_31582[(21)] = inst_31497__$1);

(statearr_31582[(12)] = inst_31498__$1);

return statearr_31582;
})();
var statearr_31583_31654 = state_31555__$1;
(statearr_31583_31654[(2)] = null);

(statearr_31583_31654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (40))){
var inst_31523 = (state_31555[(23)]);
var inst_31527 = done(null);
var inst_31528 = cljs.core.async.untap_STAR_(m,inst_31523);
var state_31555__$1 = (function (){var statearr_31584 = state_31555;
(statearr_31584[(24)] = inst_31527);

return statearr_31584;
})();
var statearr_31585_31655 = state_31555__$1;
(statearr_31585_31655[(2)] = inst_31528);

(statearr_31585_31655[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (33))){
var inst_31514 = (state_31555[(25)]);
var inst_31516 = cljs.core.chunked_seq_QMARK_(inst_31514);
var state_31555__$1 = state_31555;
if(inst_31516){
var statearr_31586_31656 = state_31555__$1;
(statearr_31586_31656[(1)] = (36));

} else {
var statearr_31587_31657 = state_31555__$1;
(statearr_31587_31657[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (13))){
var inst_31444 = (state_31555[(26)]);
var inst_31447 = cljs.core.async.close_BANG_(inst_31444);
var state_31555__$1 = state_31555;
var statearr_31588_31658 = state_31555__$1;
(statearr_31588_31658[(2)] = inst_31447);

(statearr_31588_31658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (22))){
var inst_31467 = (state_31555[(8)]);
var inst_31470 = cljs.core.async.close_BANG_(inst_31467);
var state_31555__$1 = state_31555;
var statearr_31589_31659 = state_31555__$1;
(statearr_31589_31659[(2)] = inst_31470);

(statearr_31589_31659[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (36))){
var inst_31514 = (state_31555[(25)]);
var inst_31518 = cljs.core.chunk_first(inst_31514);
var inst_31519 = cljs.core.chunk_rest(inst_31514);
var inst_31520 = cljs.core.count(inst_31518);
var inst_31495 = inst_31519;
var inst_31496 = inst_31518;
var inst_31497 = inst_31520;
var inst_31498 = (0);
var state_31555__$1 = (function (){var statearr_31590 = state_31555;
(statearr_31590[(10)] = inst_31496);

(statearr_31590[(20)] = inst_31495);

(statearr_31590[(21)] = inst_31497);

(statearr_31590[(12)] = inst_31498);

return statearr_31590;
})();
var statearr_31591_31660 = state_31555__$1;
(statearr_31591_31660[(2)] = null);

(statearr_31591_31660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (41))){
var inst_31514 = (state_31555[(25)]);
var inst_31530 = (state_31555[(2)]);
var inst_31531 = cljs.core.next(inst_31514);
var inst_31495 = inst_31531;
var inst_31496 = null;
var inst_31497 = (0);
var inst_31498 = (0);
var state_31555__$1 = (function (){var statearr_31592 = state_31555;
(statearr_31592[(10)] = inst_31496);

(statearr_31592[(27)] = inst_31530);

(statearr_31592[(20)] = inst_31495);

(statearr_31592[(21)] = inst_31497);

(statearr_31592[(12)] = inst_31498);

return statearr_31592;
})();
var statearr_31593_31661 = state_31555__$1;
(statearr_31593_31661[(2)] = null);

(statearr_31593_31661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (43))){
var state_31555__$1 = state_31555;
var statearr_31594_31662 = state_31555__$1;
(statearr_31594_31662[(2)] = null);

(statearr_31594_31662[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (29))){
var inst_31539 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31595_31663 = state_31555__$1;
(statearr_31595_31663[(2)] = inst_31539);

(statearr_31595_31663[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (44))){
var inst_31548 = (state_31555[(2)]);
var state_31555__$1 = (function (){var statearr_31596 = state_31555;
(statearr_31596[(28)] = inst_31548);

return statearr_31596;
})();
var statearr_31597_31664 = state_31555__$1;
(statearr_31597_31664[(2)] = null);

(statearr_31597_31664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (6))){
var inst_31487 = (state_31555[(29)]);
var inst_31486 = cljs.core.deref(cs);
var inst_31487__$1 = cljs.core.keys(inst_31486);
var inst_31488 = cljs.core.count(inst_31487__$1);
var inst_31489 = cljs.core.reset_BANG_(dctr,inst_31488);
var inst_31494 = cljs.core.seq(inst_31487__$1);
var inst_31495 = inst_31494;
var inst_31496 = null;
var inst_31497 = (0);
var inst_31498 = (0);
var state_31555__$1 = (function (){var statearr_31598 = state_31555;
(statearr_31598[(10)] = inst_31496);

(statearr_31598[(29)] = inst_31487__$1);

(statearr_31598[(20)] = inst_31495);

(statearr_31598[(30)] = inst_31489);

(statearr_31598[(21)] = inst_31497);

(statearr_31598[(12)] = inst_31498);

return statearr_31598;
})();
var statearr_31599_31665 = state_31555__$1;
(statearr_31599_31665[(2)] = null);

(statearr_31599_31665[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (28))){
var inst_31495 = (state_31555[(20)]);
var inst_31514 = (state_31555[(25)]);
var inst_31514__$1 = cljs.core.seq(inst_31495);
var state_31555__$1 = (function (){var statearr_31600 = state_31555;
(statearr_31600[(25)] = inst_31514__$1);

return statearr_31600;
})();
if(inst_31514__$1){
var statearr_31601_31666 = state_31555__$1;
(statearr_31601_31666[(1)] = (33));

} else {
var statearr_31602_31667 = state_31555__$1;
(statearr_31602_31667[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (25))){
var inst_31497 = (state_31555[(21)]);
var inst_31498 = (state_31555[(12)]);
var inst_31500 = (inst_31498 < inst_31497);
var inst_31501 = inst_31500;
var state_31555__$1 = state_31555;
if(cljs.core.truth_(inst_31501)){
var statearr_31603_31668 = state_31555__$1;
(statearr_31603_31668[(1)] = (27));

} else {
var statearr_31604_31669 = state_31555__$1;
(statearr_31604_31669[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (34))){
var state_31555__$1 = state_31555;
var statearr_31605_31670 = state_31555__$1;
(statearr_31605_31670[(2)] = null);

(statearr_31605_31670[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (17))){
var state_31555__$1 = state_31555;
var statearr_31606_31671 = state_31555__$1;
(statearr_31606_31671[(2)] = null);

(statearr_31606_31671[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (3))){
var inst_31553 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31555__$1,inst_31553);
} else {
if((state_val_31556 === (12))){
var inst_31482 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31607_31672 = state_31555__$1;
(statearr_31607_31672[(2)] = inst_31482);

(statearr_31607_31672[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (2))){
var state_31555__$1 = state_31555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31555__$1,(4),ch);
} else {
if((state_val_31556 === (23))){
var state_31555__$1 = state_31555;
var statearr_31608_31673 = state_31555__$1;
(statearr_31608_31673[(2)] = null);

(statearr_31608_31673[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (35))){
var inst_31537 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31609_31674 = state_31555__$1;
(statearr_31609_31674[(2)] = inst_31537);

(statearr_31609_31674[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (19))){
var inst_31454 = (state_31555[(7)]);
var inst_31458 = cljs.core.chunk_first(inst_31454);
var inst_31459 = cljs.core.chunk_rest(inst_31454);
var inst_31460 = cljs.core.count(inst_31458);
var inst_31432 = inst_31459;
var inst_31433 = inst_31458;
var inst_31434 = inst_31460;
var inst_31435 = (0);
var state_31555__$1 = (function (){var statearr_31610 = state_31555;
(statearr_31610[(13)] = inst_31435);

(statearr_31610[(14)] = inst_31434);

(statearr_31610[(15)] = inst_31433);

(statearr_31610[(17)] = inst_31432);

return statearr_31610;
})();
var statearr_31611_31675 = state_31555__$1;
(statearr_31611_31675[(2)] = null);

(statearr_31611_31675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (11))){
var inst_31454 = (state_31555[(7)]);
var inst_31432 = (state_31555[(17)]);
var inst_31454__$1 = cljs.core.seq(inst_31432);
var state_31555__$1 = (function (){var statearr_31612 = state_31555;
(statearr_31612[(7)] = inst_31454__$1);

return statearr_31612;
})();
if(inst_31454__$1){
var statearr_31613_31676 = state_31555__$1;
(statearr_31613_31676[(1)] = (16));

} else {
var statearr_31614_31677 = state_31555__$1;
(statearr_31614_31677[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (9))){
var inst_31484 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31615_31678 = state_31555__$1;
(statearr_31615_31678[(2)] = inst_31484);

(statearr_31615_31678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (5))){
var inst_31430 = cljs.core.deref(cs);
var inst_31431 = cljs.core.seq(inst_31430);
var inst_31432 = inst_31431;
var inst_31433 = null;
var inst_31434 = (0);
var inst_31435 = (0);
var state_31555__$1 = (function (){var statearr_31616 = state_31555;
(statearr_31616[(13)] = inst_31435);

(statearr_31616[(14)] = inst_31434);

(statearr_31616[(15)] = inst_31433);

(statearr_31616[(17)] = inst_31432);

return statearr_31616;
})();
var statearr_31617_31679 = state_31555__$1;
(statearr_31617_31679[(2)] = null);

(statearr_31617_31679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (14))){
var state_31555__$1 = state_31555;
var statearr_31618_31680 = state_31555__$1;
(statearr_31618_31680[(2)] = null);

(statearr_31618_31680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (45))){
var inst_31545 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31619_31681 = state_31555__$1;
(statearr_31619_31681[(2)] = inst_31545);

(statearr_31619_31681[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (26))){
var inst_31487 = (state_31555[(29)]);
var inst_31541 = (state_31555[(2)]);
var inst_31542 = cljs.core.seq(inst_31487);
var state_31555__$1 = (function (){var statearr_31620 = state_31555;
(statearr_31620[(31)] = inst_31541);

return statearr_31620;
})();
if(inst_31542){
var statearr_31621_31682 = state_31555__$1;
(statearr_31621_31682[(1)] = (42));

} else {
var statearr_31622_31683 = state_31555__$1;
(statearr_31622_31683[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (16))){
var inst_31454 = (state_31555[(7)]);
var inst_31456 = cljs.core.chunked_seq_QMARK_(inst_31454);
var state_31555__$1 = state_31555;
if(inst_31456){
var statearr_31623_31684 = state_31555__$1;
(statearr_31623_31684[(1)] = (19));

} else {
var statearr_31624_31685 = state_31555__$1;
(statearr_31624_31685[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (38))){
var inst_31534 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31625_31686 = state_31555__$1;
(statearr_31625_31686[(2)] = inst_31534);

(statearr_31625_31686[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (30))){
var state_31555__$1 = state_31555;
var statearr_31626_31687 = state_31555__$1;
(statearr_31626_31687[(2)] = null);

(statearr_31626_31687[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (10))){
var inst_31435 = (state_31555[(13)]);
var inst_31433 = (state_31555[(15)]);
var inst_31443 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31433,inst_31435);
var inst_31444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31443,(0),null);
var inst_31445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31443,(1),null);
var state_31555__$1 = (function (){var statearr_31627 = state_31555;
(statearr_31627[(26)] = inst_31444);

return statearr_31627;
})();
if(cljs.core.truth_(inst_31445)){
var statearr_31628_31688 = state_31555__$1;
(statearr_31628_31688[(1)] = (13));

} else {
var statearr_31629_31689 = state_31555__$1;
(statearr_31629_31689[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (18))){
var inst_31480 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31630_31690 = state_31555__$1;
(statearr_31630_31690[(2)] = inst_31480);

(statearr_31630_31690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (42))){
var state_31555__$1 = state_31555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31555__$1,(45),dchan);
} else {
if((state_val_31556 === (37))){
var inst_31523 = (state_31555[(23)]);
var inst_31423 = (state_31555[(9)]);
var inst_31514 = (state_31555[(25)]);
var inst_31523__$1 = cljs.core.first(inst_31514);
var inst_31524 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31523__$1,inst_31423,done);
var state_31555__$1 = (function (){var statearr_31631 = state_31555;
(statearr_31631[(23)] = inst_31523__$1);

return statearr_31631;
})();
if(cljs.core.truth_(inst_31524)){
var statearr_31632_31691 = state_31555__$1;
(statearr_31632_31691[(1)] = (39));

} else {
var statearr_31633_31692 = state_31555__$1;
(statearr_31633_31692[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (8))){
var inst_31435 = (state_31555[(13)]);
var inst_31434 = (state_31555[(14)]);
var inst_31437 = (inst_31435 < inst_31434);
var inst_31438 = inst_31437;
var state_31555__$1 = state_31555;
if(cljs.core.truth_(inst_31438)){
var statearr_31634_31693 = state_31555__$1;
(statearr_31634_31693[(1)] = (10));

} else {
var statearr_31635_31694 = state_31555__$1;
(statearr_31635_31694[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30821__auto___31640,cs,m,dchan,dctr,done))
;
return ((function (switch__30621__auto__,c__30821__auto___31640,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30622__auto__ = null;
var cljs$core$async$mult_$_state_machine__30622__auto____0 = (function (){
var statearr_31636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31636[(0)] = cljs$core$async$mult_$_state_machine__30622__auto__);

(statearr_31636[(1)] = (1));

return statearr_31636;
});
var cljs$core$async$mult_$_state_machine__30622__auto____1 = (function (state_31555){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_31555);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e31637){if((e31637 instanceof Object)){
var ex__30625__auto__ = e31637;
var statearr_31638_31695 = state_31555;
(statearr_31638_31695[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31637;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31696 = state_31555;
state_31555 = G__31696;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30622__auto__ = function(state_31555){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30622__auto____1.call(this,state_31555);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30622__auto____0;
cljs$core$async$mult_$_state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30622__auto____1;
return cljs$core$async$mult_$_state_machine__30622__auto__;
})()
;})(switch__30621__auto__,c__30821__auto___31640,cs,m,dchan,dctr,done))
})();
var state__30823__auto__ = (function (){var statearr_31639 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_31639[(6)] = c__30821__auto___31640);

return statearr_31639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(c__30821__auto___31640,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31698 = arguments.length;
switch (G__31698) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5860__auto__.call(null,m,ch));
} else {
var m__5860__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5860__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5860__auto__.call(null,m,ch));
} else {
var m__5860__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5860__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5860__auto__.call(null,m));
} else {
var m__5860__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5860__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5860__auto__.call(null,m,state_map));
} else {
var m__5860__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5860__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5860__auto__.call(null,m,mode));
} else {
var m__5860__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5860__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6412__auto__ = [];
var len__6405__auto___31710 = arguments.length;
var i__6406__auto___31711 = (0);
while(true){
if((i__6406__auto___31711 < len__6405__auto___31710)){
args__6412__auto__.push((arguments[i__6406__auto___31711]));

var G__31712 = (i__6406__auto___31711 + (1));
i__6406__auto___31711 = G__31712;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((3) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6413__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31704){
var map__31705 = p__31704;
var map__31705__$1 = ((((!((map__31705 == null)))?((((map__31705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31705.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31705):map__31705);
var opts = map__31705__$1;
var statearr_31707_31713 = state;
(statearr_31707_31713[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__31705,map__31705__$1,opts){
return (function (val){
var statearr_31708_31714 = state;
(statearr_31708_31714[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__31705,map__31705__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_31709_31715 = state;
(statearr_31709_31715[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31700){
var G__31701 = cljs.core.first(seq31700);
var seq31700__$1 = cljs.core.next(seq31700);
var G__31702 = cljs.core.first(seq31700__$1);
var seq31700__$2 = cljs.core.next(seq31700__$1);
var G__31703 = cljs.core.first(seq31700__$2);
var seq31700__$3 = cljs.core.next(seq31700__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31701,G__31702,G__31703,seq31700__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31716 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31716 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31717){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31717 = meta31717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31718,meta31717__$1){
var self__ = this;
var _31718__$1 = this;
return (new cljs.core.async.t_cljs$core$async31716(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31717__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31718){
var self__ = this;
var _31718__$1 = this;
return self__.meta31717;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31716.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31717","meta31717",2029434993,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31716.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31716";

cljs.core.async.t_cljs$core$async31716.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async31716");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31716 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31716(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31717){
return (new cljs.core.async.t_cljs$core$async31716(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31717));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31716(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30821__auto___31880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30821__auto___31880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (c__30821__auto___31880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31820){
var state_val_31821 = (state_31820[(1)]);
if((state_val_31821 === (7))){
var inst_31735 = (state_31820[(2)]);
var state_31820__$1 = state_31820;
var statearr_31822_31881 = state_31820__$1;
(statearr_31822_31881[(2)] = inst_31735);

(statearr_31822_31881[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (20))){
var inst_31747 = (state_31820[(7)]);
var state_31820__$1 = state_31820;
var statearr_31823_31882 = state_31820__$1;
(statearr_31823_31882[(2)] = inst_31747);

(statearr_31823_31882[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (27))){
var state_31820__$1 = state_31820;
var statearr_31824_31883 = state_31820__$1;
(statearr_31824_31883[(2)] = null);

(statearr_31824_31883[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (1))){
var inst_31722 = (state_31820[(8)]);
var inst_31722__$1 = calc_state();
var inst_31724 = (inst_31722__$1 == null);
var inst_31725 = cljs.core.not(inst_31724);
var state_31820__$1 = (function (){var statearr_31825 = state_31820;
(statearr_31825[(8)] = inst_31722__$1);

return statearr_31825;
})();
if(inst_31725){
var statearr_31826_31884 = state_31820__$1;
(statearr_31826_31884[(1)] = (2));

} else {
var statearr_31827_31885 = state_31820__$1;
(statearr_31827_31885[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (24))){
var inst_31794 = (state_31820[(9)]);
var inst_31771 = (state_31820[(10)]);
var inst_31780 = (state_31820[(11)]);
var inst_31794__$1 = (inst_31771.cljs$core$IFn$_invoke$arity$1 ? inst_31771.cljs$core$IFn$_invoke$arity$1(inst_31780) : inst_31771.call(null,inst_31780));
var state_31820__$1 = (function (){var statearr_31828 = state_31820;
(statearr_31828[(9)] = inst_31794__$1);

return statearr_31828;
})();
if(cljs.core.truth_(inst_31794__$1)){
var statearr_31829_31886 = state_31820__$1;
(statearr_31829_31886[(1)] = (29));

} else {
var statearr_31830_31887 = state_31820__$1;
(statearr_31830_31887[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (4))){
var inst_31738 = (state_31820[(2)]);
var state_31820__$1 = state_31820;
if(cljs.core.truth_(inst_31738)){
var statearr_31831_31888 = state_31820__$1;
(statearr_31831_31888[(1)] = (8));

} else {
var statearr_31832_31889 = state_31820__$1;
(statearr_31832_31889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (15))){
var inst_31765 = (state_31820[(2)]);
var state_31820__$1 = state_31820;
if(cljs.core.truth_(inst_31765)){
var statearr_31833_31890 = state_31820__$1;
(statearr_31833_31890[(1)] = (19));

} else {
var statearr_31834_31891 = state_31820__$1;
(statearr_31834_31891[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (21))){
var inst_31770 = (state_31820[(12)]);
var inst_31770__$1 = (state_31820[(2)]);
var inst_31771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31770__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31770__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31770__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31820__$1 = (function (){var statearr_31835 = state_31820;
(statearr_31835[(12)] = inst_31770__$1);

(statearr_31835[(10)] = inst_31771);

(statearr_31835[(13)] = inst_31772);

return statearr_31835;
})();
return cljs.core.async.ioc_alts_BANG_(state_31820__$1,(22),inst_31773);
} else {
if((state_val_31821 === (31))){
var inst_31802 = (state_31820[(2)]);
var state_31820__$1 = state_31820;
if(cljs.core.truth_(inst_31802)){
var statearr_31836_31892 = state_31820__$1;
(statearr_31836_31892[(1)] = (32));

} else {
var statearr_31837_31893 = state_31820__$1;
(statearr_31837_31893[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (32))){
var inst_31779 = (state_31820[(14)]);
var state_31820__$1 = state_31820;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31820__$1,(35),out,inst_31779);
} else {
if((state_val_31821 === (33))){
var inst_31770 = (state_31820[(12)]);
var inst_31747 = inst_31770;
var state_31820__$1 = (function (){var statearr_31838 = state_31820;
(statearr_31838[(7)] = inst_31747);

return statearr_31838;
})();
var statearr_31839_31894 = state_31820__$1;
(statearr_31839_31894[(2)] = null);

(statearr_31839_31894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (13))){
var inst_31747 = (state_31820[(7)]);
var inst_31754 = inst_31747.cljs$lang$protocol_mask$partition0$;
var inst_31755 = (inst_31754 & (64));
var inst_31756 = inst_31747.cljs$core$ISeq$;
var inst_31757 = (cljs.core.PROTOCOL_SENTINEL === inst_31756);
var inst_31758 = (inst_31755) || (inst_31757);
var state_31820__$1 = state_31820;
if(cljs.core.truth_(inst_31758)){
var statearr_31840_31895 = state_31820__$1;
(statearr_31840_31895[(1)] = (16));

} else {
var statearr_31841_31896 = state_31820__$1;
(statearr_31841_31896[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (22))){
var inst_31779 = (state_31820[(14)]);
var inst_31780 = (state_31820[(11)]);
var inst_31778 = (state_31820[(2)]);
var inst_31779__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31778,(0),null);
var inst_31780__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31778,(1),null);
var inst_31781 = (inst_31779__$1 == null);
var inst_31782 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31780__$1,change);
var inst_31783 = (inst_31781) || (inst_31782);
var state_31820__$1 = (function (){var statearr_31842 = state_31820;
(statearr_31842[(14)] = inst_31779__$1);

(statearr_31842[(11)] = inst_31780__$1);

return statearr_31842;
})();
if(cljs.core.truth_(inst_31783)){
var statearr_31843_31897 = state_31820__$1;
(statearr_31843_31897[(1)] = (23));

} else {
var statearr_31844_31898 = state_31820__$1;
(statearr_31844_31898[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (36))){
var inst_31770 = (state_31820[(12)]);
var inst_31747 = inst_31770;
var state_31820__$1 = (function (){var statearr_31845 = state_31820;
(statearr_31845[(7)] = inst_31747);

return statearr_31845;
})();
var statearr_31846_31899 = state_31820__$1;
(statearr_31846_31899[(2)] = null);

(statearr_31846_31899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (29))){
var inst_31794 = (state_31820[(9)]);
var state_31820__$1 = state_31820;
var statearr_31847_31900 = state_31820__$1;
(statearr_31847_31900[(2)] = inst_31794);

(statearr_31847_31900[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (6))){
var state_31820__$1 = state_31820;
var statearr_31848_31901 = state_31820__$1;
(statearr_31848_31901[(2)] = false);

(statearr_31848_31901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (28))){
var inst_31790 = (state_31820[(2)]);
var inst_31791 = calc_state();
var inst_31747 = inst_31791;
var state_31820__$1 = (function (){var statearr_31849 = state_31820;
(statearr_31849[(15)] = inst_31790);

(statearr_31849[(7)] = inst_31747);

return statearr_31849;
})();
var statearr_31850_31902 = state_31820__$1;
(statearr_31850_31902[(2)] = null);

(statearr_31850_31902[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (25))){
var inst_31816 = (state_31820[(2)]);
var state_31820__$1 = state_31820;
var statearr_31851_31903 = state_31820__$1;
(statearr_31851_31903[(2)] = inst_31816);

(statearr_31851_31903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (34))){
var inst_31814 = (state_31820[(2)]);
var state_31820__$1 = state_31820;
var statearr_31852_31904 = state_31820__$1;
(statearr_31852_31904[(2)] = inst_31814);

(statearr_31852_31904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (17))){
var state_31820__$1 = state_31820;
var statearr_31853_31905 = state_31820__$1;
(statearr_31853_31905[(2)] = false);

(statearr_31853_31905[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (3))){
var state_31820__$1 = state_31820;
var statearr_31854_31906 = state_31820__$1;
(statearr_31854_31906[(2)] = false);

(statearr_31854_31906[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (12))){
var inst_31818 = (state_31820[(2)]);
var state_31820__$1 = state_31820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31820__$1,inst_31818);
} else {
if((state_val_31821 === (2))){
var inst_31722 = (state_31820[(8)]);
var inst_31727 = inst_31722.cljs$lang$protocol_mask$partition0$;
var inst_31728 = (inst_31727 & (64));
var inst_31729 = inst_31722.cljs$core$ISeq$;
var inst_31730 = (cljs.core.PROTOCOL_SENTINEL === inst_31729);
var inst_31731 = (inst_31728) || (inst_31730);
var state_31820__$1 = state_31820;
if(cljs.core.truth_(inst_31731)){
var statearr_31855_31907 = state_31820__$1;
(statearr_31855_31907[(1)] = (5));

} else {
var statearr_31856_31908 = state_31820__$1;
(statearr_31856_31908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (23))){
var inst_31779 = (state_31820[(14)]);
var inst_31785 = (inst_31779 == null);
var state_31820__$1 = state_31820;
if(cljs.core.truth_(inst_31785)){
var statearr_31857_31909 = state_31820__$1;
(statearr_31857_31909[(1)] = (26));

} else {
var statearr_31858_31910 = state_31820__$1;
(statearr_31858_31910[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (35))){
var inst_31805 = (state_31820[(2)]);
var state_31820__$1 = state_31820;
if(cljs.core.truth_(inst_31805)){
var statearr_31859_31911 = state_31820__$1;
(statearr_31859_31911[(1)] = (36));

} else {
var statearr_31860_31912 = state_31820__$1;
(statearr_31860_31912[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (19))){
var inst_31747 = (state_31820[(7)]);
var inst_31767 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31747);
var state_31820__$1 = state_31820;
var statearr_31861_31913 = state_31820__$1;
(statearr_31861_31913[(2)] = inst_31767);

(statearr_31861_31913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (11))){
var inst_31747 = (state_31820[(7)]);
var inst_31751 = (inst_31747 == null);
var inst_31752 = cljs.core.not(inst_31751);
var state_31820__$1 = state_31820;
if(inst_31752){
var statearr_31862_31914 = state_31820__$1;
(statearr_31862_31914[(1)] = (13));

} else {
var statearr_31863_31915 = state_31820__$1;
(statearr_31863_31915[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (9))){
var inst_31722 = (state_31820[(8)]);
var state_31820__$1 = state_31820;
var statearr_31864_31916 = state_31820__$1;
(statearr_31864_31916[(2)] = inst_31722);

(statearr_31864_31916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (5))){
var state_31820__$1 = state_31820;
var statearr_31865_31917 = state_31820__$1;
(statearr_31865_31917[(2)] = true);

(statearr_31865_31917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (14))){
var state_31820__$1 = state_31820;
var statearr_31866_31918 = state_31820__$1;
(statearr_31866_31918[(2)] = false);

(statearr_31866_31918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (26))){
var inst_31780 = (state_31820[(11)]);
var inst_31787 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31780);
var state_31820__$1 = state_31820;
var statearr_31867_31919 = state_31820__$1;
(statearr_31867_31919[(2)] = inst_31787);

(statearr_31867_31919[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (16))){
var state_31820__$1 = state_31820;
var statearr_31868_31920 = state_31820__$1;
(statearr_31868_31920[(2)] = true);

(statearr_31868_31920[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (38))){
var inst_31810 = (state_31820[(2)]);
var state_31820__$1 = state_31820;
var statearr_31869_31921 = state_31820__$1;
(statearr_31869_31921[(2)] = inst_31810);

(statearr_31869_31921[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (30))){
var inst_31771 = (state_31820[(10)]);
var inst_31780 = (state_31820[(11)]);
var inst_31772 = (state_31820[(13)]);
var inst_31797 = cljs.core.empty_QMARK_(inst_31771);
var inst_31798 = (inst_31772.cljs$core$IFn$_invoke$arity$1 ? inst_31772.cljs$core$IFn$_invoke$arity$1(inst_31780) : inst_31772.call(null,inst_31780));
var inst_31799 = cljs.core.not(inst_31798);
var inst_31800 = (inst_31797) && (inst_31799);
var state_31820__$1 = state_31820;
var statearr_31870_31922 = state_31820__$1;
(statearr_31870_31922[(2)] = inst_31800);

(statearr_31870_31922[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (10))){
var inst_31722 = (state_31820[(8)]);
var inst_31743 = (state_31820[(2)]);
var inst_31744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31743,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31743,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31743,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31747 = inst_31722;
var state_31820__$1 = (function (){var statearr_31871 = state_31820;
(statearr_31871[(16)] = inst_31745);

(statearr_31871[(17)] = inst_31744);

(statearr_31871[(18)] = inst_31746);

(statearr_31871[(7)] = inst_31747);

return statearr_31871;
})();
var statearr_31872_31923 = state_31820__$1;
(statearr_31872_31923[(2)] = null);

(statearr_31872_31923[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (18))){
var inst_31762 = (state_31820[(2)]);
var state_31820__$1 = state_31820;
var statearr_31873_31924 = state_31820__$1;
(statearr_31873_31924[(2)] = inst_31762);

(statearr_31873_31924[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (37))){
var state_31820__$1 = state_31820;
var statearr_31874_31925 = state_31820__$1;
(statearr_31874_31925[(2)] = null);

(statearr_31874_31925[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (8))){
var inst_31722 = (state_31820[(8)]);
var inst_31740 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31722);
var state_31820__$1 = state_31820;
var statearr_31875_31926 = state_31820__$1;
(statearr_31875_31926[(2)] = inst_31740);

(statearr_31875_31926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30821__auto___31880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30621__auto__,c__30821__auto___31880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30622__auto__ = null;
var cljs$core$async$mix_$_state_machine__30622__auto____0 = (function (){
var statearr_31876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31876[(0)] = cljs$core$async$mix_$_state_machine__30622__auto__);

(statearr_31876[(1)] = (1));

return statearr_31876;
});
var cljs$core$async$mix_$_state_machine__30622__auto____1 = (function (state_31820){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_31820);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e31877){if((e31877 instanceof Object)){
var ex__30625__auto__ = e31877;
var statearr_31878_31927 = state_31820;
(statearr_31878_31927[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31877;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31928 = state_31820;
state_31820 = G__31928;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30622__auto__ = function(state_31820){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30622__auto____1.call(this,state_31820);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30622__auto____0;
cljs$core$async$mix_$_state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30622__auto____1;
return cljs$core$async$mix_$_state_machine__30622__auto__;
})()
;})(switch__30621__auto__,c__30821__auto___31880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30823__auto__ = (function (){var statearr_31879 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_31879[(6)] = c__30821__auto___31880);

return statearr_31879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(c__30821__auto___31880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5859__auto__ = (((p == null))?null:p);
var m__5860__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5860__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5860__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5860__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5859__auto__ = (((p == null))?null:p);
var m__5860__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5860__auto__.call(null,p,v,ch));
} else {
var m__5860__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5860__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31930 = arguments.length;
switch (G__31930) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5859__auto__ = (((p == null))?null:p);
var m__5860__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5860__auto__.call(null,p));
} else {
var m__5860__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__5860__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5859__auto__ = (((p == null))?null:p);
var m__5860__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5860__auto__.call(null,p,v));
} else {
var m__5860__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__5860__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31934 = arguments.length;
switch (G__31934) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__5126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__5126__auto__,mults){
return (function (p1__31932_SHARP_){
if(cljs.core.truth_((p1__31932_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31932_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31932_SHARP_.call(null,topic)))){
return p1__31932_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31932_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__5126__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31935 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31935 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31936){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31936 = meta31936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31937,meta31936__$1){
var self__ = this;
var _31937__$1 = this;
return (new cljs.core.async.t_cljs$core$async31935(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31936__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31937){
var self__ = this;
var _31937__$1 = this;
return self__.meta31936;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31935.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31935.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31935.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31935.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31935.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31935.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31936","meta31936",-1066330719,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31935.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31935";

cljs.core.async.t_cljs$core$async31935.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async31935");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31935 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31935(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31936){
return (new cljs.core.async.t_cljs$core$async31935(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31936));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31935(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30821__auto___32055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30821__auto___32055,mults,ensure_mult,p){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (c__30821__auto___32055,mults,ensure_mult,p){
return (function (state_32009){
var state_val_32010 = (state_32009[(1)]);
if((state_val_32010 === (7))){
var inst_32005 = (state_32009[(2)]);
var state_32009__$1 = state_32009;
var statearr_32011_32056 = state_32009__$1;
(statearr_32011_32056[(2)] = inst_32005);

(statearr_32011_32056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (20))){
var state_32009__$1 = state_32009;
var statearr_32012_32057 = state_32009__$1;
(statearr_32012_32057[(2)] = null);

(statearr_32012_32057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (1))){
var state_32009__$1 = state_32009;
var statearr_32013_32058 = state_32009__$1;
(statearr_32013_32058[(2)] = null);

(statearr_32013_32058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (24))){
var inst_31988 = (state_32009[(7)]);
var inst_31997 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31988);
var state_32009__$1 = state_32009;
var statearr_32014_32059 = state_32009__$1;
(statearr_32014_32059[(2)] = inst_31997);

(statearr_32014_32059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (4))){
var inst_31940 = (state_32009[(8)]);
var inst_31940__$1 = (state_32009[(2)]);
var inst_31941 = (inst_31940__$1 == null);
var state_32009__$1 = (function (){var statearr_32015 = state_32009;
(statearr_32015[(8)] = inst_31940__$1);

return statearr_32015;
})();
if(cljs.core.truth_(inst_31941)){
var statearr_32016_32060 = state_32009__$1;
(statearr_32016_32060[(1)] = (5));

} else {
var statearr_32017_32061 = state_32009__$1;
(statearr_32017_32061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (15))){
var inst_31982 = (state_32009[(2)]);
var state_32009__$1 = state_32009;
var statearr_32018_32062 = state_32009__$1;
(statearr_32018_32062[(2)] = inst_31982);

(statearr_32018_32062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (21))){
var inst_32002 = (state_32009[(2)]);
var state_32009__$1 = (function (){var statearr_32019 = state_32009;
(statearr_32019[(9)] = inst_32002);

return statearr_32019;
})();
var statearr_32020_32063 = state_32009__$1;
(statearr_32020_32063[(2)] = null);

(statearr_32020_32063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (13))){
var inst_31964 = (state_32009[(10)]);
var inst_31966 = cljs.core.chunked_seq_QMARK_(inst_31964);
var state_32009__$1 = state_32009;
if(inst_31966){
var statearr_32021_32064 = state_32009__$1;
(statearr_32021_32064[(1)] = (16));

} else {
var statearr_32022_32065 = state_32009__$1;
(statearr_32022_32065[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (22))){
var inst_31994 = (state_32009[(2)]);
var state_32009__$1 = state_32009;
if(cljs.core.truth_(inst_31994)){
var statearr_32023_32066 = state_32009__$1;
(statearr_32023_32066[(1)] = (23));

} else {
var statearr_32024_32067 = state_32009__$1;
(statearr_32024_32067[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (6))){
var inst_31940 = (state_32009[(8)]);
var inst_31988 = (state_32009[(7)]);
var inst_31990 = (state_32009[(11)]);
var inst_31988__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31940) : topic_fn.call(null,inst_31940));
var inst_31989 = cljs.core.deref(mults);
var inst_31990__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31989,inst_31988__$1);
var state_32009__$1 = (function (){var statearr_32025 = state_32009;
(statearr_32025[(7)] = inst_31988__$1);

(statearr_32025[(11)] = inst_31990__$1);

return statearr_32025;
})();
if(cljs.core.truth_(inst_31990__$1)){
var statearr_32026_32068 = state_32009__$1;
(statearr_32026_32068[(1)] = (19));

} else {
var statearr_32027_32069 = state_32009__$1;
(statearr_32027_32069[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (25))){
var inst_31999 = (state_32009[(2)]);
var state_32009__$1 = state_32009;
var statearr_32028_32070 = state_32009__$1;
(statearr_32028_32070[(2)] = inst_31999);

(statearr_32028_32070[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (17))){
var inst_31964 = (state_32009[(10)]);
var inst_31973 = cljs.core.first(inst_31964);
var inst_31974 = cljs.core.async.muxch_STAR_(inst_31973);
var inst_31975 = cljs.core.async.close_BANG_(inst_31974);
var inst_31976 = cljs.core.next(inst_31964);
var inst_31950 = inst_31976;
var inst_31951 = null;
var inst_31952 = (0);
var inst_31953 = (0);
var state_32009__$1 = (function (){var statearr_32029 = state_32009;
(statearr_32029[(12)] = inst_31975);

(statearr_32029[(13)] = inst_31953);

(statearr_32029[(14)] = inst_31950);

(statearr_32029[(15)] = inst_31952);

(statearr_32029[(16)] = inst_31951);

return statearr_32029;
})();
var statearr_32030_32071 = state_32009__$1;
(statearr_32030_32071[(2)] = null);

(statearr_32030_32071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (3))){
var inst_32007 = (state_32009[(2)]);
var state_32009__$1 = state_32009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32009__$1,inst_32007);
} else {
if((state_val_32010 === (12))){
var inst_31984 = (state_32009[(2)]);
var state_32009__$1 = state_32009;
var statearr_32031_32072 = state_32009__$1;
(statearr_32031_32072[(2)] = inst_31984);

(statearr_32031_32072[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (2))){
var state_32009__$1 = state_32009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32009__$1,(4),ch);
} else {
if((state_val_32010 === (23))){
var state_32009__$1 = state_32009;
var statearr_32032_32073 = state_32009__$1;
(statearr_32032_32073[(2)] = null);

(statearr_32032_32073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (19))){
var inst_31940 = (state_32009[(8)]);
var inst_31990 = (state_32009[(11)]);
var inst_31992 = cljs.core.async.muxch_STAR_(inst_31990);
var state_32009__$1 = state_32009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32009__$1,(22),inst_31992,inst_31940);
} else {
if((state_val_32010 === (11))){
var inst_31964 = (state_32009[(10)]);
var inst_31950 = (state_32009[(14)]);
var inst_31964__$1 = cljs.core.seq(inst_31950);
var state_32009__$1 = (function (){var statearr_32033 = state_32009;
(statearr_32033[(10)] = inst_31964__$1);

return statearr_32033;
})();
if(inst_31964__$1){
var statearr_32034_32074 = state_32009__$1;
(statearr_32034_32074[(1)] = (13));

} else {
var statearr_32035_32075 = state_32009__$1;
(statearr_32035_32075[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (9))){
var inst_31986 = (state_32009[(2)]);
var state_32009__$1 = state_32009;
var statearr_32036_32076 = state_32009__$1;
(statearr_32036_32076[(2)] = inst_31986);

(statearr_32036_32076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (5))){
var inst_31947 = cljs.core.deref(mults);
var inst_31948 = cljs.core.vals(inst_31947);
var inst_31949 = cljs.core.seq(inst_31948);
var inst_31950 = inst_31949;
var inst_31951 = null;
var inst_31952 = (0);
var inst_31953 = (0);
var state_32009__$1 = (function (){var statearr_32037 = state_32009;
(statearr_32037[(13)] = inst_31953);

(statearr_32037[(14)] = inst_31950);

(statearr_32037[(15)] = inst_31952);

(statearr_32037[(16)] = inst_31951);

return statearr_32037;
})();
var statearr_32038_32077 = state_32009__$1;
(statearr_32038_32077[(2)] = null);

(statearr_32038_32077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (14))){
var state_32009__$1 = state_32009;
var statearr_32042_32078 = state_32009__$1;
(statearr_32042_32078[(2)] = null);

(statearr_32042_32078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (16))){
var inst_31964 = (state_32009[(10)]);
var inst_31968 = cljs.core.chunk_first(inst_31964);
var inst_31969 = cljs.core.chunk_rest(inst_31964);
var inst_31970 = cljs.core.count(inst_31968);
var inst_31950 = inst_31969;
var inst_31951 = inst_31968;
var inst_31952 = inst_31970;
var inst_31953 = (0);
var state_32009__$1 = (function (){var statearr_32043 = state_32009;
(statearr_32043[(13)] = inst_31953);

(statearr_32043[(14)] = inst_31950);

(statearr_32043[(15)] = inst_31952);

(statearr_32043[(16)] = inst_31951);

return statearr_32043;
})();
var statearr_32044_32079 = state_32009__$1;
(statearr_32044_32079[(2)] = null);

(statearr_32044_32079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (10))){
var inst_31953 = (state_32009[(13)]);
var inst_31950 = (state_32009[(14)]);
var inst_31952 = (state_32009[(15)]);
var inst_31951 = (state_32009[(16)]);
var inst_31958 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31951,inst_31953);
var inst_31959 = cljs.core.async.muxch_STAR_(inst_31958);
var inst_31960 = cljs.core.async.close_BANG_(inst_31959);
var inst_31961 = (inst_31953 + (1));
var tmp32039 = inst_31950;
var tmp32040 = inst_31952;
var tmp32041 = inst_31951;
var inst_31950__$1 = tmp32039;
var inst_31951__$1 = tmp32041;
var inst_31952__$1 = tmp32040;
var inst_31953__$1 = inst_31961;
var state_32009__$1 = (function (){var statearr_32045 = state_32009;
(statearr_32045[(13)] = inst_31953__$1);

(statearr_32045[(17)] = inst_31960);

(statearr_32045[(14)] = inst_31950__$1);

(statearr_32045[(15)] = inst_31952__$1);

(statearr_32045[(16)] = inst_31951__$1);

return statearr_32045;
})();
var statearr_32046_32080 = state_32009__$1;
(statearr_32046_32080[(2)] = null);

(statearr_32046_32080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (18))){
var inst_31979 = (state_32009[(2)]);
var state_32009__$1 = state_32009;
var statearr_32047_32081 = state_32009__$1;
(statearr_32047_32081[(2)] = inst_31979);

(statearr_32047_32081[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32010 === (8))){
var inst_31953 = (state_32009[(13)]);
var inst_31952 = (state_32009[(15)]);
var inst_31955 = (inst_31953 < inst_31952);
var inst_31956 = inst_31955;
var state_32009__$1 = state_32009;
if(cljs.core.truth_(inst_31956)){
var statearr_32048_32082 = state_32009__$1;
(statearr_32048_32082[(1)] = (10));

} else {
var statearr_32049_32083 = state_32009__$1;
(statearr_32049_32083[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30821__auto___32055,mults,ensure_mult,p))
;
return ((function (switch__30621__auto__,c__30821__auto___32055,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30622__auto__ = null;
var cljs$core$async$state_machine__30622__auto____0 = (function (){
var statearr_32050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32050[(0)] = cljs$core$async$state_machine__30622__auto__);

(statearr_32050[(1)] = (1));

return statearr_32050;
});
var cljs$core$async$state_machine__30622__auto____1 = (function (state_32009){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_32009);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e32051){if((e32051 instanceof Object)){
var ex__30625__auto__ = e32051;
var statearr_32052_32084 = state_32009;
(statearr_32052_32084[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32051;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32085 = state_32009;
state_32009 = G__32085;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$state_machine__30622__auto__ = function(state_32009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30622__auto____1.call(this,state_32009);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30622__auto____0;
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30622__auto____1;
return cljs$core$async$state_machine__30622__auto__;
})()
;})(switch__30621__auto__,c__30821__auto___32055,mults,ensure_mult,p))
})();
var state__30823__auto__ = (function (){var statearr_32053 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_32053[(6)] = c__30821__auto___32055);

return statearr_32053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(c__30821__auto___32055,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32087 = arguments.length;
switch (G__32087) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32090 = arguments.length;
switch (G__32090) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32093 = arguments.length;
switch (G__32093) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30821__auto___32160 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30821__auto___32160,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (c__30821__auto___32160,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32132){
var state_val_32133 = (state_32132[(1)]);
if((state_val_32133 === (7))){
var state_32132__$1 = state_32132;
var statearr_32134_32161 = state_32132__$1;
(statearr_32134_32161[(2)] = null);

(statearr_32134_32161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (1))){
var state_32132__$1 = state_32132;
var statearr_32135_32162 = state_32132__$1;
(statearr_32135_32162[(2)] = null);

(statearr_32135_32162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (4))){
var inst_32096 = (state_32132[(7)]);
var inst_32098 = (inst_32096 < cnt);
var state_32132__$1 = state_32132;
if(cljs.core.truth_(inst_32098)){
var statearr_32136_32163 = state_32132__$1;
(statearr_32136_32163[(1)] = (6));

} else {
var statearr_32137_32164 = state_32132__$1;
(statearr_32137_32164[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (15))){
var inst_32128 = (state_32132[(2)]);
var state_32132__$1 = state_32132;
var statearr_32138_32165 = state_32132__$1;
(statearr_32138_32165[(2)] = inst_32128);

(statearr_32138_32165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (13))){
var inst_32121 = cljs.core.async.close_BANG_(out);
var state_32132__$1 = state_32132;
var statearr_32139_32166 = state_32132__$1;
(statearr_32139_32166[(2)] = inst_32121);

(statearr_32139_32166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (6))){
var state_32132__$1 = state_32132;
var statearr_32140_32167 = state_32132__$1;
(statearr_32140_32167[(2)] = null);

(statearr_32140_32167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (3))){
var inst_32130 = (state_32132[(2)]);
var state_32132__$1 = state_32132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32132__$1,inst_32130);
} else {
if((state_val_32133 === (12))){
var inst_32118 = (state_32132[(8)]);
var inst_32118__$1 = (state_32132[(2)]);
var inst_32119 = cljs.core.some(cljs.core.nil_QMARK_,inst_32118__$1);
var state_32132__$1 = (function (){var statearr_32141 = state_32132;
(statearr_32141[(8)] = inst_32118__$1);

return statearr_32141;
})();
if(cljs.core.truth_(inst_32119)){
var statearr_32142_32168 = state_32132__$1;
(statearr_32142_32168[(1)] = (13));

} else {
var statearr_32143_32169 = state_32132__$1;
(statearr_32143_32169[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (2))){
var inst_32095 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32096 = (0);
var state_32132__$1 = (function (){var statearr_32144 = state_32132;
(statearr_32144[(7)] = inst_32096);

(statearr_32144[(9)] = inst_32095);

return statearr_32144;
})();
var statearr_32145_32170 = state_32132__$1;
(statearr_32145_32170[(2)] = null);

(statearr_32145_32170[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (11))){
var inst_32096 = (state_32132[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32132,(10),Object,null,(9));
var inst_32105 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32096) : chs__$1.call(null,inst_32096));
var inst_32106 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32096) : done.call(null,inst_32096));
var inst_32107 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32105,inst_32106);
var state_32132__$1 = state_32132;
var statearr_32146_32171 = state_32132__$1;
(statearr_32146_32171[(2)] = inst_32107);


cljs.core.async.impl.ioc_helpers.process_exception(state_32132__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (9))){
var inst_32096 = (state_32132[(7)]);
var inst_32109 = (state_32132[(2)]);
var inst_32110 = (inst_32096 + (1));
var inst_32096__$1 = inst_32110;
var state_32132__$1 = (function (){var statearr_32147 = state_32132;
(statearr_32147[(7)] = inst_32096__$1);

(statearr_32147[(10)] = inst_32109);

return statearr_32147;
})();
var statearr_32148_32172 = state_32132__$1;
(statearr_32148_32172[(2)] = null);

(statearr_32148_32172[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (5))){
var inst_32116 = (state_32132[(2)]);
var state_32132__$1 = (function (){var statearr_32149 = state_32132;
(statearr_32149[(11)] = inst_32116);

return statearr_32149;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32132__$1,(12),dchan);
} else {
if((state_val_32133 === (14))){
var inst_32118 = (state_32132[(8)]);
var inst_32123 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32118);
var state_32132__$1 = state_32132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32132__$1,(16),out,inst_32123);
} else {
if((state_val_32133 === (16))){
var inst_32125 = (state_32132[(2)]);
var state_32132__$1 = (function (){var statearr_32150 = state_32132;
(statearr_32150[(12)] = inst_32125);

return statearr_32150;
})();
var statearr_32151_32173 = state_32132__$1;
(statearr_32151_32173[(2)] = null);

(statearr_32151_32173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (10))){
var inst_32100 = (state_32132[(2)]);
var inst_32101 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32132__$1 = (function (){var statearr_32152 = state_32132;
(statearr_32152[(13)] = inst_32100);

return statearr_32152;
})();
var statearr_32153_32174 = state_32132__$1;
(statearr_32153_32174[(2)] = inst_32101);


cljs.core.async.impl.ioc_helpers.process_exception(state_32132__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32133 === (8))){
var inst_32114 = (state_32132[(2)]);
var state_32132__$1 = state_32132;
var statearr_32154_32175 = state_32132__$1;
(statearr_32154_32175[(2)] = inst_32114);

(statearr_32154_32175[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30821__auto___32160,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30621__auto__,c__30821__auto___32160,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30622__auto__ = null;
var cljs$core$async$state_machine__30622__auto____0 = (function (){
var statearr_32155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32155[(0)] = cljs$core$async$state_machine__30622__auto__);

(statearr_32155[(1)] = (1));

return statearr_32155;
});
var cljs$core$async$state_machine__30622__auto____1 = (function (state_32132){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_32132);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e32156){if((e32156 instanceof Object)){
var ex__30625__auto__ = e32156;
var statearr_32157_32176 = state_32132;
(statearr_32157_32176[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32156;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32177 = state_32132;
state_32132 = G__32177;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$state_machine__30622__auto__ = function(state_32132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30622__auto____1.call(this,state_32132);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30622__auto____0;
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30622__auto____1;
return cljs$core$async$state_machine__30622__auto__;
})()
;})(switch__30621__auto__,c__30821__auto___32160,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30823__auto__ = (function (){var statearr_32158 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_32158[(6)] = c__30821__auto___32160);

return statearr_32158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(c__30821__auto___32160,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32180 = arguments.length;
switch (G__32180) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30821__auto___32234 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30821__auto___32234,out){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (c__30821__auto___32234,out){
return (function (state_32212){
var state_val_32213 = (state_32212[(1)]);
if((state_val_32213 === (7))){
var inst_32191 = (state_32212[(7)]);
var inst_32192 = (state_32212[(8)]);
var inst_32191__$1 = (state_32212[(2)]);
var inst_32192__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32191__$1,(0),null);
var inst_32193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32191__$1,(1),null);
var inst_32194 = (inst_32192__$1 == null);
var state_32212__$1 = (function (){var statearr_32214 = state_32212;
(statearr_32214[(7)] = inst_32191__$1);

(statearr_32214[(8)] = inst_32192__$1);

(statearr_32214[(9)] = inst_32193);

return statearr_32214;
})();
if(cljs.core.truth_(inst_32194)){
var statearr_32215_32235 = state_32212__$1;
(statearr_32215_32235[(1)] = (8));

} else {
var statearr_32216_32236 = state_32212__$1;
(statearr_32216_32236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (1))){
var inst_32181 = cljs.core.vec(chs);
var inst_32182 = inst_32181;
var state_32212__$1 = (function (){var statearr_32217 = state_32212;
(statearr_32217[(10)] = inst_32182);

return statearr_32217;
})();
var statearr_32218_32237 = state_32212__$1;
(statearr_32218_32237[(2)] = null);

(statearr_32218_32237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (4))){
var inst_32182 = (state_32212[(10)]);
var state_32212__$1 = state_32212;
return cljs.core.async.ioc_alts_BANG_(state_32212__$1,(7),inst_32182);
} else {
if((state_val_32213 === (6))){
var inst_32208 = (state_32212[(2)]);
var state_32212__$1 = state_32212;
var statearr_32219_32238 = state_32212__$1;
(statearr_32219_32238[(2)] = inst_32208);

(statearr_32219_32238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (3))){
var inst_32210 = (state_32212[(2)]);
var state_32212__$1 = state_32212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32212__$1,inst_32210);
} else {
if((state_val_32213 === (2))){
var inst_32182 = (state_32212[(10)]);
var inst_32184 = cljs.core.count(inst_32182);
var inst_32185 = (inst_32184 > (0));
var state_32212__$1 = state_32212;
if(cljs.core.truth_(inst_32185)){
var statearr_32221_32239 = state_32212__$1;
(statearr_32221_32239[(1)] = (4));

} else {
var statearr_32222_32240 = state_32212__$1;
(statearr_32222_32240[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (11))){
var inst_32182 = (state_32212[(10)]);
var inst_32201 = (state_32212[(2)]);
var tmp32220 = inst_32182;
var inst_32182__$1 = tmp32220;
var state_32212__$1 = (function (){var statearr_32223 = state_32212;
(statearr_32223[(11)] = inst_32201);

(statearr_32223[(10)] = inst_32182__$1);

return statearr_32223;
})();
var statearr_32224_32241 = state_32212__$1;
(statearr_32224_32241[(2)] = null);

(statearr_32224_32241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (9))){
var inst_32192 = (state_32212[(8)]);
var state_32212__$1 = state_32212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32212__$1,(11),out,inst_32192);
} else {
if((state_val_32213 === (5))){
var inst_32206 = cljs.core.async.close_BANG_(out);
var state_32212__$1 = state_32212;
var statearr_32225_32242 = state_32212__$1;
(statearr_32225_32242[(2)] = inst_32206);

(statearr_32225_32242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (10))){
var inst_32204 = (state_32212[(2)]);
var state_32212__$1 = state_32212;
var statearr_32226_32243 = state_32212__$1;
(statearr_32226_32243[(2)] = inst_32204);

(statearr_32226_32243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (8))){
var inst_32191 = (state_32212[(7)]);
var inst_32192 = (state_32212[(8)]);
var inst_32193 = (state_32212[(9)]);
var inst_32182 = (state_32212[(10)]);
var inst_32196 = (function (){var cs = inst_32182;
var vec__32187 = inst_32191;
var v = inst_32192;
var c = inst_32193;
return ((function (cs,vec__32187,v,c,inst_32191,inst_32192,inst_32193,inst_32182,state_val_32213,c__30821__auto___32234,out){
return (function (p1__32178_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32178_SHARP_);
});
;})(cs,vec__32187,v,c,inst_32191,inst_32192,inst_32193,inst_32182,state_val_32213,c__30821__auto___32234,out))
})();
var inst_32197 = cljs.core.filterv(inst_32196,inst_32182);
var inst_32182__$1 = inst_32197;
var state_32212__$1 = (function (){var statearr_32227 = state_32212;
(statearr_32227[(10)] = inst_32182__$1);

return statearr_32227;
})();
var statearr_32228_32244 = state_32212__$1;
(statearr_32228_32244[(2)] = null);

(statearr_32228_32244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30821__auto___32234,out))
;
return ((function (switch__30621__auto__,c__30821__auto___32234,out){
return (function() {
var cljs$core$async$state_machine__30622__auto__ = null;
var cljs$core$async$state_machine__30622__auto____0 = (function (){
var statearr_32229 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32229[(0)] = cljs$core$async$state_machine__30622__auto__);

(statearr_32229[(1)] = (1));

return statearr_32229;
});
var cljs$core$async$state_machine__30622__auto____1 = (function (state_32212){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_32212);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e32230){if((e32230 instanceof Object)){
var ex__30625__auto__ = e32230;
var statearr_32231_32245 = state_32212;
(statearr_32231_32245[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32230;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32246 = state_32212;
state_32212 = G__32246;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$state_machine__30622__auto__ = function(state_32212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30622__auto____1.call(this,state_32212);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30622__auto____0;
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30622__auto____1;
return cljs$core$async$state_machine__30622__auto__;
})()
;})(switch__30621__auto__,c__30821__auto___32234,out))
})();
var state__30823__auto__ = (function (){var statearr_32232 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_32232[(6)] = c__30821__auto___32234);

return statearr_32232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(c__30821__auto___32234,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32248 = arguments.length;
switch (G__32248) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30821__auto___32293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30821__auto___32293,out){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (c__30821__auto___32293,out){
return (function (state_32272){
var state_val_32273 = (state_32272[(1)]);
if((state_val_32273 === (7))){
var inst_32254 = (state_32272[(7)]);
var inst_32254__$1 = (state_32272[(2)]);
var inst_32255 = (inst_32254__$1 == null);
var inst_32256 = cljs.core.not(inst_32255);
var state_32272__$1 = (function (){var statearr_32274 = state_32272;
(statearr_32274[(7)] = inst_32254__$1);

return statearr_32274;
})();
if(inst_32256){
var statearr_32275_32294 = state_32272__$1;
(statearr_32275_32294[(1)] = (8));

} else {
var statearr_32276_32295 = state_32272__$1;
(statearr_32276_32295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (1))){
var inst_32249 = (0);
var state_32272__$1 = (function (){var statearr_32277 = state_32272;
(statearr_32277[(8)] = inst_32249);

return statearr_32277;
})();
var statearr_32278_32296 = state_32272__$1;
(statearr_32278_32296[(2)] = null);

(statearr_32278_32296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (4))){
var state_32272__$1 = state_32272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32272__$1,(7),ch);
} else {
if((state_val_32273 === (6))){
var inst_32267 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
var statearr_32279_32297 = state_32272__$1;
(statearr_32279_32297[(2)] = inst_32267);

(statearr_32279_32297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (3))){
var inst_32269 = (state_32272[(2)]);
var inst_32270 = cljs.core.async.close_BANG_(out);
var state_32272__$1 = (function (){var statearr_32280 = state_32272;
(statearr_32280[(9)] = inst_32269);

return statearr_32280;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32272__$1,inst_32270);
} else {
if((state_val_32273 === (2))){
var inst_32249 = (state_32272[(8)]);
var inst_32251 = (inst_32249 < n);
var state_32272__$1 = state_32272;
if(cljs.core.truth_(inst_32251)){
var statearr_32281_32298 = state_32272__$1;
(statearr_32281_32298[(1)] = (4));

} else {
var statearr_32282_32299 = state_32272__$1;
(statearr_32282_32299[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (11))){
var inst_32249 = (state_32272[(8)]);
var inst_32259 = (state_32272[(2)]);
var inst_32260 = (inst_32249 + (1));
var inst_32249__$1 = inst_32260;
var state_32272__$1 = (function (){var statearr_32283 = state_32272;
(statearr_32283[(8)] = inst_32249__$1);

(statearr_32283[(10)] = inst_32259);

return statearr_32283;
})();
var statearr_32284_32300 = state_32272__$1;
(statearr_32284_32300[(2)] = null);

(statearr_32284_32300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (9))){
var state_32272__$1 = state_32272;
var statearr_32285_32301 = state_32272__$1;
(statearr_32285_32301[(2)] = null);

(statearr_32285_32301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (5))){
var state_32272__$1 = state_32272;
var statearr_32286_32302 = state_32272__$1;
(statearr_32286_32302[(2)] = null);

(statearr_32286_32302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (10))){
var inst_32264 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
var statearr_32287_32303 = state_32272__$1;
(statearr_32287_32303[(2)] = inst_32264);

(statearr_32287_32303[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (8))){
var inst_32254 = (state_32272[(7)]);
var state_32272__$1 = state_32272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32272__$1,(11),out,inst_32254);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30821__auto___32293,out))
;
return ((function (switch__30621__auto__,c__30821__auto___32293,out){
return (function() {
var cljs$core$async$state_machine__30622__auto__ = null;
var cljs$core$async$state_machine__30622__auto____0 = (function (){
var statearr_32288 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32288[(0)] = cljs$core$async$state_machine__30622__auto__);

(statearr_32288[(1)] = (1));

return statearr_32288;
});
var cljs$core$async$state_machine__30622__auto____1 = (function (state_32272){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_32272);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e32289){if((e32289 instanceof Object)){
var ex__30625__auto__ = e32289;
var statearr_32290_32304 = state_32272;
(statearr_32290_32304[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32289;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32305 = state_32272;
state_32272 = G__32305;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$state_machine__30622__auto__ = function(state_32272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30622__auto____1.call(this,state_32272);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30622__auto____0;
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30622__auto____1;
return cljs$core$async$state_machine__30622__auto__;
})()
;})(switch__30621__auto__,c__30821__auto___32293,out))
})();
var state__30823__auto__ = (function (){var statearr_32291 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_32291[(6)] = c__30821__auto___32293);

return statearr_32291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(c__30821__auto___32293,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32307 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32307 = (function (f,ch,meta32308){
this.f = f;
this.ch = ch;
this.meta32308 = meta32308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32309,meta32308__$1){
var self__ = this;
var _32309__$1 = this;
return (new cljs.core.async.t_cljs$core$async32307(self__.f,self__.ch,meta32308__$1));
});

cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32309){
var self__ = this;
var _32309__$1 = this;
return self__.meta32308;
});

cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32310 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32310 = (function (f,ch,meta32308,_,fn1,meta32311){
this.f = f;
this.ch = ch;
this.meta32308 = meta32308;
this._ = _;
this.fn1 = fn1;
this.meta32311 = meta32311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32312,meta32311__$1){
var self__ = this;
var _32312__$1 = this;
return (new cljs.core.async.t_cljs$core$async32310(self__.f,self__.ch,self__.meta32308,self__._,self__.fn1,meta32311__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32312){
var self__ = this;
var _32312__$1 = this;
return self__.meta32311;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32310.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32306_SHARP_){
var G__32313 = (((p1__32306_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32306_SHARP_) : self__.f.call(null,p1__32306_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32313) : f1.call(null,G__32313));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32310.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32308","meta32308",-1477013793,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32307","cljs.core.async/t_cljs$core$async32307",1170332114,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32311","meta32311",529177708,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32310.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32310";

cljs.core.async.t_cljs$core$async32310.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async32310");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32310 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32310(f__$1,ch__$1,meta32308__$1,___$2,fn1__$1,meta32311){
return (new cljs.core.async.t_cljs$core$async32310(f__$1,ch__$1,meta32308__$1,___$2,fn1__$1,meta32311));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32310(self__.f,self__.ch,self__.meta32308,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5114__auto__ = ret;
if(cljs.core.truth_(and__5114__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__5114__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32314 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32314) : self__.f.call(null,G__32314));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32307.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32308","meta32308",-1477013793,null)], null);
});

cljs.core.async.t_cljs$core$async32307.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32307";

cljs.core.async.t_cljs$core$async32307.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async32307");
});

cljs.core.async.__GT_t_cljs$core$async32307 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32307(f__$1,ch__$1,meta32308){
return (new cljs.core.async.t_cljs$core$async32307(f__$1,ch__$1,meta32308));
});

}

return (new cljs.core.async.t_cljs$core$async32307(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32315 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32315 = (function (f,ch,meta32316){
this.f = f;
this.ch = ch;
this.meta32316 = meta32316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32317,meta32316__$1){
var self__ = this;
var _32317__$1 = this;
return (new cljs.core.async.t_cljs$core$async32315(self__.f,self__.ch,meta32316__$1));
});

cljs.core.async.t_cljs$core$async32315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32317){
var self__ = this;
var _32317__$1 = this;
return self__.meta32316;
});

cljs.core.async.t_cljs$core$async32315.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32315.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32315.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32315.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32315.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32315.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32316","meta32316",-1593979183,null)], null);
});

cljs.core.async.t_cljs$core$async32315.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32315";

cljs.core.async.t_cljs$core$async32315.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async32315");
});

cljs.core.async.__GT_t_cljs$core$async32315 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32315(f__$1,ch__$1,meta32316){
return (new cljs.core.async.t_cljs$core$async32315(f__$1,ch__$1,meta32316));
});

}

return (new cljs.core.async.t_cljs$core$async32315(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32318 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32318 = (function (p,ch,meta32319){
this.p = p;
this.ch = ch;
this.meta32319 = meta32319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32320,meta32319__$1){
var self__ = this;
var _32320__$1 = this;
return (new cljs.core.async.t_cljs$core$async32318(self__.p,self__.ch,meta32319__$1));
});

cljs.core.async.t_cljs$core$async32318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32320){
var self__ = this;
var _32320__$1 = this;
return self__.meta32319;
});

cljs.core.async.t_cljs$core$async32318.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32318.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32318.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32318.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32318.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32318.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32318.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32319","meta32319",485693757,null)], null);
});

cljs.core.async.t_cljs$core$async32318.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32318";

cljs.core.async.t_cljs$core$async32318.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async32318");
});

cljs.core.async.__GT_t_cljs$core$async32318 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32318(p__$1,ch__$1,meta32319){
return (new cljs.core.async.t_cljs$core$async32318(p__$1,ch__$1,meta32319));
});

}

return (new cljs.core.async.t_cljs$core$async32318(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32322 = arguments.length;
switch (G__32322) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30821__auto___32362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30821__auto___32362,out){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (c__30821__auto___32362,out){
return (function (state_32343){
var state_val_32344 = (state_32343[(1)]);
if((state_val_32344 === (7))){
var inst_32339 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
var statearr_32345_32363 = state_32343__$1;
(statearr_32345_32363[(2)] = inst_32339);

(statearr_32345_32363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (1))){
var state_32343__$1 = state_32343;
var statearr_32346_32364 = state_32343__$1;
(statearr_32346_32364[(2)] = null);

(statearr_32346_32364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (4))){
var inst_32325 = (state_32343[(7)]);
var inst_32325__$1 = (state_32343[(2)]);
var inst_32326 = (inst_32325__$1 == null);
var state_32343__$1 = (function (){var statearr_32347 = state_32343;
(statearr_32347[(7)] = inst_32325__$1);

return statearr_32347;
})();
if(cljs.core.truth_(inst_32326)){
var statearr_32348_32365 = state_32343__$1;
(statearr_32348_32365[(1)] = (5));

} else {
var statearr_32349_32366 = state_32343__$1;
(statearr_32349_32366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (6))){
var inst_32325 = (state_32343[(7)]);
var inst_32330 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32325) : p.call(null,inst_32325));
var state_32343__$1 = state_32343;
if(cljs.core.truth_(inst_32330)){
var statearr_32350_32367 = state_32343__$1;
(statearr_32350_32367[(1)] = (8));

} else {
var statearr_32351_32368 = state_32343__$1;
(statearr_32351_32368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (3))){
var inst_32341 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32343__$1,inst_32341);
} else {
if((state_val_32344 === (2))){
var state_32343__$1 = state_32343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32343__$1,(4),ch);
} else {
if((state_val_32344 === (11))){
var inst_32333 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
var statearr_32352_32369 = state_32343__$1;
(statearr_32352_32369[(2)] = inst_32333);

(statearr_32352_32369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (9))){
var state_32343__$1 = state_32343;
var statearr_32353_32370 = state_32343__$1;
(statearr_32353_32370[(2)] = null);

(statearr_32353_32370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (5))){
var inst_32328 = cljs.core.async.close_BANG_(out);
var state_32343__$1 = state_32343;
var statearr_32354_32371 = state_32343__$1;
(statearr_32354_32371[(2)] = inst_32328);

(statearr_32354_32371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (10))){
var inst_32336 = (state_32343[(2)]);
var state_32343__$1 = (function (){var statearr_32355 = state_32343;
(statearr_32355[(8)] = inst_32336);

return statearr_32355;
})();
var statearr_32356_32372 = state_32343__$1;
(statearr_32356_32372[(2)] = null);

(statearr_32356_32372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (8))){
var inst_32325 = (state_32343[(7)]);
var state_32343__$1 = state_32343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32343__$1,(11),out,inst_32325);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30821__auto___32362,out))
;
return ((function (switch__30621__auto__,c__30821__auto___32362,out){
return (function() {
var cljs$core$async$state_machine__30622__auto__ = null;
var cljs$core$async$state_machine__30622__auto____0 = (function (){
var statearr_32357 = [null,null,null,null,null,null,null,null,null];
(statearr_32357[(0)] = cljs$core$async$state_machine__30622__auto__);

(statearr_32357[(1)] = (1));

return statearr_32357;
});
var cljs$core$async$state_machine__30622__auto____1 = (function (state_32343){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_32343);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e32358){if((e32358 instanceof Object)){
var ex__30625__auto__ = e32358;
var statearr_32359_32373 = state_32343;
(statearr_32359_32373[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32358;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32374 = state_32343;
state_32343 = G__32374;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$state_machine__30622__auto__ = function(state_32343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30622__auto____1.call(this,state_32343);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30622__auto____0;
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30622__auto____1;
return cljs$core$async$state_machine__30622__auto__;
})()
;})(switch__30621__auto__,c__30821__auto___32362,out))
})();
var state__30823__auto__ = (function (){var statearr_32360 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_32360[(6)] = c__30821__auto___32362);

return statearr_32360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(c__30821__auto___32362,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32376 = arguments.length;
switch (G__32376) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30821__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30821__auto__){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (c__30821__auto__){
return (function (state_32439){
var state_val_32440 = (state_32439[(1)]);
if((state_val_32440 === (7))){
var inst_32435 = (state_32439[(2)]);
var state_32439__$1 = state_32439;
var statearr_32441_32479 = state_32439__$1;
(statearr_32441_32479[(2)] = inst_32435);

(statearr_32441_32479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (20))){
var inst_32405 = (state_32439[(7)]);
var inst_32416 = (state_32439[(2)]);
var inst_32417 = cljs.core.next(inst_32405);
var inst_32391 = inst_32417;
var inst_32392 = null;
var inst_32393 = (0);
var inst_32394 = (0);
var state_32439__$1 = (function (){var statearr_32442 = state_32439;
(statearr_32442[(8)] = inst_32416);

(statearr_32442[(9)] = inst_32394);

(statearr_32442[(10)] = inst_32393);

(statearr_32442[(11)] = inst_32391);

(statearr_32442[(12)] = inst_32392);

return statearr_32442;
})();
var statearr_32443_32480 = state_32439__$1;
(statearr_32443_32480[(2)] = null);

(statearr_32443_32480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (1))){
var state_32439__$1 = state_32439;
var statearr_32444_32481 = state_32439__$1;
(statearr_32444_32481[(2)] = null);

(statearr_32444_32481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (4))){
var inst_32380 = (state_32439[(13)]);
var inst_32380__$1 = (state_32439[(2)]);
var inst_32381 = (inst_32380__$1 == null);
var state_32439__$1 = (function (){var statearr_32445 = state_32439;
(statearr_32445[(13)] = inst_32380__$1);

return statearr_32445;
})();
if(cljs.core.truth_(inst_32381)){
var statearr_32446_32482 = state_32439__$1;
(statearr_32446_32482[(1)] = (5));

} else {
var statearr_32447_32483 = state_32439__$1;
(statearr_32447_32483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (15))){
var state_32439__$1 = state_32439;
var statearr_32451_32484 = state_32439__$1;
(statearr_32451_32484[(2)] = null);

(statearr_32451_32484[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (21))){
var state_32439__$1 = state_32439;
var statearr_32452_32485 = state_32439__$1;
(statearr_32452_32485[(2)] = null);

(statearr_32452_32485[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (13))){
var inst_32394 = (state_32439[(9)]);
var inst_32393 = (state_32439[(10)]);
var inst_32391 = (state_32439[(11)]);
var inst_32392 = (state_32439[(12)]);
var inst_32401 = (state_32439[(2)]);
var inst_32402 = (inst_32394 + (1));
var tmp32448 = inst_32393;
var tmp32449 = inst_32391;
var tmp32450 = inst_32392;
var inst_32391__$1 = tmp32449;
var inst_32392__$1 = tmp32450;
var inst_32393__$1 = tmp32448;
var inst_32394__$1 = inst_32402;
var state_32439__$1 = (function (){var statearr_32453 = state_32439;
(statearr_32453[(14)] = inst_32401);

(statearr_32453[(9)] = inst_32394__$1);

(statearr_32453[(10)] = inst_32393__$1);

(statearr_32453[(11)] = inst_32391__$1);

(statearr_32453[(12)] = inst_32392__$1);

return statearr_32453;
})();
var statearr_32454_32486 = state_32439__$1;
(statearr_32454_32486[(2)] = null);

(statearr_32454_32486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (22))){
var state_32439__$1 = state_32439;
var statearr_32455_32487 = state_32439__$1;
(statearr_32455_32487[(2)] = null);

(statearr_32455_32487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (6))){
var inst_32380 = (state_32439[(13)]);
var inst_32389 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32380) : f.call(null,inst_32380));
var inst_32390 = cljs.core.seq(inst_32389);
var inst_32391 = inst_32390;
var inst_32392 = null;
var inst_32393 = (0);
var inst_32394 = (0);
var state_32439__$1 = (function (){var statearr_32456 = state_32439;
(statearr_32456[(9)] = inst_32394);

(statearr_32456[(10)] = inst_32393);

(statearr_32456[(11)] = inst_32391);

(statearr_32456[(12)] = inst_32392);

return statearr_32456;
})();
var statearr_32457_32488 = state_32439__$1;
(statearr_32457_32488[(2)] = null);

(statearr_32457_32488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (17))){
var inst_32405 = (state_32439[(7)]);
var inst_32409 = cljs.core.chunk_first(inst_32405);
var inst_32410 = cljs.core.chunk_rest(inst_32405);
var inst_32411 = cljs.core.count(inst_32409);
var inst_32391 = inst_32410;
var inst_32392 = inst_32409;
var inst_32393 = inst_32411;
var inst_32394 = (0);
var state_32439__$1 = (function (){var statearr_32458 = state_32439;
(statearr_32458[(9)] = inst_32394);

(statearr_32458[(10)] = inst_32393);

(statearr_32458[(11)] = inst_32391);

(statearr_32458[(12)] = inst_32392);

return statearr_32458;
})();
var statearr_32459_32489 = state_32439__$1;
(statearr_32459_32489[(2)] = null);

(statearr_32459_32489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (3))){
var inst_32437 = (state_32439[(2)]);
var state_32439__$1 = state_32439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32439__$1,inst_32437);
} else {
if((state_val_32440 === (12))){
var inst_32425 = (state_32439[(2)]);
var state_32439__$1 = state_32439;
var statearr_32460_32490 = state_32439__$1;
(statearr_32460_32490[(2)] = inst_32425);

(statearr_32460_32490[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (2))){
var state_32439__$1 = state_32439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32439__$1,(4),in$);
} else {
if((state_val_32440 === (23))){
var inst_32433 = (state_32439[(2)]);
var state_32439__$1 = state_32439;
var statearr_32461_32491 = state_32439__$1;
(statearr_32461_32491[(2)] = inst_32433);

(statearr_32461_32491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (19))){
var inst_32420 = (state_32439[(2)]);
var state_32439__$1 = state_32439;
var statearr_32462_32492 = state_32439__$1;
(statearr_32462_32492[(2)] = inst_32420);

(statearr_32462_32492[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (11))){
var inst_32391 = (state_32439[(11)]);
var inst_32405 = (state_32439[(7)]);
var inst_32405__$1 = cljs.core.seq(inst_32391);
var state_32439__$1 = (function (){var statearr_32463 = state_32439;
(statearr_32463[(7)] = inst_32405__$1);

return statearr_32463;
})();
if(inst_32405__$1){
var statearr_32464_32493 = state_32439__$1;
(statearr_32464_32493[(1)] = (14));

} else {
var statearr_32465_32494 = state_32439__$1;
(statearr_32465_32494[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (9))){
var inst_32427 = (state_32439[(2)]);
var inst_32428 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32439__$1 = (function (){var statearr_32466 = state_32439;
(statearr_32466[(15)] = inst_32427);

return statearr_32466;
})();
if(cljs.core.truth_(inst_32428)){
var statearr_32467_32495 = state_32439__$1;
(statearr_32467_32495[(1)] = (21));

} else {
var statearr_32468_32496 = state_32439__$1;
(statearr_32468_32496[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (5))){
var inst_32383 = cljs.core.async.close_BANG_(out);
var state_32439__$1 = state_32439;
var statearr_32469_32497 = state_32439__$1;
(statearr_32469_32497[(2)] = inst_32383);

(statearr_32469_32497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (14))){
var inst_32405 = (state_32439[(7)]);
var inst_32407 = cljs.core.chunked_seq_QMARK_(inst_32405);
var state_32439__$1 = state_32439;
if(inst_32407){
var statearr_32470_32498 = state_32439__$1;
(statearr_32470_32498[(1)] = (17));

} else {
var statearr_32471_32499 = state_32439__$1;
(statearr_32471_32499[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (16))){
var inst_32423 = (state_32439[(2)]);
var state_32439__$1 = state_32439;
var statearr_32472_32500 = state_32439__$1;
(statearr_32472_32500[(2)] = inst_32423);

(statearr_32472_32500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (10))){
var inst_32394 = (state_32439[(9)]);
var inst_32392 = (state_32439[(12)]);
var inst_32399 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32392,inst_32394);
var state_32439__$1 = state_32439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32439__$1,(13),out,inst_32399);
} else {
if((state_val_32440 === (18))){
var inst_32405 = (state_32439[(7)]);
var inst_32414 = cljs.core.first(inst_32405);
var state_32439__$1 = state_32439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32439__$1,(20),out,inst_32414);
} else {
if((state_val_32440 === (8))){
var inst_32394 = (state_32439[(9)]);
var inst_32393 = (state_32439[(10)]);
var inst_32396 = (inst_32394 < inst_32393);
var inst_32397 = inst_32396;
var state_32439__$1 = state_32439;
if(cljs.core.truth_(inst_32397)){
var statearr_32473_32501 = state_32439__$1;
(statearr_32473_32501[(1)] = (10));

} else {
var statearr_32474_32502 = state_32439__$1;
(statearr_32474_32502[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30821__auto__))
;
return ((function (switch__30621__auto__,c__30821__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30622__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30622__auto____0 = (function (){
var statearr_32475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32475[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30622__auto__);

(statearr_32475[(1)] = (1));

return statearr_32475;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30622__auto____1 = (function (state_32439){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_32439);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e32476){if((e32476 instanceof Object)){
var ex__30625__auto__ = e32476;
var statearr_32477_32503 = state_32439;
(statearr_32477_32503[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32476;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32504 = state_32439;
state_32439 = G__32504;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30622__auto__ = function(state_32439){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30622__auto____1.call(this,state_32439);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30622__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30622__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30622__auto__;
})()
;})(switch__30621__auto__,c__30821__auto__))
})();
var state__30823__auto__ = (function (){var statearr_32478 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_32478[(6)] = c__30821__auto__);

return statearr_32478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(c__30821__auto__))
);

return c__30821__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32506 = arguments.length;
switch (G__32506) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32509 = arguments.length;
switch (G__32509) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32512 = arguments.length;
switch (G__32512) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30821__auto___32559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30821__auto___32559,out){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (c__30821__auto___32559,out){
return (function (state_32536){
var state_val_32537 = (state_32536[(1)]);
if((state_val_32537 === (7))){
var inst_32531 = (state_32536[(2)]);
var state_32536__$1 = state_32536;
var statearr_32538_32560 = state_32536__$1;
(statearr_32538_32560[(2)] = inst_32531);

(statearr_32538_32560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (1))){
var inst_32513 = null;
var state_32536__$1 = (function (){var statearr_32539 = state_32536;
(statearr_32539[(7)] = inst_32513);

return statearr_32539;
})();
var statearr_32540_32561 = state_32536__$1;
(statearr_32540_32561[(2)] = null);

(statearr_32540_32561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (4))){
var inst_32516 = (state_32536[(8)]);
var inst_32516__$1 = (state_32536[(2)]);
var inst_32517 = (inst_32516__$1 == null);
var inst_32518 = cljs.core.not(inst_32517);
var state_32536__$1 = (function (){var statearr_32541 = state_32536;
(statearr_32541[(8)] = inst_32516__$1);

return statearr_32541;
})();
if(inst_32518){
var statearr_32542_32562 = state_32536__$1;
(statearr_32542_32562[(1)] = (5));

} else {
var statearr_32543_32563 = state_32536__$1;
(statearr_32543_32563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (6))){
var state_32536__$1 = state_32536;
var statearr_32544_32564 = state_32536__$1;
(statearr_32544_32564[(2)] = null);

(statearr_32544_32564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (3))){
var inst_32533 = (state_32536[(2)]);
var inst_32534 = cljs.core.async.close_BANG_(out);
var state_32536__$1 = (function (){var statearr_32545 = state_32536;
(statearr_32545[(9)] = inst_32533);

return statearr_32545;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32536__$1,inst_32534);
} else {
if((state_val_32537 === (2))){
var state_32536__$1 = state_32536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32536__$1,(4),ch);
} else {
if((state_val_32537 === (11))){
var inst_32516 = (state_32536[(8)]);
var inst_32525 = (state_32536[(2)]);
var inst_32513 = inst_32516;
var state_32536__$1 = (function (){var statearr_32546 = state_32536;
(statearr_32546[(10)] = inst_32525);

(statearr_32546[(7)] = inst_32513);

return statearr_32546;
})();
var statearr_32547_32565 = state_32536__$1;
(statearr_32547_32565[(2)] = null);

(statearr_32547_32565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (9))){
var inst_32516 = (state_32536[(8)]);
var state_32536__$1 = state_32536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32536__$1,(11),out,inst_32516);
} else {
if((state_val_32537 === (5))){
var inst_32516 = (state_32536[(8)]);
var inst_32513 = (state_32536[(7)]);
var inst_32520 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32516,inst_32513);
var state_32536__$1 = state_32536;
if(inst_32520){
var statearr_32549_32566 = state_32536__$1;
(statearr_32549_32566[(1)] = (8));

} else {
var statearr_32550_32567 = state_32536__$1;
(statearr_32550_32567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (10))){
var inst_32528 = (state_32536[(2)]);
var state_32536__$1 = state_32536;
var statearr_32551_32568 = state_32536__$1;
(statearr_32551_32568[(2)] = inst_32528);

(statearr_32551_32568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32537 === (8))){
var inst_32513 = (state_32536[(7)]);
var tmp32548 = inst_32513;
var inst_32513__$1 = tmp32548;
var state_32536__$1 = (function (){var statearr_32552 = state_32536;
(statearr_32552[(7)] = inst_32513__$1);

return statearr_32552;
})();
var statearr_32553_32569 = state_32536__$1;
(statearr_32553_32569[(2)] = null);

(statearr_32553_32569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30821__auto___32559,out))
;
return ((function (switch__30621__auto__,c__30821__auto___32559,out){
return (function() {
var cljs$core$async$state_machine__30622__auto__ = null;
var cljs$core$async$state_machine__30622__auto____0 = (function (){
var statearr_32554 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32554[(0)] = cljs$core$async$state_machine__30622__auto__);

(statearr_32554[(1)] = (1));

return statearr_32554;
});
var cljs$core$async$state_machine__30622__auto____1 = (function (state_32536){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_32536);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e32555){if((e32555 instanceof Object)){
var ex__30625__auto__ = e32555;
var statearr_32556_32570 = state_32536;
(statearr_32556_32570[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32555;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32571 = state_32536;
state_32536 = G__32571;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$state_machine__30622__auto__ = function(state_32536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30622__auto____1.call(this,state_32536);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30622__auto____0;
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30622__auto____1;
return cljs$core$async$state_machine__30622__auto__;
})()
;})(switch__30621__auto__,c__30821__auto___32559,out))
})();
var state__30823__auto__ = (function (){var statearr_32557 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_32557[(6)] = c__30821__auto___32559);

return statearr_32557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(c__30821__auto___32559,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32573 = arguments.length;
switch (G__32573) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30821__auto___32639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30821__auto___32639,out){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (c__30821__auto___32639,out){
return (function (state_32611){
var state_val_32612 = (state_32611[(1)]);
if((state_val_32612 === (7))){
var inst_32607 = (state_32611[(2)]);
var state_32611__$1 = state_32611;
var statearr_32613_32640 = state_32611__$1;
(statearr_32613_32640[(2)] = inst_32607);

(statearr_32613_32640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32612 === (1))){
var inst_32574 = (new Array(n));
var inst_32575 = inst_32574;
var inst_32576 = (0);
var state_32611__$1 = (function (){var statearr_32614 = state_32611;
(statearr_32614[(7)] = inst_32575);

(statearr_32614[(8)] = inst_32576);

return statearr_32614;
})();
var statearr_32615_32641 = state_32611__$1;
(statearr_32615_32641[(2)] = null);

(statearr_32615_32641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32612 === (4))){
var inst_32579 = (state_32611[(9)]);
var inst_32579__$1 = (state_32611[(2)]);
var inst_32580 = (inst_32579__$1 == null);
var inst_32581 = cljs.core.not(inst_32580);
var state_32611__$1 = (function (){var statearr_32616 = state_32611;
(statearr_32616[(9)] = inst_32579__$1);

return statearr_32616;
})();
if(inst_32581){
var statearr_32617_32642 = state_32611__$1;
(statearr_32617_32642[(1)] = (5));

} else {
var statearr_32618_32643 = state_32611__$1;
(statearr_32618_32643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32612 === (15))){
var inst_32601 = (state_32611[(2)]);
var state_32611__$1 = state_32611;
var statearr_32619_32644 = state_32611__$1;
(statearr_32619_32644[(2)] = inst_32601);

(statearr_32619_32644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32612 === (13))){
var state_32611__$1 = state_32611;
var statearr_32620_32645 = state_32611__$1;
(statearr_32620_32645[(2)] = null);

(statearr_32620_32645[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32612 === (6))){
var inst_32576 = (state_32611[(8)]);
var inst_32597 = (inst_32576 > (0));
var state_32611__$1 = state_32611;
if(cljs.core.truth_(inst_32597)){
var statearr_32621_32646 = state_32611__$1;
(statearr_32621_32646[(1)] = (12));

} else {
var statearr_32622_32647 = state_32611__$1;
(statearr_32622_32647[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32612 === (3))){
var inst_32609 = (state_32611[(2)]);
var state_32611__$1 = state_32611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32611__$1,inst_32609);
} else {
if((state_val_32612 === (12))){
var inst_32575 = (state_32611[(7)]);
var inst_32599 = cljs.core.vec(inst_32575);
var state_32611__$1 = state_32611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32611__$1,(15),out,inst_32599);
} else {
if((state_val_32612 === (2))){
var state_32611__$1 = state_32611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32611__$1,(4),ch);
} else {
if((state_val_32612 === (11))){
var inst_32591 = (state_32611[(2)]);
var inst_32592 = (new Array(n));
var inst_32575 = inst_32592;
var inst_32576 = (0);
var state_32611__$1 = (function (){var statearr_32623 = state_32611;
(statearr_32623[(7)] = inst_32575);

(statearr_32623[(8)] = inst_32576);

(statearr_32623[(10)] = inst_32591);

return statearr_32623;
})();
var statearr_32624_32648 = state_32611__$1;
(statearr_32624_32648[(2)] = null);

(statearr_32624_32648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32612 === (9))){
var inst_32575 = (state_32611[(7)]);
var inst_32589 = cljs.core.vec(inst_32575);
var state_32611__$1 = state_32611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32611__$1,(11),out,inst_32589);
} else {
if((state_val_32612 === (5))){
var inst_32579 = (state_32611[(9)]);
var inst_32584 = (state_32611[(11)]);
var inst_32575 = (state_32611[(7)]);
var inst_32576 = (state_32611[(8)]);
var inst_32583 = (inst_32575[inst_32576] = inst_32579);
var inst_32584__$1 = (inst_32576 + (1));
var inst_32585 = (inst_32584__$1 < n);
var state_32611__$1 = (function (){var statearr_32625 = state_32611;
(statearr_32625[(11)] = inst_32584__$1);

(statearr_32625[(12)] = inst_32583);

return statearr_32625;
})();
if(cljs.core.truth_(inst_32585)){
var statearr_32626_32649 = state_32611__$1;
(statearr_32626_32649[(1)] = (8));

} else {
var statearr_32627_32650 = state_32611__$1;
(statearr_32627_32650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32612 === (14))){
var inst_32604 = (state_32611[(2)]);
var inst_32605 = cljs.core.async.close_BANG_(out);
var state_32611__$1 = (function (){var statearr_32629 = state_32611;
(statearr_32629[(13)] = inst_32604);

return statearr_32629;
})();
var statearr_32630_32651 = state_32611__$1;
(statearr_32630_32651[(2)] = inst_32605);

(statearr_32630_32651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32612 === (10))){
var inst_32595 = (state_32611[(2)]);
var state_32611__$1 = state_32611;
var statearr_32631_32652 = state_32611__$1;
(statearr_32631_32652[(2)] = inst_32595);

(statearr_32631_32652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32612 === (8))){
var inst_32584 = (state_32611[(11)]);
var inst_32575 = (state_32611[(7)]);
var tmp32628 = inst_32575;
var inst_32575__$1 = tmp32628;
var inst_32576 = inst_32584;
var state_32611__$1 = (function (){var statearr_32632 = state_32611;
(statearr_32632[(7)] = inst_32575__$1);

(statearr_32632[(8)] = inst_32576);

return statearr_32632;
})();
var statearr_32633_32653 = state_32611__$1;
(statearr_32633_32653[(2)] = null);

(statearr_32633_32653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30821__auto___32639,out))
;
return ((function (switch__30621__auto__,c__30821__auto___32639,out){
return (function() {
var cljs$core$async$state_machine__30622__auto__ = null;
var cljs$core$async$state_machine__30622__auto____0 = (function (){
var statearr_32634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32634[(0)] = cljs$core$async$state_machine__30622__auto__);

(statearr_32634[(1)] = (1));

return statearr_32634;
});
var cljs$core$async$state_machine__30622__auto____1 = (function (state_32611){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_32611);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e32635){if((e32635 instanceof Object)){
var ex__30625__auto__ = e32635;
var statearr_32636_32654 = state_32611;
(statearr_32636_32654[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32635;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32655 = state_32611;
state_32611 = G__32655;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$state_machine__30622__auto__ = function(state_32611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30622__auto____1.call(this,state_32611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30622__auto____0;
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30622__auto____1;
return cljs$core$async$state_machine__30622__auto__;
})()
;})(switch__30621__auto__,c__30821__auto___32639,out))
})();
var state__30823__auto__ = (function (){var statearr_32637 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_32637[(6)] = c__30821__auto___32639);

return statearr_32637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(c__30821__auto___32639,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32657 = arguments.length;
switch (G__32657) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30821__auto___32727 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30821__auto___32727,out){
return (function (){
var f__30822__auto__ = (function (){var switch__30621__auto__ = ((function (c__30821__auto___32727,out){
return (function (state_32699){
var state_val_32700 = (state_32699[(1)]);
if((state_val_32700 === (7))){
var inst_32695 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
var statearr_32701_32728 = state_32699__$1;
(statearr_32701_32728[(2)] = inst_32695);

(statearr_32701_32728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (1))){
var inst_32658 = [];
var inst_32659 = inst_32658;
var inst_32660 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32699__$1 = (function (){var statearr_32702 = state_32699;
(statearr_32702[(7)] = inst_32659);

(statearr_32702[(8)] = inst_32660);

return statearr_32702;
})();
var statearr_32703_32729 = state_32699__$1;
(statearr_32703_32729[(2)] = null);

(statearr_32703_32729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (4))){
var inst_32663 = (state_32699[(9)]);
var inst_32663__$1 = (state_32699[(2)]);
var inst_32664 = (inst_32663__$1 == null);
var inst_32665 = cljs.core.not(inst_32664);
var state_32699__$1 = (function (){var statearr_32704 = state_32699;
(statearr_32704[(9)] = inst_32663__$1);

return statearr_32704;
})();
if(inst_32665){
var statearr_32705_32730 = state_32699__$1;
(statearr_32705_32730[(1)] = (5));

} else {
var statearr_32706_32731 = state_32699__$1;
(statearr_32706_32731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (15))){
var inst_32689 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
var statearr_32707_32732 = state_32699__$1;
(statearr_32707_32732[(2)] = inst_32689);

(statearr_32707_32732[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (13))){
var state_32699__$1 = state_32699;
var statearr_32708_32733 = state_32699__$1;
(statearr_32708_32733[(2)] = null);

(statearr_32708_32733[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (6))){
var inst_32659 = (state_32699[(7)]);
var inst_32684 = inst_32659.length;
var inst_32685 = (inst_32684 > (0));
var state_32699__$1 = state_32699;
if(cljs.core.truth_(inst_32685)){
var statearr_32709_32734 = state_32699__$1;
(statearr_32709_32734[(1)] = (12));

} else {
var statearr_32710_32735 = state_32699__$1;
(statearr_32710_32735[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (3))){
var inst_32697 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32699__$1,inst_32697);
} else {
if((state_val_32700 === (12))){
var inst_32659 = (state_32699[(7)]);
var inst_32687 = cljs.core.vec(inst_32659);
var state_32699__$1 = state_32699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32699__$1,(15),out,inst_32687);
} else {
if((state_val_32700 === (2))){
var state_32699__$1 = state_32699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32699__$1,(4),ch);
} else {
if((state_val_32700 === (11))){
var inst_32667 = (state_32699[(10)]);
var inst_32663 = (state_32699[(9)]);
var inst_32677 = (state_32699[(2)]);
var inst_32678 = [];
var inst_32679 = inst_32678.push(inst_32663);
var inst_32659 = inst_32678;
var inst_32660 = inst_32667;
var state_32699__$1 = (function (){var statearr_32711 = state_32699;
(statearr_32711[(11)] = inst_32679);

(statearr_32711[(7)] = inst_32659);

(statearr_32711[(8)] = inst_32660);

(statearr_32711[(12)] = inst_32677);

return statearr_32711;
})();
var statearr_32712_32736 = state_32699__$1;
(statearr_32712_32736[(2)] = null);

(statearr_32712_32736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (9))){
var inst_32659 = (state_32699[(7)]);
var inst_32675 = cljs.core.vec(inst_32659);
var state_32699__$1 = state_32699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32699__$1,(11),out,inst_32675);
} else {
if((state_val_32700 === (5))){
var inst_32667 = (state_32699[(10)]);
var inst_32663 = (state_32699[(9)]);
var inst_32660 = (state_32699[(8)]);
var inst_32667__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32663) : f.call(null,inst_32663));
var inst_32668 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32667__$1,inst_32660);
var inst_32669 = cljs.core.keyword_identical_QMARK_(inst_32660,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32670 = (inst_32668) || (inst_32669);
var state_32699__$1 = (function (){var statearr_32713 = state_32699;
(statearr_32713[(10)] = inst_32667__$1);

return statearr_32713;
})();
if(cljs.core.truth_(inst_32670)){
var statearr_32714_32737 = state_32699__$1;
(statearr_32714_32737[(1)] = (8));

} else {
var statearr_32715_32738 = state_32699__$1;
(statearr_32715_32738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (14))){
var inst_32692 = (state_32699[(2)]);
var inst_32693 = cljs.core.async.close_BANG_(out);
var state_32699__$1 = (function (){var statearr_32717 = state_32699;
(statearr_32717[(13)] = inst_32692);

return statearr_32717;
})();
var statearr_32718_32739 = state_32699__$1;
(statearr_32718_32739[(2)] = inst_32693);

(statearr_32718_32739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (10))){
var inst_32682 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
var statearr_32719_32740 = state_32699__$1;
(statearr_32719_32740[(2)] = inst_32682);

(statearr_32719_32740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (8))){
var inst_32667 = (state_32699[(10)]);
var inst_32663 = (state_32699[(9)]);
var inst_32659 = (state_32699[(7)]);
var inst_32672 = inst_32659.push(inst_32663);
var tmp32716 = inst_32659;
var inst_32659__$1 = tmp32716;
var inst_32660 = inst_32667;
var state_32699__$1 = (function (){var statearr_32720 = state_32699;
(statearr_32720[(7)] = inst_32659__$1);

(statearr_32720[(14)] = inst_32672);

(statearr_32720[(8)] = inst_32660);

return statearr_32720;
})();
var statearr_32721_32741 = state_32699__$1;
(statearr_32721_32741[(2)] = null);

(statearr_32721_32741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30821__auto___32727,out))
;
return ((function (switch__30621__auto__,c__30821__auto___32727,out){
return (function() {
var cljs$core$async$state_machine__30622__auto__ = null;
var cljs$core$async$state_machine__30622__auto____0 = (function (){
var statearr_32722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32722[(0)] = cljs$core$async$state_machine__30622__auto__);

(statearr_32722[(1)] = (1));

return statearr_32722;
});
var cljs$core$async$state_machine__30622__auto____1 = (function (state_32699){
while(true){
var ret_value__30623__auto__ = (function (){try{while(true){
var result__30624__auto__ = switch__30621__auto__(state_32699);
if(cljs.core.keyword_identical_QMARK_(result__30624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30624__auto__;
}
break;
}
}catch (e32723){if((e32723 instanceof Object)){
var ex__30625__auto__ = e32723;
var statearr_32724_32742 = state_32699;
(statearr_32724_32742[(5)] = ex__30625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32723;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32743 = state_32699;
state_32699 = G__32743;
continue;
} else {
return ret_value__30623__auto__;
}
break;
}
});
cljs$core$async$state_machine__30622__auto__ = function(state_32699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30622__auto____1.call(this,state_32699);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30622__auto____0;
cljs$core$async$state_machine__30622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30622__auto____1;
return cljs$core$async$state_machine__30622__auto__;
})()
;})(switch__30621__auto__,c__30821__auto___32727,out))
})();
var state__30823__auto__ = (function (){var statearr_32725 = (f__30822__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30822__auto__.cljs$core$IFn$_invoke$arity$0() : f__30822__auto__.call(null));
(statearr_32725[(6)] = c__30821__auto___32727);

return statearr_32725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30823__auto__);
});})(c__30821__auto___32727,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


module.exports = cljs.core.async;

//# sourceMappingURL=cljs.core.async.js.map
