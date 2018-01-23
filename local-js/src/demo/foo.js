import cljs, { keyword } from "goog:cljs.core";
import { x } from "goog:demo.bar";

import React from "react";

console.log("bar x", x, React);

function hello(who) {
  // template literals, cljs interop
  return cljs.assoc(null, keyword("hello"), `Hello ${who}!`);
}

function neverUsed() {
  console.log("I am never used and will be deleted!");
}

// async/await
async function gimme(thing) {
  console.log("going to wait for", thing);
  var value = await thing;
  console.log("await value", value)
}

export { hello, gimme };
export default "I got a default too!";
