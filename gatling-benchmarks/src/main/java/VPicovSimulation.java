import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import static io.gatling.javaapi.core.CoreDsl.constantUsersPerSec;
import static io.gatling.javaapi.core.CoreDsl.scenario;
import static io.gatling.javaapi.http.HttpDsl.http;

public class VPicovSimulation extends Simulation {

    HttpProtocolBuilder httpProtocol = http
            .baseUrl("http://localhost:8080")
            .acceptHeader("text/html")
            .doNotTrackHeader("1")
            .userAgentHeader("Gat")
            .shareConnections();

    ScenarioBuilder scn = scenario("VPicovSimulation")
            .exec(http("request")
                    .get("/"))
            .pause(5);

    {
        setUp(scn.
                injectOpen(
                        constantUsersPerSec(1_000).during(60)
                )
        ).protocols(httpProtocol);
    }
}