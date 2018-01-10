(ns user
  (:require [shadow.cljs.devtools.api :as dapi]
            [dirac.agent :as dagent]))

(defn cljs-repl []
  (dagent/boot!)
  (dapi/nrepl-select :browser))
