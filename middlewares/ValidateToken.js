const jwt = require('jsonwebtoken');

const secret = 'mySecret';

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || token.length === 0) return res.status(401).json({ message: 'Token not found' });
  try {
    jwt.verify(token, secret);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
 };

 module.exports = { validateToken };