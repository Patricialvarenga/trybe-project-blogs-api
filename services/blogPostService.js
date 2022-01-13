const { BlogPost, PostCategory, User, Category } = require('../models');
const { getAll } = require('./categoryService');

// consultei o repositório do colega Flávio Cordeiro para desenvolver o service
const createPostCategory = async (categoryId, postId) => {
  const response = await PostCategory.create({ categoryId, postId });
  return response;
};

const create = async (post) => {
  try {
    const { categoryIds, ...postWithoutCategories } = post;
    const data = { ...postWithoutCategories, published: Date.now(), updated: Date.now() };
    const response = await BlogPost.create(data);
    console.log(response);
    const { id, userId, title, content } = response.dataValues;

    await categoryIds.forEach(async (categoryId) => {
      await createPostCategory(categoryId, id);
    });
    return { id, userId, title, content };
  } catch (err) {
    return { message: err.message };
  }
};

const verifyCategory = async (categories) => {
  try {
    const allCategories = await getAll();
    let response = true;
    categories.forEach(((cat) => {
      const check = allCategories.some((item) => item.id === cat);
      if (!check) {
        response = false;
      }
    }));
    return response;
  } catch (err) {
    return { message: err.message };
  }
};

const getAllPost = async () => {
  try {
    const allPosts = await BlogPost.findAll({ include: 
      [
        { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
        { model: Category, as: 'categories', through: { attributes: [] } },
      ] });
  return allPosts;
  } catch (err) {
    return { message: err.message };
  }
};

module.exports = { create, verifyCategory, getAllPost };