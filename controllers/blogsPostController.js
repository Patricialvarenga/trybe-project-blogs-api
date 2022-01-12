require('dotenv').config();
const jwt = require('jsonwebtoken');
const service = require('../services/blogPostService');
const { getByEmail } = require('../services/userService');

const secret = 'mySecret';
const jwtConfig = { expiresIn: '60m', algorithm: 'HS256' };

const create = async (req, res) => {
  const token = req.headers.authorization;
  try {
    const { title, categoryIds, content } = req.body;

    const verifyCategoryId = await service.verifyCategory(categoryIds);
    if (!verifyCategoryId) return res.status(400).json({ message: '"categoryIds" not found' });

    const payload = jwt.verify(token, secret, jwtConfig);
    const { user } = await getByEmail(payload.email);

    const response = await service.create({ title, content, categoryIds, userId: user.id });
    return res.status(201).json(response);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getAll = async (req, res) => {
  try { 
    const blogPost = await service.getAllPost();

  return res.status(200).json(blogPost);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
    
    module.exports = { create, getAll };