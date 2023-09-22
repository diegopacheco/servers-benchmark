package com.github.diegopacheco.sandboxspring;

import com.github.diegopacheco.sandboxspring.handler.UUIDHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

public class Server {

    public void run() throws IOException {
        System.out.println("Server started on http://127.0.0.1:8080/");

        HttpServer server = HttpServer.create(new InetSocketAddress("localhost", 8080), 0);
        server.createContext("/", new UUIDHandler());
        server.setExecutor(getExecutor());
        server.start();
    }

    private Executor getExecutor() {
        return Boolean.getBoolean("virtual-thread")
                ? Executors.newVirtualThreadPerTaskExecutor()
                : Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors());
    }
}
