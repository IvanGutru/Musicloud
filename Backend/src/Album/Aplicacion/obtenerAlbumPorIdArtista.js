const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');


const obtenerAlbumPorIdArtista =async(req, res) =>{
    try {
        var idArtista = req.params.idArtista;
        const respuesta = await conexionBaseDatos.query('SELECT * FROM Album Where IdArtista = $1',[idArtista]);
        if(respuesta.rowCount >0){
            res.send(respuesta.rows);
        }else{
            res.status(500).send({error: 'No se encontraron albumes del artista'});
        }
    } catch (error) {
        res.status(500).send({error: error});
    }
}

module.exports ={
    obtenerAlbumPorIdArtista
}