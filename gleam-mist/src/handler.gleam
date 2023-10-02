import mist.{Connection, ResponseData}
import gleam/http.{Get}
import gleam/http/response.{Response}
import gleam/bit_builder
import gleam/http/request.{Request}
import mist/internal/handler
import ids/uuid
import gleam/bit_string

type MistService =
  fn(Request(Connection)) -> mist.ResponseData

pub fn handler(req: Request(Connection)) -> Response(ResponseData) {
  let assert Ok(id) = uuid.generate_v4()

  case req.method, request.path_segments(req) {
    Get, ["uuid"] ->
      response.new(200)
      |> response.set_body(mist.Bytes(bit_builder.from_string(id)))
    _, _ ->
      response.new(404)
      |> response.set_body(mist.Bytes(bit_builder.new()))
  }
}
