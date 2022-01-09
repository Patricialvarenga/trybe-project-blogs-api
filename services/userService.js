const { User } = require('../models');

// Para usar o parâmetro raw, consultei este tópico:
// https://stackoverflow.com/questions/46380563/get-only-datavalues-from-sequelize-orm
const getAll = async () => {
  try {
    const attributes = ['id', 'displayName', 'email', 'image'];
    const users = await User.findAll({ attributes, raw: true });
    return users;
  } catch (err) {
    return { message: err.message };
  }
};

const getById = async (userId) => {
  try {
    const response = await User.findByPk(userId);
    if (!response) return null;
    const { id, displayName, email, image } = response;
    return { user: { id, displayName, email, image } };
  } catch (err) {
    return { message: err.message };
  }
};

const create = async (user) => {
  try {
    const response = await User.create(user);
    const { id, email } = response.data;
    return { id, email };
  } catch (err) {
    return { message: err.message };
  }
};

// Para usar o parâmetro raw, consultei este tópico:
// https://stackoverflow.com/questions/46380563/get-only-datavalues-from-sequelize-orm
const getByEmail = async (userEmail) => {
  try {
    const response = await User.findOne({ where: { email: userEmail }, raw: true });
    if (!response) return null;
    const { id, displayName, email, image } = response;
    return { user: { id, displayName, email, image } };
  } catch (err) {
    return { message: err.message };
  }
};

module.exports = { create, getByEmail, getAll, getById };