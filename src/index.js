const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const sequelize = require('./database/db');

require("./database/associantions");

const routes = require("./routes");


//configuracion inicial 
const app = express()


app.use(morgan("dev"))
app.use(cors({ origin: "*"}))
app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ limit: "50mb", extended: true }))


//puerto del servidor
const PORT = process.env.PORT || 8080


//inicia el servidor
app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`)
    sequelize.sync({force: false}).then(() => {
        console.log('Conectado a la base de datos')
    }).catch(err => {
        console.log(err)
    })
})



app.use('/api/v1', routes)



