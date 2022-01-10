const { Category } = require('../models');

const create = async (category) => {
  try {
 const newCategory = await Category.create({ name: category });
    return newCategory;
  } catch (error) {
    console.log(error);
  }
};

  module.exports = { create };