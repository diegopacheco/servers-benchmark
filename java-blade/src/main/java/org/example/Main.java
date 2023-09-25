package org.example;

import com.hellokaton.blade.Blade;

import java.util.UUID;

public class Main {
    public static void main(String[] args) {
        Blade.create().get("/uuid", ctx -> ctx.text(UUID.randomUUID().toString())).start();
    }
}