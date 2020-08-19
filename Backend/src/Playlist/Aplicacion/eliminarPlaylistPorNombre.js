const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const EliminarPlaylistPorNombre = async(req, res) =>{
    var nombre = req.params.nombre;
    try {
        if(await EliminarPlaylist(nombre)){
            res.send({Mensaje: 'Se eliminó la playlist y su contenido'});
        }else{
            res.satuts(500).send({error: 'Error al eliminar la playlist'});
        }
    } catch (error) {
        res.status(500).send({error:error});
        console.log(error);
    }
}


async function EliminarPlaylist(nombre){
    const RESPUESTA = await conexionBaseDatos.query('DELETE FROM Playlist Where nombre = $1;',[nombre]);
    if(RESPUESTA.rowCount>0){
        return true;
    }
    return false;
}

module.exports ={
    EliminarPlaylistPorNombre
}