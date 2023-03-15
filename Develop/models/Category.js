const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // need to define columns
    id: {
      type: DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoINcrement: true
    },
    
    category_name: {
      type: DataTypes.STRING,
      allowNull: false 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
