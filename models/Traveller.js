const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {}

Traveller.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },
        traveller_id: {
            type: DataTypes.INTEGER,

        }
    },
    {
        sequelize: sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'traveller'
    }
)

module.exports = Traveller;