using Genie, Genie.Router
using UUIDs
using Logging

route("/") do
   uuid4()
end

logger = ConsoleLogger(stderr, Logging.Error)
global_logger(logger)

Genie.config.run_as_server = true
Genie.Server.up(8002, async=false)