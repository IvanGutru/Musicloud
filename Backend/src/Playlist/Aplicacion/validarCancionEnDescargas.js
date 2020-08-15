
const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const ValidarCancionEnDescargas = async(req,res) =>{
    try {
        var idCancion = req.params.idCancion;
        var idCuenta = req.params.idCuenta;
        var estaRegistrada = true;
        var playlistDescargas = await ObtenerPlaylistDescargasDeCuenta(idCuenta);
        if(playlistDescargas !=null){
            if(await ValidarCancionRegistradaDescargas(playlistDescargas.idplaylist,idCancion)){
                res.status(200).send(estaRegistrada);
            }else{
                estaRegistrada = false;
                res.status(202).send(estaRegistrada);
            }
         }else{
            console.log('No se pudo recuperar la playlist de tipo Descargas');
            res.status(500).send({error:'No se pudo recuperar la plylist de tipo Descargas'});
        } 
    }catch (error) {
        res.status(500).send({error: error});
        console.log(error);
    }
}

async function ObtenerPlaylistDescargasDeCuenta(idCuenta){
    var idTipoPlaylist = 4;
    const playlist = await conexionBaseDatos.query('SELECT * FROM PLAYLIST WHERE (IdCuenta = $1) AND (idTipoPlaylist = $2)',[idCuenta,idTipoPlaylist]);
    if(playlist.rowCount>0){
        return playlist.rows[0];
    }else{
        return null;
    }
}

async function ValidarCancionRegistradaDescargas(idPlaylist,idCancion){
    const respuesta = await conexionBaseDatos.query('SELECT * FROM PlaylistCanciones Where (idPlaylist = $1) and (idCancion = $2);',[idPlaylist,idCancion]);
    if(respuesta.rowCount>0){
        return true;
    }
    return false;
}

  module.exports={
    ValidarCancionEnDescargas
}