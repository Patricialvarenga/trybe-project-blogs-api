const router = require('express').Router();

const { create } = require('../controllers/categoriesController');

const validate = require('../middlewares/ValidateCategory');

const { validateToken } = require('../middlewares/ValidateToken');

router.post('/', validate.name, validateToken, create);

module.exports = router; 