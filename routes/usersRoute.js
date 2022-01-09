const router = require('express').Router();

const { create, getAll } = require('../controllers/usersController');

const validate = require('../middlewares/ValidateUser');

const { validateToken } = require('../middlewares/ValidateToken');

router.post('/', validate.name, validate.email, validate.password, create);
router.get('/', validateToken, getAll);

module.exports = router; 