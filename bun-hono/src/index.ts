import { Hono } from 'hono'
import { randomUUID } from "node:crypto";

const app = new Hono()
app.get('/', (c) => c.text(randomUUID()));

export default app
