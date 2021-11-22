const Joi = require('joi');

const schema = Joi.object().keys({
  categoryName: Joi.string().min(3).max(30).required(),
});

const validate = (data) =>{
  const result = schema.validate(data);
  data.createdAt = new Date();
  data.updatedAt = new Date();
  result.value = data;
  return result;
};

module.exports = validate;