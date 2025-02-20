
const Resultado = require('../database/models/Resultado');


const getAllResultados = async (_req, res) => {
    try {
        const resultados = await Resultado.findAll();
        if (resultados.length !== 0) {
            return res.status(200).json({ resultados, message: "Listado de resultados correctamente", status: 1 });
        }
        return res.status(404).json({ message: "No hay resultados disponibles", status: 0 });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

const createResultado = async (req, res) => {
    const { nombre, puesto, pais, tiempo, fecha, usuarioId } = req.body;
    try {
        const resultado = await Resultado.create({
            nombre,
            puesto,
            pais,
            tiempo,
            fecha,
            usuarioId
        });
        res.status(201).json({ resultado, message: "Resultado creado correctamente", status: 1 });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllResultados,
    createResultado
};