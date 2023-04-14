const { JsonSchemaType, CassandraType } = require("../enums/enums");

const cassandraTypeToJsonSchemaTypeMap = {
  [CassandraType.ASCII]: JsonSchemaType.STRING,
  [CassandraType.BIGINT]: JsonSchemaType.INTEGER,
  [CassandraType.BLOB]: JsonSchemaType.STRING,
  [CassandraType.BOOLEAN]: JsonSchemaType.BOOLEAN,
  [CassandraType.COUNTER]: JsonSchemaType.INTEGER,
  [CassandraType.DATE]: JsonSchemaType.STRING,
  [CassandraType.DECIMAL]: JsonSchemaType.NUMBER,
  [CassandraType.DOUBLE]: JsonSchemaType.NUMBER,
  [CassandraType.DURATION]: JsonSchemaType.STRING,
  [CassandraType.FLOAT]: JsonSchemaType.NUMBER,
  [CassandraType.INET]: JsonSchemaType.STRING,
  [CassandraType.INT]: JsonSchemaType.INTEGER,
  [CassandraType.LIST]: JsonSchemaType.ARRAY,
  [CassandraType.MAP]: JsonSchemaType.OBJECT,
  [CassandraType.SET]: JsonSchemaType.ARRAY,
  [CassandraType.SMALLINT]: JsonSchemaType.INTEGER,
  [CassandraType.TEXT]: JsonSchemaType.STRING,
  [CassandraType.TIME]: JsonSchemaType.STRING,
  [CassandraType.TIMESTAMP]: JsonSchemaType.STRING,
  [CassandraType.TIMEUUID]: JsonSchemaType.STRING,
  [CassandraType.TINYINT]: JsonSchemaType.INTEGER,
  //   [CassandraType.TUPLE]: "tuple",
  [CassandraType.UUID]: JsonSchemaType.STRING,
  [CassandraType.VARCHAR]: JsonSchemaType.STRING,
  [CassandraType.VARINT]: JsonSchemaType.INTEGER,
};

module.exports = { cassandraTypeToJsonSchemaTypeMap };
