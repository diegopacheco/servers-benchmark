import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  const myUUID = crypto.randomUUID();

  return c.text(`Random UUID ${myUUID}`);
});

Deno.serve(app.fetch);
