const { User } = require('../models');

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

module.exports = { create, getByEmail };