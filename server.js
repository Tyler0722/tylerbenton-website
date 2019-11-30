const express = require("express");
const next = require("next");
const fs = require("fs");
const compression = require("compression");

const dev = process.env.NODE_ENV !== "production";
console.log(dev);
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.static("public"));

  server.use(compression());

  server.get("/", (req, res) => {
    app.render(req, res, "/index");
  });

  server.get("/contact", (req, res) => {
    app.render(req, res, "/contact");
  });

  server.get("/about", (req, res) => {
    app.render(req, res, "/about");
  });

  server.get("*", (req, res) => {
    handle(req, res);
  });

  server.listen(3000, () => {
    console.log("Server listening on port 3000.");
  });
});
