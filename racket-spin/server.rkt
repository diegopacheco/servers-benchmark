#lang racket

(require spin
         uuid)

(get "/"
    (lambda () (uuid-string)))

(run #:port 8080 #:banner? #t)
