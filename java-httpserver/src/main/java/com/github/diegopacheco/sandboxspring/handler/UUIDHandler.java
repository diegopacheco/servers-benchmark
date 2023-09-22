package com.github.diegopacheco.sandboxspring.handler;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;
import java.io.OutputStream;
import java.util.UUID;

public class UUIDHandler implements HttpHandler {

    @Override
    public void handle(HttpExchange httpExchange) throws IOException {
        if ("GET".equals(httpExchange.getRequestMethod())) {
            OutputStream outputStream = httpExchange.getResponseBody();
            String uuid = UUID.randomUUID().toString();
            httpExchange.sendResponseHeaders(200, uuid.length());
            outputStream.write(uuid.getBytes());
            outputStream.flush();
            outputStream.close();
        }
    }
}

