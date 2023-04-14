const app = async ({ client, keyspace }, { exit = false } = {}) => {
  console.info("Start connection to DB");

  try {
    await client.connect();

    console.info("Connected to DB");
  } catch (err) {
    console.error("Connection Error:", err);
  }

  if (exit) {
    process.exit();
  }
};

module.exports = { app };
