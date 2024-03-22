'use strict';
const {
  Model
} = require('sequelize');
const { all } = require('../express/server');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    isAdmin() {
      return this.role === 'admin';
    }    
  }
  User.init({
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      // autoIncrement: true,
      allowNull: false
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['admin', 'user']]
      }
    },
    no_hp: {
      type: DataTypes.STRING
      // allowNull true secara default
    },
    foto_url: {
      type: DataTypes.STRING,
      //defaultValue: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    },
    createdAt:{
      type: DataTypes.DATE,
      defaultValue: DataTypes.Now 
    },
    updatedAt:{
      type: DataTypes.DATE,
      defaultValue: DataTypes.Now 
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
  });
  return User;
};