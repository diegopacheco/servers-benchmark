open Async
open Http_async

let uuid = fun () -> (Uuidm.to_string (Uuidm.v4_gen (Random.State.make_self_init())()))

let () =
  Command_unix.run
    (Server.run_command ~summary:"http_async server" (fun _addr (_request, _body) ->
       return (Response.create `Ok, Body.Writer.string (uuid()))))
;;