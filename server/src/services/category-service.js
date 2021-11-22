const models = require("../models/data-models");
const {  CategoryViewModel } = require("../models/view-models/category-view-model");
const { NotFound } = require("../utils/errors");
const Model = models.Category;

const getAll = async () => {
    const items = await Model.find();
    let viewModels = items.map((item) => CategoryViewModel.convert(item));
    return viewModels;
};

const save = async (category) => {
    const model = await Model.createNew(category);
    const savedItem = await model.save();
    return savedItem._id;
};

const update = async (category) => {
    const id = category._id;
    let model = await Model.findById(id);
    if (model) {
        model.categoryName = category.categoryName;
        model.updatedAt = Date.now().toString();
        await model.save();
        return model._id;
    }
    throw new NotFound("Category not found by the id: " + id);
};

const deleteById = async (id) => {
    let model = await Model.findById(id);
    if (model) {
        let result = await Model.deleteOne({ _id: id });
        return result;
    }

    throw new NotFound("Category not found by the id: " + id);
};

const getById = async (id) => {
    let model = await Model.findById(id);
    let viewModel = CategoryViewModel.convert(model);
    return viewModel;
};

const search = async (payload) => {
    let dateQuery = {};
    if (payload.fromDate && payload.toDate) {
        dateQuery = { updatedAt: { $gte: payload.fromDate, $lte: payload.toDate } };
    }

    let searchQuery = {};
    if (payload.searchText) {
        searchQuery = { categoryName: { '$regex': payload.searchText, '$options': 'i' } };
    }

    let query = { $and: [dateQuery, searchQuery] };

    const items = await Model.find(query)
        .limit(10).sort({ updatedAt: -1 });
    let viewModels = items.map((item) => CategoryViewModel.convert(item));
    return viewModels;
}

const upsert = async (category) => {
    const item = await Model.findOne(category);
    if (item == null) {
        const model = await Model.createNew(category);
        const savedItem = await model.save();
        return savedItem._id;
    }
    return 'Already exists';
}

module.exports = { getAll, save, update, deleteById, getById, search, upsert };
