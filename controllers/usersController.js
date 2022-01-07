require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = 'mySecret';
const jwtConfig = { expiresIn: '60m', algorithm: 'HS256' };

const create = async (req, res) => {
try {
  const { displayName, email, password, image } = req.body;
  const response = await User.create({ displayName, email, password, image });
  const { data } = response;
  const token = jwt.sign({ data }, secret, jwtConfig);
  return res.status(201).json({ token });
} catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { create };