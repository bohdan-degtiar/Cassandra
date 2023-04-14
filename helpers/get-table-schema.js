const { SCHEMA_SPECIFICATION } = require("../constants/schema-specification");
const { JsonSchemaType } = require("../enums/json-schema-type");
const { getContainerSchema } = require("./get-container-schema");

const getTableSchema = ([tableName, tableSchema]) => {
  return {
    $schema: SCHEMA_SPECIFICATION,
    type: JsonSchemaType.OBJECT,
    title: tableName,
    properties: getContainerSchema(tableSchema),
  };
};

module.exports = { getTableSchema };
