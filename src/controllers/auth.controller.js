const { signUpDTO, signInDTO } = require('../bl/auth.bl');
const { register, signin } = require('../service/auth.service');

async function signUp(User) {
    signUpDTO(User);
    return await register(User);
}

async function signIn(nombre, contrasenia) {
    signInDTO(nombre, contrasenia);
    return await signin(nombre, contrasenia);
}

module.exports = { signUp, signIn };
