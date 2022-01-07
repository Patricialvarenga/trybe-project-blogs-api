require('dotenv').config();
const jwt = require('jsonwebtoken');
const service = require('../services/loginService');

const secret = 'mySecret';
const jwtConfig = { expiresIn: '60m', algorithm: 'HS256' };

const login = async (req, res) => {
try {
  const { email, password } = req.body;
  const response = await service.getUserByEmailAndPassword(email, password);
  if (!response) return res.status(400).json({ message: 'Invalid fields' });
  if (response.message) return res.status(500).json({ message: response.message });
  const token = jwt.sign({ email, password }, secret, jwtConfig);
  return res.status(200).json({ token });
} catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { login };