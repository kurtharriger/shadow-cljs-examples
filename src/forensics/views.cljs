(ns forensics.views
  (:require [re-frame.core :as re-frame]
            [forensics.subs :as subs]
            [reagent-material-ui.core :as ui]))

(defonce theme-defaults {:muiTheme (ui/getMuiTheme ui/darkBaseTheme)})

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:div "Hello from " @name]))
