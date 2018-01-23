;;; this file only exists to allow me using Cursive to edit the code
;;; it is not required for any of the examples
(defproject thheller/shadow-cljs-examples "0.0.0"
  :description "examples for shadow-cljs"
  :url "https://github.com/thheller/shadow-cljs"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies
  [[org.clojure/clojure "1.9.0"]
   [thheller/shadow-cljs "2.0.141"]]

  :source-paths
  ["cljs-react-app/src"
   "cljs-react-native-app/src"
   "local-js/src"
   "code-split/src"
   "macros/src"
   "webpack/src"
   "electron/src"
   "browser/src"
   "koa/src"])
