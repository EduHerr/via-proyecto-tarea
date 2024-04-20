const bcrypt = require('bcryptjs');

async function encrypt(password) {
    return await bcrypt.hash(password, 10);    
}

async function validate(password, hashedPassword){
    return await bcrypt.compare(password, hashedPassword);
}

module.exports = { encrypt, validate };
