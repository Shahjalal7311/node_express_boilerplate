const productValidate = require("./product-request-model");
const categoryValidate = require("./category-request-model");

const validate = {
  productSchemaValidate: productValidate,
  categorySchemaValidate: categoryValidate,
}

module.exports = validate;