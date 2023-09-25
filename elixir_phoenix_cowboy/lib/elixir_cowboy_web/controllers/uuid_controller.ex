defmodule ElixirCowboyWeb.UuidController do
  use ElixirCowboyWeb, :controller

  def world(conn, _params) do
    send_resp(conn, 200, UUID.uuid1())
  end
end
