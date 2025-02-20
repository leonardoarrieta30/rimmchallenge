const Inscripcion = require("../database/models/Inscripcion");
const { mainSender } = require("../mail/server");
const { differenceInYears } = require("date-fns");

const enviarInscripcion = async (req, res) => {
  const {
    nombreEvento,
    correoElectronico,
    esMenorEdad,
    nombrePadre,
    apellidoPadre,
    documentoIdentidadPadre,
    nombreCompleto,
    documentoIdentidad,
    nombreEquipo,
    celular,
    provincia,
    categoria,
    imagenPago,
    usuarioId,
  } = req.body;

  try {
    // Buscar si ya existe una inscripción con el mismo documento de identidad
    const inscripcionExistente = await Inscripcion.findOne({
      where: { documentoIdentidad },
      order: [["createdAt", "DESC"]], // Asegura que se obtiene la inscripción más reciente
    });

    if (inscripcionExistente) {
      const fechaInscripcion = new Date(inscripcionExistente.createdAt);
      const fechaActual = new Date();
      const diferenciaAnios = differenceInYears(fechaActual, fechaInscripcion);

      console.log("Fecha de inscripción:", fechaInscripcion);
      console.log("Fecha actual:", fechaActual);
      console.log("Diferencia de años:", diferenciaAnios);

      // **1. Bloquear inscripción en el mismo evento hasta después de un año**
      if (
        inscripcionExistente.nombreEvento === nombreEvento &&
        diferenciaAnios < 1
      ) {
        return res.json({
          message:
            "Usted ya se encuentra inscrito a este evento, no puedes inscribirte a este mismo evento hasta el proximo año.",
          status: 0,
        });
      }

      // **2. Bloquear cambio de equipo antes de un año**
      if (
        inscripcionExistente.nombreEquipo !== nombreEquipo &&
        diferenciaAnios < 1
      ) {
        return res.json({
          message:
            "No puedes cambiar de equipo hasta que pase 1 año desde tu última inscripción.",
          status: 0,
        });
      }
    }

    // Permitir inscripción si no hay restricciones
    return continuarConInscripcion();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

  async function continuarConInscripcion() {
    // Crear nueva inscripción
    const inscripcion = await Inscripcion.create({
      nombreEvento,
      correoElectronico,
      esMenorEdad,
      nombrePadre,
      apellidoPadre,
      documentoIdentidadPadre,
      nombreCompleto,
      documentoIdentidad,
      nombreEquipo,
      celular,
      provincia,
      categoria,
      imagenPago,
      usuarioId,
    });

    console.log("Inscripción creada:", inscripcion);

    await mainSender({ correoElectronico, nombreEvento, nombreCompleto });

    res.status(201).json({
      inscripcion,
      message: "Inscripción hecha correctamente, revise su correo electrónico",
      status: 1,
    });
  }
};

const obtenerInscripcionByDni = async (req, res) => {
  const { documentoIdentidad } = req.params;
  console.log("req.params: " + documentoIdentidad);
  try {
    const inscripcion = await Inscripcion.findOne({
      where: { documentoIdentidad },
    });

    if (!inscripcion) {
      return res.json({ message: "Inscripción no encontrada", status: 0 });
    }

    res
      .status(200)
      .json({ inscripcion, message: "Inscripción encontrada", status: 1 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getInscritos = async (_req, res) => {
  try {
    const inscritos = await Inscripcion.findAll();
    console.log("Inscritos", inscritos);

    if (inscritos.length === 0) {
      return res.json({ message: "No hay inscritos disponibles", status: 0 });
    }

    res
      .status(200)
      .json({
        inscritos,
        status: 1,
        message: "Inscritos listados correctamente",
      });
  } catch (error) {
    console.error("Error al obtener inscritos:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  enviarInscripcion,
  obtenerInscripcionByDni,
  getInscritos,
};
