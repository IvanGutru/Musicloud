const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const EliminarAlbumPorNombreID = async(req, res) =>{
    var nombre = req.params.nombre;
    var idArtista = req.params.idArtista;
    try {
        if(await EliminarAlbum(nombre, idArtista)){
            res.send({Mensaje: 'Se eliminó el álbum'});
        }else{
            res.satuts(500).send({error: 'Error al eliminar el álbum'});
        }
    } catch (error) {
        res.status(500).send({error:error});
        console.log(error);
    }
}


async function EliminarAlbum(nombre, idArtista){
    const RESPUESTA = await conexionBaseDatos.query('DELETE FROM Album Where nombre = $1 and idArtista = $2;',[nombre,idArtista]);
    if(RESPUESTA.rowCount>0){
        return true;
    }
    return false;
}

module.exports ={
    EliminarAlbumPorNombreID
}