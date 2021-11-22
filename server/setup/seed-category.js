const mongoose = require("mongoose");
const fs = require("fs");
require('dotenv').config()

const { upsert } = require("../src/services/category-service");

console.log('Seed starting');
const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
console.log(uri);
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const connectWithDb = () => {
  mongoose.connect(uri, options, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Database connection established");
      fs.readFile("./setup/category.json", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          const categories = JSON.parse(data);
          categories.forEach(async (category) => {
            const newCategory = await upsert(category);
            console.log(newCategory);
          });
        }
      });
    }
  });
};

connectWithDb();
console.log(`Seed finished`);