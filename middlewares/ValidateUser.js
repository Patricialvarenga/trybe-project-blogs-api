const { User } = require('../models');

const name = (req, res, next) => {
    const { displayName } = req.body;
    const message = '"displayName" length must be at least 8 characters long';
    if (displayName.length < 8) return res.status(400).json({ message });
    next();
};

const email = (req, res, next) => {
    const { email: valueEmail } = req.body;
    const errorMessage = '"email" is required';
    if (!valueEmail) return res.status(400).json({ message: errorMessage });
    // Source: https://forum.blip.ai/t/resolvido-regex-para-validacao-de-email/1635
    const regex = /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/;
    const validMessage = '"email" must be a valid email';
    if (!regex.test(valueEmail)) return res.status(400).json({ message: validMessage });
    next();
};

const registeredEmail = async (req, res, next) => {
    const { email: valueEmail } = req.body;
    const users = await User.findAll({ where: { email: valueEmail } });
    const errorMessage = 'User already registered';
    if (users.length > 0) return res.status(409).json({ errorMessage });
    next(); 
};

const password = (req, res, next) => {
    const { password: valuePassword } = req.body;
    const errorMessage = '"password" is required';
    if (!valuePassword) return res.status(400).json({ message: errorMessage });
    const validMessage = '"password" length must be 6 characters long';
    if (valuePassword.length !== 6) return res.status(400).json({ message: validMessage });
    next();
};

module.exports = {
    name,
    email,
    registeredEmail,
    password,
};