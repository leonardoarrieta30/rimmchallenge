const {Model, DataTypes} = require('sequelize');

const sequelize = require('../db');

class Calendario extends Model {}

Calendario.init(
    {
        image : {
            type: DataTypes.TEXT("long"),
        },
        usuarioId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'usuarios',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        modelName: 'calendarios',
        timestamps: false,
    }
)

module.exports = Calendario;