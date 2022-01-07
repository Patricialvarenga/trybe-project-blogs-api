const email = (req, res, next) => {
    const user = req.body;
    const ErrorMessage = '"email" is not allowed to be empty';
    if (user.email === '') return res.status(400).json({ message: ErrorMessage });
    const validMessage = '"email" is required';
    if (!user.email) return res.status(400).json({ message: validMessage });
    next();
};

const password = (req, res, next) => {
    const user = req.body;
    const ErrorMessage = '"password" is not allowed to be empty';
    if (user.password === '') return res.status(400).json({ message: ErrorMessage });
    const validMessage = '"password" is required';
    if (!user.password) return res.status(400).json({ message: validMessage });
    next();
};

module.exports = {
    email,
    password,
};