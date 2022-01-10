const { Category } = require('../models');

// Para usar o parâmetro raw, consultei este tópico:
// https://stackoverflow.com/questions/46380563/get-only-datavalues-from-sequelize-orm
const getAll = async () => {
  try {
    const attributes = ['id', 'name'];
    const response = await Category.findAll({ attributes, raw: true });
    return response;
  } catch (err) {
    return { message: err.message };
  }
};

const create = async (category) => {
  try {
 const newCategory = await Category.create({ name: category });
    return newCategory;
  } catch (error) {
    console.log(error);
  }
};

  module.exports = { create, getAll };