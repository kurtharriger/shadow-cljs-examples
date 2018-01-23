(ns demo.app
  (:require ["./foo" :as foo :default x]))

(foo/gimme (js/fetch "/index.html"))

(js/console.log x (foo/hello "CLJS"))
