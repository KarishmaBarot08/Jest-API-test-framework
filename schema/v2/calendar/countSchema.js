const countSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "date": {
        "type": "string"
      },
      "count": {
        "type": "number"
      }
    },
    "required": [
      "date",
      "count"
    ]
  }
};
module.exports = {
  countSchema
};