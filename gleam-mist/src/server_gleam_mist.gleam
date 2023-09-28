import gleam/erlang/process
import handler.{handler}
import gleam/http/request.{Request}
import gleam/http/response.{Response}
import mist.{Connection, ResponseData}

pub fn main() {
  //let assert Ok(_) = mist.serve(3000, mist.handler_func(handler.handler))
  let assert Ok(_) =
    fn(req: Request(Connection)) -> Response(ResponseData) {
      handler.handler(req)
    }
    |> mist.new
    |> mist.port(3000)
    |> mist.start_http

  process.sleep_forever()
}
