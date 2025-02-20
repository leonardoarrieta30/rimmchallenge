const Calendario = require("../database/models/Calendario")


const postOrUpdateCalendario = async (req, res) => {
    try {
        const { image, usuarioId } = req.body;

        const calendario = await Calendario.findOne({ where: { usuarioId } });

        if (calendario) {
            // Si existe, actualizar
            await calendario.update({ image });
            return res.json({ message: "Calendario actualizado correctamente", status: 1 });
        } else {
            // Si no existe, crear
            await Calendario.create({ image, usuarioId });
            return res.json({ message: "Calendario creado correctamente", status: 1 });
        }
    } catch (error) {
        console.error("Error en postOrUpdateCalendario:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};


const getCalendario = async (_req, res) => {
    try {
        const calendario = await Calendario.findOne(); // Solo devuelve un objeto
        return res.status(200).json({calendario, message: "Calendario encontrado", status: 1}); // Devuelve un objeto JSON, no un array
    } catch (error) {
        console.error("Error en getCalendario:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};



module.exports = { postOrUpdateCalendario, getCalendario };
