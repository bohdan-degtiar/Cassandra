const separateColumnsByTable = (columns) => {
  const tables = columns.reduce((tables, { tableName, columnName, type }) => {
    return {
      ...tables,
      [tableName]: { ...tables[tableName], [columnName]: type },
    };
  }, {});

  return Object.entries(tables);
};
module.exports = { separateColumnsByTable };
