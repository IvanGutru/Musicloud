
const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');
const Cuenta = require('../Dominio/Cuenta');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const crearCuenta = async(req, res) =>{
    try {
        const cuenta = {correo: req.body.correo,contraseña: req.body.contraseña,apellidos: req.body.apellidos,
        nombreUsuario: req.body.nombreUsuario, nombre: req.body.nombre, creadorContenido: req.body.creadorContenido }
        if(await validarCorreoNoRegistrado(cuenta.correo) == true){
            if(await validarUsuarioNoRegsitrado(cuenta.nombreUsuario) == true){
                cuenta.contraseña = await bcrypt.hash(cuenta.contraseña,10);
                cuenta.idCuenta = generarIdCuenta();
                const respuesta = await conexionBaseDatos.query('INSERT INTO cuenta (IdCuenta, Correo, Contraseña, Apellidos, NombreUsuario, Nombre,CreadorContenido) VALUES ($1,$2,$3,$4,$5,$6,$7);',
                [cuenta.idCuenta,cuenta.correo,cuenta.contraseña,cuenta.apellidos,cuenta.nombreUsuario,cuenta.nombre,cuenta.creadorContenido]);
                if(respuesta.rowCount>0){
                    if(await CrearPlaylistDeIncio(cuenta.idCuenta)){
                        res.status(200).json({Mensaje: 'Registro exitoso'});
                        console.log('Registro exitoso')
                    }else{
                        console.log('Error al crear las playlist');
                    }
                }else{
                    console.log('No se pudo registrar');
                }

            }else{
                res.status(502).json({error:'El nombre de usuario ingresado ya está registrado'});
            }
        }else{
            res.status(501).json({error: 'El correo ingresado ya está registrado'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Ocurrió un error al registrar la cuenta'})
    }
}

function generarIdCuenta(){
    var current_date = (new Date()).valueOf().toString();
    var random = Math.random().toString();  
    const idCuentaNuevo = crypto.createHash('sha1').update(current_date+random).digest('hex');
    return idCuentaNuevo;
}

async function validarCorreoNoRegistrado(correo){
    const respuesta = await conexionBaseDatos.query('SELECT correo FROM cuenta WHERE correo = $1;',[correo]);
    if(respuesta.rowCount == 0){
        return true;
    }
    return false;
}
async function validarUsuarioNoRegsitrado(nombreUsuario){
    var respuesta = await conexionBaseDatos.query('SELECT Nombre FROM Cuenta WHERE NombreUsuario = $1;',[nombreUsuario]);
    if(respuesta.rowCount == 0){
        return true;
    }
    return false;
}

async function CrearPlaylistMeGusta(idCuenta){
    var nombrePlaylist = 'Me gusta';
    var current_date = new Date();
    var portadaMegusta = 'portadaMeGusta.png';
    var tipoPlaylistMegusta = 3;
    const respuesta = await conexionBaseDatos.query('INSERT INTO Playlist (nombre, publica, fechaCreacion, portada, idCuenta, idTipoPlaylist) Values'+
    '($1,$2,$3,$4,$5,$6);',[nombrePlaylist,false,current_date,portadaMegusta,idCuenta,tipoPlaylistMegusta]);
    if(respuesta.rowCount>0){
        return true;
    }else{
        return false;
    }
}

async function CrearPlaylistBibliotecaPropia(idCuenta){
    var nombrePlaylist = 'Biblioteca Propia';
    var current_date = new Date();
    var portadaBiblioteca = 'portadaBibliotecaPropia.png';
    var tipoPlaylistBiblioteca = 5;
    const respuesta = await conexionBaseDatos.query('INSERT INTO Playlist (nombre, publica, fechaCreacion, portada, idCuenta, idTipoPlaylist) Values'+
    '($1,$2,$3,$4,$5,$6);',[nombrePlaylist,false,current_date,portadaBiblioteca,idCuenta,tipoPlaylistBiblioteca]);
    if(respuesta.rowCount>0){
        return true;
    }else{
        return false;
    }
}


async function CrearPlaylistDescargas(idCuenta){
    var nombrePlaylist = 'Musica Descargada';
    var current_date = new Date();
    var portadaDescargas = 'portadaDescargas.png';
    var tipoPlaylistMusicaDescargada = 4;
    const respuesta = await conexionBaseDatos.query('INSERT INTO Playlist (nombre, publica, fechaCreacion, portada, idCuenta, idTipoPlaylist) Values'+
    '($1,$2,$3,$4,$5,$6);',[nombrePlaylist,false,current_date,portadaDescargas,idCuenta,tipoPlaylistMusicaDescargada]);
    if(respuesta.rowCount>0){
        return true;
    }else{
        return false;
    }
}

async function CrearPlaylistDeIncio(idCuenta){
    if(await CrearPlaylistMeGusta(idCuenta) && await CrearPlaylistBibliotecaPropia(idCuenta) && await CrearPlaylistDescargas(idCuenta)){
        return true;
    }else{
        return false;
    }
}
module.exports = {
    crearCuenta
}