const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

//enlace que te lleva a un repositorio
class Album extends Model { }
Album.init({
/*     lugar: {
        type: DataTypes.STRING,
    },
    
    fecha: {
        type: DataTypes.STRING,
    }, */
    foto: {
        type: DataTypes.TEXT('long'),
    },
    enlace:{
        type: DataTypes.TEXT('long'),
    },
    evento: {
        type: DataTypes.STRING,
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: "albums",
    timestamps: false
})

module.exports = Album;