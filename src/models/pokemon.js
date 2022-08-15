'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pokemons.init({
    name: DataTypes.STRING,
    hp: DataTypes.INTEGER,
    attack: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    special_attack: DataTypes.INTEGER,
    special_defense: DataTypes.INTEGER,
    speed: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pokemons',
  });
  return Pokemons;
};