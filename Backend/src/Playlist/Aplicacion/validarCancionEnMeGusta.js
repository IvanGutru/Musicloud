
const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const ValidarCancionMeGusta = async(req,res) =>{
    try {
        var idCancion = req.params.idCancion;
        var idCuenta = req.params.idCuenta;
        var estaRegistrada = true;
        var playlistMeGusta = await ObtenerPlaylistMeGustaDeCuenta(idCuenta);
        if(playlistMeGusta !=null){
            if(await ValidarCancionRegistradaEnMegusta(playlistMeGusta.idplaylist,idCancion)){
                res.status(200).send(estaRegistrada);
            }else{
                estaRegistrada = false;
                res.status(202).send(estaRegistrada);
            }
         }else{
            console.log('No se pudo recuperar la playlist de tipo Me gusta');
            res.status(500).send({error:'No se pudo recuperar la plylist de tipo Me gusta'});
        } 
    }catch (error) {
        res.status(500).send({error: error});
        console.log(error);
    }
}

async function ObtenerPlaylistMeGustaDeCuenta(idCuenta){
    var idTipoPlaylist = 3;
    const playlist = await conexionBaseDatos.query('SELECT * FROM PLAYLIST WHERE (IdCuenta = $1) AND (idTipoPlaylist = $2)',[idCuenta,idTipoPlaylist]);
    if(playlist.rowCount>0){
        return playlist.rows[0];
    }else{
        return null;
    }
}

async function ValidarCancionRegistradaEnMegusta(idPlaylist,idCancion){
    const respuesta = await conexionBaseDatos.query('SELECT * FROM PlaylistCanciones Where (idPlaylist = $1) and (idCancion = $2);',[idPlaylist,idCancion]);
    if(respuesta.rowCount>0){
        return true;
    }
    return false;
}

  module.exports={
    ValidarCancionMeGusta
}