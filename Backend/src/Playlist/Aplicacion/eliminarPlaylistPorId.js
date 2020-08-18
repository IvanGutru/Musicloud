const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');


const EliminarPlaylistPorId = async(req, res) =>{
    var idPlaylist = req.params.idPlaylist;
    try {
        if(await EliminarPlaylistCanciones(idPlaylist)){
            if(await EliminarPlaylist(idPlaylist)){
                console.log('Se eliminó la playlist y su contenido');
                res.send({Mensaje: 'Se eliminó la playlist y su contenido'});
            }else{
                console.log('Error al eliminar la playlist');
                res.satuts(500).send({error: 'Error al eliminar la playlist'});
            }
        }else{
            console.log('Error al eliminar las canciones de la playlist');
            res.satuts(500).send({error: 'Error al eliminar las canciones de la playlist'});
        }
    } catch (error) {
        res.status(500).send({error:error});
        console.log(error);
    }

}
async function EliminarPlaylistCanciones(idPlaylist){
    const RESPUESTA = await conexionBaseDatos.query('DELETE from PlaylistCanciones WHERE idPlaylist = $1;',[idPlaylist]);
    if(RESPUESTA.rowCount>0){
        return true;
    }
    return false;
}

async function EliminarPlaylist(idPlaylist){
    const RESPUESTA = await conexionBaseDatos.query('DELETE FROM Playlist Where idPlaylist = $1;',[idPlaylist]);
    if(RESPUESTA.rowCount>0){
        return true;
    }
    return false;
}

module.exports ={
    EliminarPlaylistPorId
}