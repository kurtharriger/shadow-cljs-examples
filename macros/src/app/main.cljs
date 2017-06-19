(ns app.main
  (:require [app.lib :refer (h1 h2)]))

(defn main []
  (prn (h1 {} "foo"))
  (prn (h2 {} "bar")))