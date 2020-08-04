const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');
const Playlist = require('../Dominio/Playlist');
const {DecodificarBase64} = require('../../Utilidades/decodificarBase64');
const {GuardarImagen, GenerarNombreImagen} = require('../../Utilidades/guardarImagenes');

const CrearPlaylist = async(req, res) =>{
    try {
        const playlist = {nombre: req.body.nombre, publica: req.body.publica, fechaCreacion: req.body.fechaCreacion, 
        portada: req.body.portada, idCuenta: req.body.idCuenta, idTipoPlaylist: req.body.idTipoPlaylist }
        playlist.portada = ObtenerValorPortada(playlist.portada, playlist.nombre, playlist.fechaCreacion);
        const respuesta = await conexionBaseDatos.query('INSERT INTO Playlist (Nombre, publica, fechaCreacion,portada, idCuenta,idTipoPlaylist) VALUES ($1,$2,$3,$4,$5,$6);',
        [playlist.nombre,playlist.publica,playlist.fechaCreacion,playlist.portada,playlist.idCuenta,playlist.idTipoPlaylist])
        if(respuesta.rowCount>0){
            res.send({Mensaje:'Se guardó la playlist'});
        }else{
            res.status(500).send({error: 'Ocurrió un error al guardar la playlist'});
        }

    } catch (error) {
        res.status(500).send({error:error});
    }
}

function ObtenerValorPortada(portada,nombre,fechaCreacion){
    if(portada == ""){
        var portadaDefault = 'playlistPortada.png';
        return portadaDefault;
    }else{
        var nombreImagen = GenerarNombreImagen(nombre,fechaCreacion);        
        GuardarImagen(portada,nombreImagen);
        return nombreImagen;
    }
}

module.exports ={
    CrearPlaylist
}

