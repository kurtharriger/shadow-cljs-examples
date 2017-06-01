import registerServiceWorker from './registerServiceWorker';

window["React"] = require("react");
window["ReactDOM"] = require("react-dom");

if (process.env.NODE_ENV !== "production") {
  // this loads and connects the CLJS REPL
  require("shadow-cljs/shadow.cljs.devtools.client.browser");
}

require("./index.css");

var app = require("shadow-cljs/demo.app");
app.init()
app.start();

registerServiceWorker();

