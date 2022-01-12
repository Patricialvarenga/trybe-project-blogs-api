const router = require('express').Router();

const { create, getAll, getById } = require('../controllers/usersController');

const validate = require('../middlewares/ValidateUser');

const { validateToken } = require('../middlewares/ValidateToken');

router.post('/', validate.name, validate.email, validate.password, create);
router.get('/', validateToken, getAll);
router.get('/:id', validateToken, getById);

module.exports = router;