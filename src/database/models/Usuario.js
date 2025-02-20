const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");


class Usuario extends Model { }
Usuario.init({
    user: {
        type: DataTypes.STRING,

    },
    password: {
        type: DataTypes.STRING,
    }
}, {


    sequelize,
    modelName: "usuarios",
    timestamps: false

})


module.exports = Usuario;