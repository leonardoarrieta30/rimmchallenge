const {Model, DataTypes} = require("sequelize");

const sequelize = require("../db");

class Reglamento extends Model {}


Reglamento.init(
    {
        pdf:{
            type: DataTypes.TEXT("long"),
        },
        usuarioId:{
            type: DataTypes.INTEGER,
            references: {
                model: "usuarios",
                key: "id",
            },
        }
    },
    {
        sequelize,
        tableName: "reglamento",        
        timestamps: false,
    }
)

module.exports = Reglamento;