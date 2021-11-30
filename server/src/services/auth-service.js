const models = require("../models/data-models");
const Model = models.User;

const getUser = async (email) => {
  // const email = 'mdjalal2012@gmail.com';
  let model = await Model.findOne({ email: email });
  return model;
};

module.exports = { getUser };