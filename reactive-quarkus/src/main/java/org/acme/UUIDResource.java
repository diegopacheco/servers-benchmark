package org.acme;

import io.smallrye.mutiny.Uni;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import java.util.UUID;

@Path("/uuid")
public class UUIDResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public Uni<String> index() {
        return Uni.createFrom().item( ()-> UUID.randomUUID().toString());
    }
}
