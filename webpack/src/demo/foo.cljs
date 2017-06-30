(ns demo.foo
  (:require [shadow.dom :as dom]
            [shadow.markup.css :as css :refer (defstyled)]
            ["react" :as react]
            ["react-dom" :as rdom :refer (render)]))

(defstyled foo :div
  [env]
  {:color "red"})

(defn ^:export hello [who]
  (render (foo (str "Hello, " who "!")) (dom/by-id "app")))
