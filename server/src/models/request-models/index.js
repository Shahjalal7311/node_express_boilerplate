const productValidate = require("./product-request-model");
const categoryValidate = require("./category-request-model");
const userValidate = require('./user-request-model')

const validate = {
  productSchemaValidate: productValidate,
  categorySchemaValidate: categoryValidate,
  userSchemaValidate: userValidate,
}

module.exports = validate;