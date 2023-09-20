import { Elysia } from "elysia";
import { v4 as uuidv4 } from 'uuid';


const app = new Elysia().get("/", () => uuidv4()).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
