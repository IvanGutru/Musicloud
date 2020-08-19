const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const EliminarArtista = async(req, res) =>{
    var nombre = req.params.nombre;
    try {
        if(await EliminarArtistaBD(nombre)){
            res.send({Mensaje: 'Se eliminó al Artista'});
        }else{
            res.status(500).send({error: 'Error al eliminar al artista'});
        }
    } catch (error) {
        res.status(500).send({error:error});
        console.log(error);
    }
}


async function EliminarArtistaBD(nombre){
    const RESPUESTA = await conexionBaseDatos.query('DELETE FROM Artista Where nombre = $1;',[nombre]);
    if(RESPUESTA.rowCount>0){
        return true;
    }
    return false;
}

module.exports ={
    EliminarArtista
}