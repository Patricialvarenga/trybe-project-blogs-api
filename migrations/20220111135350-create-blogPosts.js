'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        defaultValue: true,
        field: 'userId',
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id', 
        },  
      },
      createdAt: {
        field: 'published',
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'updated',
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
