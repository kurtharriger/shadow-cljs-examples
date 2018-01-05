(ns forensics.views
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [forensics.subs :as subs]
            ["material-ui/styles/getMuiTheme" :as get-theme]
            ["material-ui/styles/MuiThemeProvider" :as theme-provider]
            ["material-ui/RaisedButton" :as button]
            ))

(def theme (get-theme/default #js {}))
(def mui-theme-provider (reagent/adapt-react-class theme-provider/default))
(def button (reagent/adapt-react-class button/default))

(defn main-panel []
  [mui-theme-provider {:theme theme}
   [button "push me"]])
