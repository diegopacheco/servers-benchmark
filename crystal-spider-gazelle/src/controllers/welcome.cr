# description of the welcome klass
require "uuid"

class Welcome < Application
  base "/"

  # A welcome message
  @[AC::Route::GET("/uuid")]
  def index : String
    UUID.random().inspect()
  end

  # For API applications the return value of the function is expected to work with
  # all of the responder blocks (see application.cr)
  # the various responses are returned based on the Accepts header
  @[AC::Route::GET("/api/:example")]
  @[AC::Route::POST("/api/:example")]
  @[AC::Route::GET("/api/other/route")]
  def api(example : Int32) : NamedTuple(result: Int32)
    {
      result: example,
    }
  end

  # this file is built as part of the docker build
  OPENAPI = YAML.parse(File.exists?("openapi.yml") ? File.read("openapi.yml") : "{}")

  # returns the OpenAPI representation of this service
  @[AC::Route::GET("/openapi")]
  def openapi : YAML::Any
    OPENAPI
  end
end
