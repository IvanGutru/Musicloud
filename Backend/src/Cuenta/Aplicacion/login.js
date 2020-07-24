const Cuenta = require('../Dominio/Cuenta');
const {crearToken} = require('../../Utilidades/generartoken');
const conexionBaseDatos = require('../../conexionBaseDatos');
const {comparar} = require('../../encriptador');
const {regresarIdCuenta} = require('../Aplicacion/obtenerIdCuenta');

const login = async (req, res) =>{
    try {
        var cuenta = new Cuenta();
        cuenta = {correo: req.body.correo,contraseña: req.body.contraseña,nombreUsuario: req.body.nombreUsuario};
        if(!await ValidarCuentaEnBaseDatos(cuenta.correo) && !await validarNombreUsuario(cuenta)){
            if(await validarContraseñasIguales(cuenta)){
                if(await guardarToken(cuenta.correo)){
                    res.send({Mensaje:'Has iniciado sesión con éxito'})
                }else{
                    res.send({Mensaje:'Algo salió mal'})
                }
            }else{
                res.send({error:'Las contraseñas no coinciden'});
            }
        }else{
            res.send({error: 'El correo ingresado y/o el nombre de usuario no está registrado'});
        }
    } catch (error) {
        console.log(error)
    }
}

async function ValidarCuentaEnBaseDatos(correo){
    const cuenta = await conexionBaseDatos.query('SELECT IdCuenta,Correo,Contraseña,NombreUsuario FROM Cuenta WHERE correo = $1;',[correo]);
    return cuenta.rows[0];
}

async function validarContraseñasIguales(cuenta){
    var cuentaBD = await ValidarCuentaEnBaseDatos(cuenta.correo);
    return (comparar(cuenta.contraseña, cuentaBD.contraseña))
}

async function validarNombreUsuario(cuenta){
    var cuentaBD = await conexionBaseDatos.query('SELECT Correo,Contraseña, NombreUsuario FROM Cuenta WHERE NombreUsuario = $1',[cuenta.nombreUsuario])
    return cuentaBD.rows[0];
}

async function guardarToken(correo){
    var idCuenta = await regresarIdCuenta(correo);
    const token = await crearToken(idCuenta);
    const respuesta = await conexionBaseDatos.query('INSERT INTO TokenUsuario (Token, Activo, IdCuenta) VALUES ($1,$2,$3);',[token,true,idCuenta]);
    if(respuesta.rowCount > 0){
        return true;
    }
    return false;
}

module.exports ={
    login
}

