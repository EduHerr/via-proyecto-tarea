class Usuario {
    constructor(
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        contrasenia,
        telefono,
        matricula,
        rol
    ){
        this.nombre = nombre,
        this.apellidoPaterno = apellidoPaterno,
        this.apellidoMaterno = apellidoMaterno,
        this.contrasenia = contrasenia,
        this.telefono = telefono,
        this.matricula = matricula,
        this.rol = rol
    }
}

module.exports = { Usuario };
