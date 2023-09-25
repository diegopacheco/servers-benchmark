defmodule ElixirCowboyWeb.Router do
  use ElixirCowboyWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", ElixirCowboyWeb do
    pipe_through :api
    get "", UuidController, :world
  end
end
