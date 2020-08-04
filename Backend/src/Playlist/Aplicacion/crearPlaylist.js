const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');
const Playlist = require('../Dominio/Playlist');
const {DecodificarBase64} = require('../../Utilidades/DecodificarBase64');
const {GuardarImagen, GenerarNombreImagen} = require('../../Utilidades/GuardarImagenes');

const CrearPlaylist = async(req, res) =>{
    try {
        const playlist = {nombre: req.body.nombre, publica: req.body.publica, fechaCreacion: req.body.fechaCreacion, 
        portada: req.body.portada, idCuenta: req.body.idCuenta, idTipoPlaylist: req.body.idTipoPlaylist }
        console.log('Auiq paso algo');
        var nombreImagen = GenerarNombreImagen(playlist.nombre, playlist.fechaCreacion);
        console.log(nombreImagen);
        GuardarImagen(playlist.portada,nombreImagen,'Playlist');
        playlist.portada = nombreImagen;
        console.log('Funcono');
        const respuesta = await conexionBaseDatos.query('INSERT INTO Playlist (Nombre, publica, fechaCreacion,portada, idCuenta,idTipoPlaylist) VALUES ($1,$2,$3,$4,$5,$6);',
        [playlist.nombre,playlist.publica,playlist.fechaCreacion,playlist.portada,playlist.idCuenta,playlist.idTipoPlaylist]);
        console.log('Auiq paso algo');
        if(respuesta.rowCount>0){
            res.send({Mensaje:'Se guardó la playlist'});
        }else{
            res.status(500).send({error: 'Ocurrió un error al guardar la playlist'});
        }

    } catch (error) {
        res.status(500).send({error:error});
    }
}

module.exports ={
    CrearPlaylist
}

