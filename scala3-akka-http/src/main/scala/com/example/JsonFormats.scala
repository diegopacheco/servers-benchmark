package com.example

import com.example.Registry.ActionPerformed
import spray.json.RootJsonFormat
import spray.json.DefaultJsonProtocol

object JsonFormats  {
  import DefaultJsonProtocol._

  implicit val uuidJsonFormat: RootJsonFormat[UuidResult] = jsonFormat1(UuidResult.apply)
  implicit val actionPerformedJsonFormat: RootJsonFormat[ActionPerformed] = jsonFormat1(ActionPerformed.apply)
}
