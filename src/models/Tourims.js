const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('tourims', {
    name: {
      type: DataTypes.STRING,    
    },
    dificult: {
      type: DataTypes.INTEGER,
    },
    durations: {
      type: DataTypes.STRING,
    },
    season: {
      type: DataTypes.STRING,
    },
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });
};
