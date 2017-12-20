(ns demo.app
  (:require ["react" :as react :refer (createElement)]
            ["react-dom" :refer (render)]
            ;;["jquery" :as jq]
            ["js-nacl" :as nacl-factory]
            ["material-ui/RaisedButton" :as button]
            ["material-ui/styles/getMuiTheme" :as get-theme]
            ["material-ui/styles/MuiThemeProvider" :as theme-provider]
            ["@atlaskit/editor-core" :as ec]))

;; example of using material-ui which has been rather difficult before
;; the /default access is required due to the way material-ui is packaged
;; because of the ES6 conversion

(def theme (get-theme/default #js {}))

(defn app []
  (createElement theme-provider/default #js {:theme theme}
    (createElement button/default nil "Hello World")))

(render (app) (js/document.getElementById "app"))

;;(-> (jq "#app")
;;    (.append "this was appended by jQuery"))

(defn use-nacl [nacl]
  (let [bytes (.. nacl (random_bytes 16))]
    (js/console.log "nacl" bytes (.. nacl (to_hex bytes)))))

(nacl-factory/instantiate use-nacl)
