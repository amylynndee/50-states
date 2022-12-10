'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class States extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  States.init({
    name: DataTypes.STRING,
    visited: DataTypes.BOOLEAN,
    lat: DataTypes.FLOAT,
    lon: DataTypes.FLOAT,
    zoom: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'States',
  });
  return States;
};

// this file in models is what will be used by our JS code to interact with the 'States' table, find states objects in our code. Will retrieve 'States' data from the DB