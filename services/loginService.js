require('dotenv').config();
const { User } = require('../models');

const getUserByEmailAndPassword = async (email, password) => {
  try {
    const response = await User.findOne({ where: { email, password } });
    return response;
  } catch (err) {
    return { message: err.message };
  }
};

module.exports = { getUserByEmailAndPassword };