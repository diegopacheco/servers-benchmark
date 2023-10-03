{-# LANGUAGE OverloadedStrings #-}

import Network.Wai
import Network.HTTP.Types (status200)
import Network.Wai.Handler.Warp (run)
import Data.UUID.V4 (nextRandom)
import Data.UUID (toString)
import Data.ByteString.Lazy.Char8 (pack)

main :: IO ()
main = do
    putStrLn "Starting Haskell HTTP server on port 3000..."
    run 3000 app

app :: Application
app _ respond = do
    uuid <- nextRandom
    let uuidString = toString uuid
        uuidByteString = pack uuidString
    let response = responseLBS status200 [("Content-Type", "text/plain")] uuidByteString
    respond response
