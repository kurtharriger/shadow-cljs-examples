(ns demo.app
  (:require ["react" :as react :refer (createElement)]
            ["react-native" :as rn :refer (Text View StyleSheet)]))

;; extremely basic, no framework just raw interop

(def styles
  (-> {:container
       {:flex 1
        :backgroundColor "#fff"
        :alignItems "center"
        :justifyContent "center"}}
      (clj->js)
      (->> (.create StyleSheet))))

(defn foo []
  (createElement View #js {:style (.. styles -container)}

    (createElement Text nil "Hello from CLJS!")
    ))
