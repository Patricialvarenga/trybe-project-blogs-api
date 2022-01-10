require('dotenv').config();
const service = require('../services/categoryService');

const getAll = async (_req, res) => {
  try {
    const categories = await service.getAll();
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const create = async (req, res) => {
try {
  const { name } = req.body;
  const category = await service.create(name);
  return res.status(201).json(category);
} catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { create, getAll };