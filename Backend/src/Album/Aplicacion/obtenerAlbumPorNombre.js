const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');


const obtenerAlbumPorNombre = async (req, res)=>{
    var nombreAlbum = req.params.nombreAlbum;
    try {
        const respuesta =await conexionBaseDatos.query('SELECT * FROM Album Where nombre ILIKE $1',[nombreAlbum+'%']);
        if(respuesta.rowCount > 0){
            res.send(respuesta.rows);
        }else{
            res.status(500).send({error:'No existen albumes con ese nombre'});
        }
    } catch (error) {
        res.send({error: error});
    }

}

module.exports ={
    obtenerAlbumPorNombre
}