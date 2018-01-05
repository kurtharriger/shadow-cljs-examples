(ns cljsjs.material-ui
  (:require ["material-ui" :as MaterialUI]
            ["material-ui/styles" :as MaterialUIStyles]))

(js/goog.exportSymbol "MaterialUI" MaterialUI)
(js/goog.exportSymbol "MaterialUIStyles" MaterialUIStyles)
