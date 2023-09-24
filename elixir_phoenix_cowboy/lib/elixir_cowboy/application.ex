defmodule ElixirCowboy.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      ElixirCowboyWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: ElixirCowboy.PubSub},
      # Start the Endpoint (http/https)
      ElixirCowboyWeb.Endpoint
      # Start a worker by calling: ElixirCowboy.Worker.start_link(arg)
      # {ElixirCowboy.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: ElixirCowboy.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    ElixirCowboyWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
