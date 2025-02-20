
const Reglamento = require("../database/models/Reglamento")

const createOrUpdateReglamento = async (req, res) => {
    try {
        const { pdf } = req.body;

        // Buscar si ya existe un reglamento
        let reglamento = await Reglamento.findOne();

        if (reglamento) {
            // Si existe, actualizarlo
            reglamento.pdf = pdf;
            await reglamento.save();
            return res.status(200).json({ message: "Reglamento actualizado correctamente.",status: 1 });
        } else {
            // Si no existe, crearlo
            reglamento = await Reglamento.create({ pdf });
            return res.status(201).json({ message: "Reglamento creado correctamente.", reglamento, status: 1 });
        }
    } catch (error) {
        console.error("Error al crear o actualizar reglamento:", error);
        return res.status(500).json({ message: "Error interno del servidor." });
    }
};


const getReglamento = async (_req, res) => {
    try {
        // Buscar el reglamento en la base de datos
        const reglamento = await Reglamento.findOne();

        if (!reglamento) {
            return res.json({ message: "No se encontró ningún reglamento.", status: 0 });
        }

        return res.status(200).json({ reglamento, message: "Reglamento obtenido correctamente.", status: 1 });
    } catch (error) {
        console.error("Error al obtener el reglamento:", error);
        return res.status(500).json({ message: "Error interno del servidor." });
    }
}


module.exports = {
    createOrUpdateReglamento,
    getReglamento
}

