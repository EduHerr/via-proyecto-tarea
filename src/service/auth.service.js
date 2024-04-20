const { Usuario } = require("../entity/user");
const { save, login } = require("../repository/auth.repository");
const { encrypt, validate } = require("../../libs/modules/auth/encrypt/service")
const { sign } = require('../../libs/modules/auth/token/service');

async function register(User){
    let {
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        contrasenia,
        telefono,
        matricula,
        rol,
      } = User;

      contrasenia = await encrypt(contrasenia);

      const user = new Usuario(nombre, apellidoPaterno, apellidoMaterno, contrasenia, telefono, matricula, rol);
      return await save(user);
}

async function signin(nombre, password){
  const usuario = await login(nombre);

  if(!usuario){
    throw new Error('Usuario no existente');
  }

  if(!(validate(password, usuario.contrasenia))){
    throw new Error('Contraseña incorrecta');
  }

  const { contrasenia, telefono, id, ...user } = usuario;

  return sign(user);
}

module.exports = { register, signin };
