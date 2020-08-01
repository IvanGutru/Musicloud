const Cuenta = require('../Dominio/Cuenta');
const {crearToken} = require('../../Utilidades/generartoken');
const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');
const {comparar} = require('../../Utilidades/encriptador');
const {regresarIdCuenta} = require('../Aplicacion/obtenerIdCuenta');

const login = async (req, res) =>{
    try {
        var cuenta = new Cuenta();
        cuenta = {correo: req.body.correo,contraseña: req.body.contraseña};
        const cuentaBD = await ValidarCuentaEnBaseDatos(cuenta.correo);
        if(cuentaBD !=null){
            if(await validarContraseñasIguales(cuenta)){
                var token = await guardarToken(cuenta.correo);
                if(token != null){
                    res.send({Cuenta:cuentaBD, Token: token})
                    console.log('Inició sesión');
                }else{
                    res.send({Mensaje:'Error en la base de datos'})
                }
            }else{
                res.status(501).send({error:'Las contraseña es incorrecta'});
            }
        }else{
            res.status(501).send({error: 'El correo ingresado y/o el nombre de usuario no está registrado'});
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

async function validarNombreUsuario(nombreUsuario){
    const cuentaBD = await conexionBaseDatos.query('SELECT Correo,Contraseña, NombreUsuario FROM Cuenta WHERE NombreUsuario = $1',[nombreUsuario])
    return cuentaBD.rows[0];
}

async function guardarToken(correo){
    var idCuenta = await regresarIdCuenta(correo);
    const token = await crearToken(idCuenta);
    const respuesta = await conexionBaseDatos.query('INSERT INTO TokenUsuario (Token, Activo, IdCuenta) VALUES ($1,$2,$3);',[token,true,idCuenta]);
    if(respuesta.rowCount > 0){
        return token;
    }
    return null;
}

module.exports ={
    login
}

