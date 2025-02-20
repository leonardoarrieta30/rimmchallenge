const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Inscripcion extends Model {}

Inscripcion.init(
  {
    nombreEvento: {
      type: DataTypes.STRING,
    },
    correoElectronico: {
      type: DataTypes.STRING,
    },

    esMenorEdad: {
      type: DataTypes.BOOLEAN,
    },

    nombrePadre: {
      type: DataTypes.STRING,
    },
    apellidoPadre: {
      type: DataTypes.STRING,
    },
    documentoIdentidadPadre: {
      type: DataTypes.STRING,
    },
    nombreCompleto: {
      type: DataTypes.STRING,
    },
    documentoIdentidad: {
      type: DataTypes.STRING,
    },
    nombreEquipo: {
      type: DataTypes.STRING,
    },
    celular: {
      type: DataTypes.STRING,
    },
    provincia: {
      type: DataTypes.STRING,
    },
    categoria: {
      type: DataTypes.STRING,
    },
    imagenPago: {
      type: DataTypes.TEXT("long"),
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
    tableName: "inscripciones",
    
  }
);
module.exports = Inscripcion;
