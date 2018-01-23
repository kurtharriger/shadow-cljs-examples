(ns demo.app-stories
  (:require
    ["@storybook/react" :refer (storiesOf)]
    ["@storybook/addon-actions" :refer (action)]
    [shadow.markup.react :as html :refer (defstyled)]))

(defstyled big-button :button [_]
  {:font-size "2em"})

;; FIXME: write macro to make this nicer

(-> (storiesOf "Button CLJS" js/module)
    (.add "Normal" #(html/button {:onClick (action "click")} "Hello World"))
    (.add "Big" #(big-button {:onClick (action "big click")} "Hello World")))


       
