require('dotenv').config();
// const jwt = require('jsonwebtoken');
const service = require('../services/categoryService');

/* const secret = 'mySecret';
const jwtConfig = { expiresIn: '60m', algorithm: 'HS256' }; */

const create = async (req, res) => {
try {
  const { name } = req.body;
  const category = await service.create(name);
  return res.status(201).json(category);
} catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { create };