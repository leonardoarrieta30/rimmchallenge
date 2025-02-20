const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Resultado extends Model { }

Resultado.init(
    {
        nombre: {
            type: DataTypes.STRING,
        },
        puesto: {
            type: DataTypes.STRING,
        },
        pais: {
            type: DataTypes.STRING,
        },
        tiempo: {
            type: DataTypes.STRING,
        },
        fecha: {
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
        tableName: "resultados",
        timestamps: false
    }
)


module.exports = Resultado;