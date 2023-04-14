const { Client } = require("cassandra-driver");

const { config } = require("./config");
const { app } = require("./app");

const { localDataCenter, keyspace, host, port } = config;

const contactPoint = `${host}:${port}`;

console.info("Start...");

const client = new Client({
  contactPoints: [contactPoint],
  localDataCenter,
  keyspace,
});

app({ client, keyspace }, { exit: true });
