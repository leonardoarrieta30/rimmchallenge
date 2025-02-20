const Usuario = require("../database/models/Usuario");
const bycrypt = require('bcrypt');
const { generateToken } = require("../utils/jwt");

const login = async (req, res) => {
    const { user, password } = req.body;
    try {
        const userfind = await Usuario.findOne({
            where: { user },
        });
        if (!userfind) {
            return res.status(401).json({ message: "Usuario no encontrado", status: 0 });
        }
        //const isMatch = bycrypt.compareSync(password, userfind.password);
        /*       if (!isMatch) {
                  return res.status(401).json({ message: "Invalid fields" });
              }
       */
        console.log(userfind.password);
        console.log(password);

        if (userfind.password != password) {
            return res.status(401).json({ message: "Contraseña incorrecta", status: 2 });
        }


        //const token = generateToken(userfind);
        return res.status(200).json({ message: "Inicio exitoso, Bienvenido", status: 1 });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}

module.exports = { login };