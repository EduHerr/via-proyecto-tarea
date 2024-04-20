function IsPhone(value){
    if(!(/^\d{10}$/).test(value)){
        throw new Error('Telefono debe de estar conformado por numeros y tener una longitud de 10 digitos');
    }
    return;
}

module.exports = { IsPhone };
