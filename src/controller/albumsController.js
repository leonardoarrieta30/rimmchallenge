const axios = require("axios");
const Album = require("../database/models/Album");

const getAlbums = async (_req, res) => {
  try {
    const albums = await Album.findAll(); // Solo selecciona 'foto'
    res.status(200).json({
      albums,
      message: "Fotos de álbumes listadas correctamente",
      status: 1,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAlbum = async (req, res) => {
  const { foto, enlace, evento, usuarioId } = req.body;

  try {
    // Contar cuántos álbumes tiene el usuario
    // const albumCount = await Album.count({ where: { usuarioId } });

    /*     if (albumCount >= 5) {
      return res.json({ 
        message: "No puedes agregar más de 5 fotos", 
        status: 0 
      });
    } */

    // Crear el nuevo álbum si no ha alcanzado el límite
    await Album.create({ foto, evento, enlace, usuarioId });

    res.status(201).json({      
      message: "Foto insertada correctamente",
      status: 1,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAlbums,
  createAlbum,
};
