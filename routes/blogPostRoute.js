const router = require('express').Router();

const { create } = require('../controllers/blogsPostController');

const validate = require('../middlewares/ValidateBlogPost');

const { validateToken } = require('../middlewares/ValidateToken');

router.post('/', validate.title, validate.content, validate.categoryIds, validateToken, create);

module.exports = router;