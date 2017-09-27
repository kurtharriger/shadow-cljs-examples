(ns demo.app
  (:require ["react" :as react :refer (createElement)]
            ["react-dom" :refer (render)]
            ["material-ui/RaisedButton" :as button]
            ["material-ui/styles/getMuiTheme" :as get-theme]
            ["material-ui/styles/MuiThemeProvider" :as theme-provider]))

;; example of using material-ui which has been rather difficult before
;; the /default access is required due to the way material-ui is packaged
;; because of the ES6 conversion

(def theme (get-theme/default #js {}))

(defn app []
  (createElement theme-provider/default #js {:theme theme}
    (createElement button/default nil "Hello World")))

(render (app) (js/document.getElementById "app"))