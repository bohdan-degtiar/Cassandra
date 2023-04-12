const { Client } = require("cassandra-driver");

const { config } = require("./config");

const { localDataCenter, keyspace, host, port } = config;

const contactPoint = `${host}:${port}`;

console.info("Start...");

const client = new Client({
  contactPoints: [contactPoint],
  localDataCenter,
  keyspace,
});

console.info("Start connection to DB");

client
  .connect()
  .then(() => {
    console.info("Connected to DB");
  })
  .catch((err) => {
    console.log("Connection Error:", err);
  });
