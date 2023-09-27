package com.example

import akka.actor.typed.ActorRef
import akka.actor.typed.Behavior
import akka.actor.typed.scaladsl.Behaviors

final case class UuidResult(value: String)

object Registry {
  sealed trait Command
  final case class GetUuid(replyTo: ActorRef[UuidResult]) extends Command
  final case class ActionPerformed(description: String)

  def apply(): Behavior[Command] = registry()

  private def registry(): Behavior[Command] =
    Behaviors.receiveMessage {
      case GetUuid(replyTo) =>
        replyTo ! UuidResult(java.util.UUID.randomUUID().toString)
        Behaviors.same
    }
}
