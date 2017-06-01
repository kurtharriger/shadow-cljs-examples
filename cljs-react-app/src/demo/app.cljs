(ns demo.app
  (:require [shadow.markup.react :as html :refer ($ defstyled)]
            [shadow.dom :as dom]
            ["react" :as react]
            ["react-dom" :refer (render)]))

;; the compiled code lives in node_modules/shadow-cljs/demo.app.js
;; since node doesn't have the classpath concept of the JVM
;; we need a relative require path to access JS code
(def Foo (.. (js/require "../../src/demo/foo") -Foo))

;; the ns form doesn't allow relative requires yet
;; ideally I want the require to be relative to the source file
;; this should work at some point, just haven't implemented it yet
;; ["./Foo" :refer (Foo)]

(defstyled title :h1
  [env]
  {:color "red"})

(defn root []
  (html/div
    (title "CLJS")
    ;; $ is a little interop helper
    ($ Foo {:hello "this is from CLJS!!!"})
    ;; this works as well
    (react/createElement Foo #js {:hello "also from CLJS!"})
    ))

(defn ^:export init []
  ;; can do one time init here
  (js/console.log "app init"))

(defn ^:export start []
  (js/console.log "app start")
  (render (root) (dom/by-id "root")))

(defn stop []
  (js/console.log "app stop"))
