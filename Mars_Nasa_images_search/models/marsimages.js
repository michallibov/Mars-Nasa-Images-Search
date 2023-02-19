'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MarsImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MarsImages.init({
    url: DataTypes.STRING,
    sol: DataTypes.STRING,
    email: DataTypes.STRING,
    earthDate: DataTypes.STRING,
    imageId: DataTypes.STRING,
    camera: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MarsImages',
  });
  return MarsImages;
};