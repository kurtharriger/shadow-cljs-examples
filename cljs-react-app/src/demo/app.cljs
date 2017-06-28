(ns demo.app
  (:require [shadow.markup.react :as html :refer ($ defstyled)]
            [shadow.dom :as dom]
            ["react" :as react]
            ["react-dom" :refer (render)]
            ["./foo" :refer (Foo)]))

(defstyled title :h1
  [env]
  {:color "red"})

(defn root []
  (html/div
    (title "CLJS!")
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
