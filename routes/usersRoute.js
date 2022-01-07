const router = require('express').Router();

const { create } = require('../controllers/usersController');

const validate = require('../middlewares/ValidateUser');

router.post('/', validate.name, validate.email, 
validate.registeredEmail, validate.password, create);

module.exports = router; 