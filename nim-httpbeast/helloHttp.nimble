# Package
version       = "0.1.0"
author        = "Diego Pacheco"
description   = "Server Bench Nim 2x"
license       = "MIT"
srcDir        = "."
bin           = @["helloHttp"]

# Dependencies

requires "nim >= 2.0.0"
requires "httpbeast >= 0.4.0"
requires "uuid4 >= 0.9.3"