const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');


const obtenerCancionesPorIdAlbum = async (req,res) =>{
    try {
        var idAlbum = req.params.idAlbum;
        const respuesta = await conexionBaseDatos.query('SELECT * FROM Cancion Where IdAlbum = $1',[idAlbum]);
        if(respuesta.rowCount >0){
            res.send(respuesta.rows)
        }else{
            res.status(500).send({error:'El album no tiene canciones'});
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports ={
    obtenerCancionesPorIdAlbum
} 