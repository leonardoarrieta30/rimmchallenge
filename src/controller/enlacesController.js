const Enlace = require("../database/models/Enlace");

const getEnlace = async (_req, res) => {
  try {
    const enlace = await Enlace.findOne(); // Obtiene el único registro disponible

    if (!enlace) {
      return res
        .status(200)
        .json({ message: "No se encontró ningún enlace", status: 0 });
    }

    res
      .status(200)
      .json({ enlace, message: "Enlace obtenido exitosamente", status: 1 });
  } catch (error) {
    console.error("Error al obtener el enlace:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const postOrUpdateEnlace = async (req, res) => {
    try {
      const { url, usuarioId } = req.body;
  
      // Buscar si ya existe un enlace
      let enlace = await Enlace.findOne();
  
      if (enlace) {
        // Si existe, actualizarlo
        await enlace.update({ url, usuarioId });
        return res.status(200).json({
          enlace,
          message: "Enlace actualizado exitosamente",
          status: 1,
        });
      }
  
      // Si no existe, crear uno nuevo
      enlace = await Enlace.create({ url, usuarioId });
  
      res.status(201).json({
        enlace,
        message: "Enlace creado exitosamente",
        status: 1,
      });
    } catch (error) {
      console.error("Error al crear o actualizar el enlace:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  };


  module.exports = {
    getEnlace,
    postOrUpdateEnlace,
  };