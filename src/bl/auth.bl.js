const { OnlyLetters } = require('../../libs/utils/validator/string/onlyLetters');
const { IsPhone } = require('../../libs/utils/validator/isPhone');
const { IsEnum } = require('../../libs/utils/validator/isEnum');
const { Length } = require('../../libs/utils/validator/Length');
const { NotEmpty } = require('../../libs/utils/validator/notEmpty');
const { Match } = require('../../libs/utils/validator/Match');

function signUpDTO(User) {
  const {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    contrasenia,
    telefono,
    // matricula,
    rol,
  } = User;

  //Nombre
  NotEmpty(nombre, 'Nombre');
  OnlyLetters(nombre, 'Nombre');
  Length({min:3, max: 50}, nombre, 'Nombre');

  //Apellido Paterno
  NotEmpty(apellidoPaterno, 'Primer Apellido');
  OnlyLetters(apellidoPaterno, 'Primer Apellido');
  Length({min:3, max: 50}, apellidoPaterno, 'Primer Apellido');

  //Apellido Materno
  OnlyLetters(apellidoMaterno, 'Segundo Apellido');
  Length({min:3, max: 50}, apellidoMaterno, 'Segundo Mpellido');

  //Contrasenia
  NotEmpty(contrasenia, 'Contraseña');
  Length({min:6, max: 12}, contrasenia, 'Contraseña');
  Match(/.*[a-z]+.*/, contrasenia, "Contraseña debe de contener al menos una letra minuscula");
  Match(/.*[A-Z]+.*/, contrasenia, "Contraseña debe de contener al menos una letra mayuscula");
  Match(/.*[0-9].*/, contrasenia,  "Contraseña debe de contener al menos un numero");
  Match(/.*[@$&]+.*/, contrasenia, "Contraseña debe de contener al menos uno de los siguientes caracteres '@', '$', '&'" );

  //Telefono
  IsPhone(telefono);

  //Matricula
  //Rol
  NotEmpty(rol, 'Rol');
  IsEnum(rol, ['ADMINISTRADOR', 'ALUMNO'], 'Rol');
}

function signInDTO(nombre, contrasenia){
  //Nombre
  NotEmpty(nombre, 'Nombre');
  OnlyLetters(nombre, 'Nombre');
  Length({min:3, max: 50}, nombre, 'Nombre');

  //Contrasenia
  NotEmpty(contrasenia, 'Contraseña');
  Length({min:6, max: 12}, contrasenia, 'Contraseña');
  Match(/.*[a-z]+.*/, contrasenia, "Contraseña debe de contener al menos una letra minuscula");
  Match(/.*[A-Z]+.*/, contrasenia, "Contraseña debe de contener al menos una letra mayuscula");
  Match(/.*[0-9].*/, contrasenia,  "Contraseña debe de contener al menos un numero");
  Match(/.*[@$&]+.*/, contrasenia, "Contraseña debe de contener al menos uno de los siguientes caracteres '@', '$', '&'" );
}

module.exports = { signUpDTO, signInDTO };
