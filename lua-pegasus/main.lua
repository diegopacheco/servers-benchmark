
local pegasus = require 'pegasus'
local uuid = require("uuid")
local server = pegasus:new({ port='8080'})

server:start(function (req, rep)
  rep:write(uuid())
end)