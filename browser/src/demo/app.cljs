(ns demo.app
  (:require ["react" :as react :refer (createElement)]
            ["react-dom" :refer (render)]
            ["js-nacl" :as nacl-factory]
            ["material-ui/RaisedButton" :as button]
            ["material-ui/styles/getMuiTheme" :as get-theme]
            ["material-ui/styles/MuiThemeProvider" :as theme-provider]
            [cljss.core :refer [inject-global]]
            [reagent.core :as reagent]
            [cljss.reagent :refer-macros [defstyled]]))

(inject-global
  {:body {:margin 0
          :background-color "#BCD"
          :color "#242424"}})

(defstyled App :div
  {:margin "2em"
   :color "red"})

;; example of using material-ui which has been rather difficult before
;; the /default access is required due to the way material-ui is packaged
;; because of the ES6 conversion

(def theme (get-theme/default #js {}))

(defn app []
  (createElement theme-provider/default #js {:theme theme}
    (createElement button/default nil "Hello World")))

(defn use-nacl [nacl]
  (let [bytes (.. nacl (random_bytes 16))]
    (js/console.log "nacl" bytes (.. nacl (to_hex bytes)))))

(nacl-factory/instantiate use-nacl)

(defn ^:export mount-root! [] 
  #_(render (app) (js/document.getElementById "app"))
  (reagent/render [App [:h1 "hi"]]))

(mount-root!)