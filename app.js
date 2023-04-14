const app = async ({ client, keyspace }, { exit = false } = {}) => {
  console.info("Start connection to DB");

  try {
    await client.connect();

    console.info("Connected to DB");
  } catch (err) {
    console.error("Connection Error:", err);
  }

  const { rows: keyspaceColumns } = await client.execute(`
  SELECT table_name AS "tableName", column_name AS "columnName", type
    FROM system_schema.columns
        WHERE keyspace_name = '${keyspace}';
`);

  if (exit) {
    process.exit();
  }
};

module.exports = { app };
