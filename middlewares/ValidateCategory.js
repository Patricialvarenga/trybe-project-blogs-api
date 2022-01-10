const name = (req, res, next) => {
    const { name: valueName } = req.body;
    const requiredMessage = '"name" is required';
    if (!valueName) return res.status(400).json({ message: requiredMessage });
    next();
};

module.exports = {
    name,
};