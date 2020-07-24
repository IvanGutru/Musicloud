class Cuenta{
    constructor(idCuenta,correo,contrasenia,apellidos,nombreUsuario,nombre, creadorContenido ){
        this.idCuenta = idCuenta;
        this.correo = correo;
        this.contrasenia = contrasenia;
        this.apellidos = apellidos;
        this.nombreUsuario = nombreUsuario;
        this.nombre = nombre;
        this.creadorContenido = creadorContenido;
    }

}

module.exports = Cuenta;