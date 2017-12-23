(ns forensics.views
  (:require [re-frame.core :as re-frame]
            [forensics.subs :as subs]
            [cljss.core :refer [defstyles defkeyframes font-face inject-global]]
            [cljss.reagent :as rss :include-macros true :refer-macros [defstyled]]))

(inject-global
  {:body {:margin 0
          :background-color "#BCD"
          :color "#242424"}})

(defstyled App :div
  {:margin "2em"})

(defn main-panel []
  [App
    (let [name (re-frame/subscribe [::subs/name])]
      [:div "Hello from " @name])])
