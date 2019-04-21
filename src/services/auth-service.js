'use-strict'
const jwt = require('jsonwebtoken');

exports.generateToken = async (data) => {
    return jwt.sign(data, global.SALT_KEY, { expiresIn: '1d' });
}

exports.decodeToken = async (token) => {
    var data = await jwt.verify(token, global.SALT_KEY);
    return data;
}

exports.authorize = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers.authorization;

    token = token.substring(7, token.length);

    if(!token) {
        res.status(401).json({ message: 'Acesso Restrito' });
    } else {
        jwt.verify(token, global.SALT_KEY, function (error, decoded){
            if(error) {
                res.status(401).json({ message: 'Token inválido' })
            } else {
                next();
            }
        });
    }
}

