class Cuenta{
    constructor(idCuenta,correo,contrasenia,apellidos,nombreUsuario,nombre, creadorContenido, esGratis ){
        this.idCuenta = idCuenta;
        this.correo = correo;
        this.contrasenia = contrasenia;
        this.apellidos = apellidos;
        this.nombreUsuario = nombreUsuario;
        this.nombre = nombre;
        this.creadorContenido = creadorContenido;
        this.esGratis = esGratis;
    }

}

module.exports = Cuenta;