const Banner = require("../database/models/Banner");

const getBanner = async (_req, res) => {
  try {
    const banner = await Banner.findOne({ order: [["id", "DESC"]] }); // Obtiene el último banner agregado

    if (!banner) {
      return res
        .status(404)
        .json({ message: "No se encontró ningún banner", status: 0 });
    }

    res
      .status(200)
      .json({ banner, message: "Banner obtenido exitosamente", status: 1 });
  } catch (error) {
    console.error("Error al obtener el banner:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const postOrUpdateBanner = async (req, res) => {
  const { imagen, usuarioId } = req.body;

/*   if (!imagen || !usuarioId) {
    return res.status(400).json({ error: "Imagen y usuarioId son requeridos" });
  }
 */
  try {
    // Buscar si ya existe un banner para el usuario
    const bannerExistente = await Banner.findOne({ where: { usuarioId } });

    if (bannerExistente) {
      // Si existe, actualiza el banner (PUT)
      await bannerExistente.update({ imagen });

      return res.status(200).json({
        message: "Banner actualizado exitosamente",
        //banner: bannerExistente,
        status: 1,
      });
    } else {
      // Si no existe, crea un nuevo banner (POST)
      const nuevoBanner = await Banner.create({ imagen, usuarioId });

      return res.status(200).json({
        message: "Banner creado exitosamente",
        //banner: nuevoBanner,
        status: 1,
      });
    }
  } catch (error) {
    console.error("Error al procesar el banner:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  getBanner,
  postOrUpdateBanner,
};
