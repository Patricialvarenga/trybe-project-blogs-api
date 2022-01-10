const router = require('express').Router();

const { create, getAll } = require('../controllers/categoriesController');

const validate = require('../middlewares/ValidateCategory');

const { validateToken } = require('../middlewares/ValidateToken');

router.post('/', validate.name, validateToken, create);
router.get('/', validateToken, getAll);

module.exports = router; 