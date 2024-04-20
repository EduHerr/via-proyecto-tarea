const jwt = require('jsonwebtoken');

function sign(Usuario){
    const token = jwt.sign(
        Usuario,
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );

    return token;
}

function verify(token){
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err){
                reject(err);
            }

            resolve(token);
        });
    });
}

function decode(token){
    return jwt.decode(token);
}

module.exports = { sign, verify, decode };
