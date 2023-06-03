const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {
        id: {
            type: DataTypes.INTEGER(),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING(),
            allowNull: false
        },

        difficulty: {
            type: DataTypes.INTEGER(),
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },

        duration: {
            type: DataTypes.FLOAT()
        },

        season: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
            allowNull: false
        },

        image: {
            type: DataTypes.STRING(),
            validate: {
                isUrl: true
            }
        }
    }, { timestamps: false })
}