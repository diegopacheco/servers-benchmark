import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.http.HttpMethod.*
import java.util.*

fun Application.routes() {
    routing {
        route("/", Companion.Get) {
            handle {
                call.respondText(UUID.randomUUID().toString())
            }
        }
    }
}

fun serve() {
    println("Ktor/Netty running on http://127.0.0.1:8080/")
    embeddedServer(Netty, port = 8080) { routes() }.start(wait = true)
}

class Main {
    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            serve();
        }
    }
}