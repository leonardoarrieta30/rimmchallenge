const {Model, DataTypes} = require("sequelize");

const sequelize = require("../db");


class Enlace extends Model {}

Enlace.init(
    {
        url: {
            type: DataTypes.STRING,
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
        modelName: "enlaces",
        timestamps: false
    }
)

module.exports = Enlace;
