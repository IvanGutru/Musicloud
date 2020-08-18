const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');


const EliminarCancionDePlaylist = async(req, res) =>{
    var idPlaylist = req.params.idPlaylist;
    var idCancion = req.params.idCancion;
    try {
        if(await EliminarPlaylistCanciones(idPlaylist,idCancion)){
            res.send({Mensaje: 'Canción eliminada de playlist'});
        }else{
            console.log('Error al eliminar las canciones de la playlist');
            res.status(500).send({error: 'Error al eliminar las canciones de la playlist'});
        }
    } catch (error) {
        res.status(500).send({error:error});
        console.log(error);
    }

}
async function EliminarPlaylistCanciones(idPlaylist, idCancion){
    const RESPUESTA = await conexionBaseDatos.query('DELETE from PlaylistCanciones WHERE (idPlaylist = $1) AND (idCancion = $2);',
    [idPlaylist,idCancion]);
    if(RESPUESTA.rowCount>0){
        return true;
    }
    return false;
}

module.exports ={
    EliminarCancionDePlaylist
}