const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('country', {
    
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    flag: {
      type: DataTypes.TEXT,
      allowNull: false,
      isUrl: true
    },

    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },

    capital: {
      type: DataTypes.STRING(),
      allowNull: false
    },

    subregion: {
      type: DataTypes.STRING
    },

    area: {
      type: DataTypes.INTEGER
    },

    population: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  }, { timestamps: false });
};
