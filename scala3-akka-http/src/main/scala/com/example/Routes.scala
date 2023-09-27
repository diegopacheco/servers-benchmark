package com.example

import akka.http.scaladsl.server.Directives.{onSuccess, *}
import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server.Route
import scala.concurrent.Future
import com.example.Registry.*
import akka.actor.typed.ActorRef
import akka.actor.typed.ActorSystem
import akka.actor.typed.scaladsl.AskPattern.*
import akka.util.Timeout

class Routes(userRegistry: ActorRef[Registry.Command])(implicit val system: ActorSystem[_]) {

  import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport._
  import JsonFormats._

  private implicit val timeout: Timeout = Timeout.create(system.settings.config.getDuration("my-app.routes.ask-timeout"))

  def getUuid(): Future[UuidResult] =
    userRegistry.ask(GetUuid.apply)

  val routes: Route =
    pathPrefix("uuid") {
      concat(
        //#uuid
        pathEnd {
          concat(
            get {
              complete(getUuid())
            },
            post {
              entity(as[UuidResult]) { uuid =>
                onSuccess(getUuid()) { performed =>
                  complete((StatusCodes.Created, performed))
                }
              }
            })
        }
      )
    }

}
