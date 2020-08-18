const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const ObtenerPlaylistInicio = async(req, res) =>{
    try {
        const RESPUESTA = await conexionBaseDatos.query('SELECT * FROM Playlist Where publica = true LIMIT 20;');
        if(RESPUESTA.rowCount>0){
            res.send(RESPUESTA.rows);
        }else{
            res.status(500).send({error: 'No hay playlist Registradas'});
        }
    } catch (error) {
        res.status(500).send({error:error});
    }
}

module.exports ={
    ObtenerPlaylistInicio
}