const { separateColumnsByTable } = require("./separate-columns-by-table");
const { getTableSchema } = require("./get-table-schema");

const convertToJsonSchema = ({ columns }) => {
  const separatedColumnsByTable = separateColumnsByTable(columns);

  const tables = separatedColumnsByTable.map(getTableSchema);

  return JSON.stringify(tables, undefined, 2);
};

module.exports = { convertToJsonSchema };
