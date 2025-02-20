const Usuario = require("../database/models/Usuario")
const Album = require("../database/models/Album")
const Resultado = require("../database/models/Resultado")
const Banner = require("./models/Banner")
const Noticia = require("./models/Noticia")
const Inscripcion = require("./models/Inscripcion")
const Enlace = require("./models/Enlace")
const Calendario = require("./models/Calendario")
const Reglamento = require("./models/Reglamento")



Usuario.hasMany(Album)

Album.belongsTo(Usuario)

Usuario.hasMany(Resultado)

Resultado.belongsTo(Usuario)

Usuario.hasMany(Banner)

Banner.belongsTo(Usuario)


Usuario.hasMany(Noticia)

Noticia.belongsTo(Usuario)

Usuario.hasMany(Inscripcion)

Inscripcion.belongsTo(Usuario)

Usuario.hasMany(Enlace)

Enlace.belongsTo(Usuario)


Usuario.hasMany(Calendario)

Calendario.belongsTo(Usuario)


Usuario.hasMany(Reglamento)

Reglamento.belongsTo(Usuario)
