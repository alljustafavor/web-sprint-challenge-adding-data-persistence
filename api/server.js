const express = require("express");
const helmet = require("helmet");

const project_router = require("./project/router");
const resource_router = require("./resource/router");
const task_router = require("./task/router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/v1/api/prject", project_router);
server.use("/v1/api/prject", resource_router);
server.use("/v1/api/task", task_router);

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
