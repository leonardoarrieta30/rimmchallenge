const Noticia = require("../database/models/Noticia");

const getAllNoticias = async (_req, res) => {
  try {
    const noticias = await Noticia.findAll();
    res.status(200).json({
      noticias,
      message: "Noticias obtenidas exitosamente",
      status: 1,
    });
  } catch (error) {
    console.error("Error al obtener las noticias:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const postNoticias = async (req, res) => {
  try {
    const { titulo, descripcion, foto, usuarioId } = req.body;
    const noticia = await Noticia.create({
      titulo,
      descripcion,
      foto,
      usuarioId,
    });
    res.status(201).json({
      noticia,
      message: "Noticias creada exitosamente",
      status: 1,
    });
  } catch (error) {
    console.error("Error al crear la noticia:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  getAllNoticias,
  postNoticias
};
