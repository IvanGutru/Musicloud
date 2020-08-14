const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const obtenerAlbumPorId = async(req,res) =>{
    var idAlbum = req.params.idAlbum;
    try {
        const respuesta = await conexionBaseDatos.query('SELECT * FROM Album Where idAlbum = $1',[idAlbum]);
        if(respuesta.rowCount > 0){
            res.send(respuesta.rows[0]);
            console.log(respuesta.rows);
        }else{
            res.status(500).send({error:'No existe un album con el Id establecido'});
        }
    } catch (error) {
        res.send({error:error});
    }

}

module.exports = {
    obtenerAlbumPorId
}
