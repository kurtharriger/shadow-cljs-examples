(ns build
  (:require [clojure.pprint :refer [pprint]]
            [clojure.java.shell :as shell])

)

(defn resolve-keyword [kw]
  (let [[ns n] ((juxt namespace name) kw)]
    (require (symbol ns))
    (resolve (symbol ns n))))


(defn spit-state [target]
  (fn [{:keys [:shadow.build/stage] :as state}]
    (prn stage)
    (-> state
        #_(dissoc :classpath)
        (#(with-out-str (pprint %)))
        (->> (spit (str "state." (name stage) ".edn"))))
    (target state)))

(defn babelize [target]
  (fn [{:keys [:shadow.build/stage project-dir] :as state}]

    ;; todo: compile-prepare seems too late but configure
    ;; is only run once

    ;; perhaps start my own babel process and hijack the babel service
    ;; in out channels...
    (when #_(= stage :compile-prepare)
        (= stage :configure)
      (prn :babelizing)
      (->  (shell/sh "/bin/sh" "-c" "./node_modules/.bin/babel src -d src-gen"
                     :dir project-dir)
           :out
           print)
      (prn :babelized))

    ;;todo update src to src-gen
    (target state)))

(defn ensure-target-fn [state]
  (if-let [target-fn (:build/target-fn state)]
    [target-fn  state]
    (let [{:keys [:shadow.build/stage :shadow.build/config]} state
          {:keys [:build/shadow-target :build/middleware]} config

          shadow-target-fn (resolve-keyword shadow-target)
          middleware-fns (mapv resolve-keyword middleware)
          target-fn ((apply comp middleware-fns) shadow-target-fn)
          ]
      [target-fn (-> state (assoc :build/target-fn target-fn))])))

(defn custom [state]
  (let [[target-fn state] (ensure-target-fn state)]
    (target-fn state)))
