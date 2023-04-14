const fs = require("fs");

const { convertToJsonSchema } = require("./helpers/helpers");

const app = async ({ client, keyspace }, { exit = false, fileName } = {}) => {
  console.info("Start connection to DB");

  try {
    await client.connect();

    console.info("Connected to DB");
  } catch (err) {
    console.error("Connection Error:", err);
  }

  console.info("Request DB schema");

  const { rows: keyspaceColumns } = await client.execute(`
  SELECT table_name AS "tableName", column_name AS "columnName", type
    FROM system_schema.columns
        WHERE keyspace_name = '${keyspace}';
`);

  console.info("Process DB schema to JSON");

  const jsonSchema = convertToJsonSchema({
    columns: keyspaceColumns,
  });

  console.info("Converting finish");

  console.info("Start saving result file");

  fs.writeFile(fileName, jsonSchema, "utf8", (err) => {
    if (err) {
      console.error("Error during write result file");
    }

    console.info("Result file saved");

    if (exit) {
      console.info("Exit");

      process.exit();
    }
  });
};

module.exports = { app };
