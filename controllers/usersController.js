require('dotenv').config();
const jwt = require('jsonwebtoken');
const service = require('../services/userService');

const secret = 'mySecret';
const jwtConfig = { expiresIn: '60m', algorithm: 'HS256' };

const create = async (req, res) => {
try {
  const { displayName, email, password, image } = req.body;

  const getUser = await service.getByEmail(email);
    if (getUser) return res.status(409).json({ message: 'User already registered' });

  const response = await service.create({ email, password, displayName, image });
  const token = jwt.sign({ response }, secret, jwtConfig);
  return res.status(201).json({ token });
} catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { create };