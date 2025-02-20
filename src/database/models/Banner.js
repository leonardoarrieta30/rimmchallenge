const {Model, DataTypes} = require("sequelize");
const sequelize = require("../db");

class Banner extends Model {}

Banner.init(
    {
        imagen: {
            type: DataTypes.TEXT('long'),
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
        tableName: "banners",
        timestamps: false
    }
)

module.exports = Banner;