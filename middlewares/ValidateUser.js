const name = (req, res, next) => {
    const { displayName } = req.body;
    const message = '"displayName" length must be at least 8 characters long';
    if (displayName.length < 8) return res.status(400).json({ message });
    next();
};

// Source: https://forum.blip.ai/t/resolvido-regex-para-validacao-de-email/1635
const email = (req, res, next) => {
    const { email: valueEmail } = req.body;
    const requiredMessage = '"email" is required';
    if (!valueEmail) return res.status(400).json({ message: requiredMessage });
    const regex = /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/;
    const validMessage = '"email" must be a valid email';
    if (!regex.test(valueEmail)) return res.status(400).json({ message: validMessage });
    next();
};

const password = (req, res, next) => {
    const { password: valuePassword } = req.body;
    const requiredMessage = '"password" is required';
    if (!valuePassword) return res.status(400).json({ message: requiredMessage });
    const validMessage = '"password" length must be 6 characters long';
    if (valuePassword.length !== 6) return res.status(400).json({ message: validMessage });
    next();
};

module.exports = {
    name,
    email,
    password,
};