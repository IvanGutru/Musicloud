const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const QuitarCancionDescargas = async(req,res) =>{
    try {
        var idCancion = req.params.idCancion;
        var idCuenta = req.params.idCuenta;
        var playlistDescargas = await ObtenerPlaylistDescargas(idCuenta);
        if(playlistDescargas !=null){
            if(await ValidarCancionRegistradaDescargas(playlistDescargas.idplaylist,idCancion)){
                if(await EliminarCancionDescargas(playlistDescargas.idplaylist,idCancion)){
                    res.send({Mensaje:'Se ha quitado de Descargas'});
                }else{
                    console.log('No se pudo quitar la canción');
                    res.status(500).send('No se pudo quitar la canción');
                }
            }else{
                res.status(500).send({error: 'La canción no está registrada en la playlist'});
            }

        }else{
            console.log('No se pudo recuperar la playlist de tipo Dscargas');
            res.status(500).send({error:'No se pudo recuperar la plyalist de tipo Descargas'});
        }
        
    } catch (error) {
        res.status(500).send({error: error});
        console.log(error);
    }
}


async function ObtenerPlaylistDescargas(idCuenta){
    var idTipoPlaylist = 4;
    const playlist = await conexionBaseDatos.query('SELECT * FROM PLAYLIST WHERE (IdCuenta = $1) AND (idTipoPlaylist = $2)',[idCuenta,idTipoPlaylist]);
    if(playlist.rowCount>0){
        return playlist.rows[0];
    }else{
        return null;
    }
}

async function EliminarCancionDescargas(idPlaylist,idCancion){
    const playlistCanciones = await conexionBaseDatos.query('DELETE FROM PlaylistCanciones Where (idPlaylist = $1) and (idCancion = $2);',[idPlaylist,idCancion]);
    if(playlistCanciones.rowCount>0){ 
        return true;
    }
    return false;
}

async function ValidarCancionRegistradaDescargas(idPlaylist,idCancion){
    const respuesta = await conexionBaseDatos.query('SELECT * FROM PlaylistCanciones Where (idPlaylist = $1) and (idCancion = $2);',[idPlaylist,idCancion]);
    if(respuesta.rowCount>0){
        return true;
    }
    return false;
}
module.exports={
    QuitarCancionDescargas
}