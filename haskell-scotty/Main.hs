{-# LANGUAGE OverloadedStrings #-}

module Main where

import Web.Scotty
import Data.UUID.V4 (nextRandom)
import Data.UUID (UUID)
import qualified Data.Text.Lazy as TL

main :: IO ()
main = scotty 3000 $ do
    get "/" $ do
        uuid <- liftAndCatchIO nextRandom
        text (TL.pack (show uuid))