module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
  }, {
      timestamps: false,
      tableName: 'BlogPosts',
  });
  
  BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, 
      { foreignKey: 'userId', as: 'user' });
  };
  return BlogPost;
  };