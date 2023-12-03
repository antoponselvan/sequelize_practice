const {DataTypes, QueryInterface} = require('sequelize')

module.exports = {
  up: async ({context: queryInterface}) => {
    await queryInterface.createTable("users", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
    });

    await queryInterface.createTable("tweets", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {model: 'users', key: 'id'}
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
    });
  },
  down: async({context: queryInterface}) => {
    await queryInterface.dropTable("tweets");
    await queryInterface.dropTable('users')
  }
}