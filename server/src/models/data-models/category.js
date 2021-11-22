const mongoose = require("mongoose");

// schema
const categorySchema = new mongoose.Schema({
    categoryName: { type: String, unique: true, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
});

categorySchema.index({ categoryName: 'text' });


// reference model
const Category = mongoose.model("Category", categorySchema);

Category.createNew = async (category) => {
  category._id = new mongoose.Types.ObjectId();
    const model = new Category(category);
    return model;
};


module.exports = Category;
