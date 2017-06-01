(ns demo.app
  (:require [shadow.markup.react :as html :refer (defstyled)]
            [shadow.dom :as dom]
            ["react-dom" :refer (render)]))

(defstyled title :h1
  [env]
  {:color "red"})

(defn root []
  (title "hello world!"))

(defn ^:export init []
  ;; can do one time init here
  (js/console.log "app init"))

(defn ^:export start []
  (js/console.log "app start")
  (render (root) (dom/by-id "root")))

(defn stop []
  (js/console.log "app stop"))
