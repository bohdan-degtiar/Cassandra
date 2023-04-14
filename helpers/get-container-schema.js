const {
  cassandraTypeToJsonSchemaTypeMap,
} = require("../maps/cassandra-type-to-json-schema-type.map");

const getContainerSchema = (container) => {
  const containerItems = Object.entries(container);

  return containerItems.reduce((containerSchema, [itemName, itemType]) => {
    const jsonSchemaType = cassandraTypeToJsonSchemaTypeMap[itemType];

    if (!jsonSchemaType) {
      throw new Error("Unexpected cassandra data type");
    }

    return {
      ...containerSchema,
      [itemName]: {
        type: jsonSchemaType,
      },
    };
  }, {});
};

module.exports = { getContainerSchema };
