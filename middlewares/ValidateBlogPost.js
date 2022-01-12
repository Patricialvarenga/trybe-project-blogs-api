const title = (req, res, next) => {
    const { title: valueTitle } = req.body;
    const requiredMessage = '"title" is required';
    if (!valueTitle) return res.status(400).json({ message: requiredMessage });
    next();
};

const content = (req, res, next) => {
    const { content: valueContent } = req.body;
    const requiredMessage = '"content" is required';
    if (!valueContent) return res.status(400).json({ message: requiredMessage });
    next();
};

const categoryIds = (req, res, next) => {
    const { categoryIds: valueCategoryIds } = req.body;
    const requiredMessage = '"categoryIds" is required';
    if (!valueCategoryIds) return res.status(400).json({ message: requiredMessage });
    next();
};

module.exports = {
    title,
    content,
    categoryIds,
    
};