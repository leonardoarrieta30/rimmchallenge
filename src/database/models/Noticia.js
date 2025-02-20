const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Noticia extends Model {}
Noticia.init(
  {
    foto: {
      type: DataTypes.TEXT("long"),
    },
    titulo: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    descripcionTotal: {
      type: DataTypes.TEXT("long"),
    },
    fecha: {
      type: DataTypes.STRING,
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      references: {
        model: "usuarios",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "noticias",
    timestamps: false,
  }
);

module.exports = Noticia;