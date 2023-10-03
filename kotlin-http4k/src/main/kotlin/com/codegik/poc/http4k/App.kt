package com.codegik.poc.http4k

import org.http4k.core.Method.GET
import org.http4k.core.Response
import org.http4k.core.Status.Companion.OK
import org.http4k.routing.bind
import org.http4k.routing.routes
import org.http4k.server.SunHttp
import org.http4k.server.asServer
import java.util.*

fun main() {
    println("Server listening on port 8080")
    routes("/uuid" bind GET to {
        Response(OK).body(UUID.randomUUID().toString())
    })
    .asServer(SunHttp(8080))
    .start()
}
