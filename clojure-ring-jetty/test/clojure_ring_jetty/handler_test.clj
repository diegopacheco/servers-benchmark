(ns clojure-ring-jetty.handler-test
  (:require [clojure.test :refer :all]
            [ring.mock.request :as mock]
            [clojure-ring-jetty.handler :refer :all]))

(deftest test-app
  (testing "main route"
    (let [response (app (mock/request :get "/"))]
      (is (= (:status response) 200))
      (is (not (empty? (:body response))))))

  (testing "not-found route"
    (let [response (app (mock/request :get "/invalid"))]
      (is (= (:status response) 404)))))
