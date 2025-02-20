const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Genera una clave secreta más segura
const SECRET_KEY = crypto.randomBytes(64).toString('hex');

const generateToken = (user) => {
    const payload = {
        id: user.id,
        user: user.user,
    };
    const options = {
        expiresIn: '1h',
    };
    const token = jwt.sign(payload, SECRET_KEY, options);
    return token;
};

module.exports = { generateToken };
