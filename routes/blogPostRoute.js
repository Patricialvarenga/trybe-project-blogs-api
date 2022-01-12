const router = require('express').Router();

const { create, getAll } = require('../controllers/blogsPostController');

const validate = require('../middlewares/ValidateBlogPost');

const { validateToken } = require('../middlewares/ValidateToken');

router.post('/', validate.title, validate.content, validate.categoryIds, validateToken, create);
router.get('/', validateToken, getAll);

module.exports = router;