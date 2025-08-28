import app from "../app.js";
import { createServer } from "http";
import { parse } from "url";

export default function handler(req, res) {
  const parsedUrl = parse(req.url, true);
  const server = createServer((req, res) => {
    app(req, res);
  });

  server.emit("request", req, res);
}
