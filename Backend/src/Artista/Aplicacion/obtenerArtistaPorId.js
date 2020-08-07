const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const obtenerArtistaPorId = async(req, res) =>{
    try{
        var idArtista = req.params.idArtista;
        const respuesta = await conexionBaseDatos.query('SELECT * FROM Artista Where idArtista = $1',[idArtista]);
        if(respuesta.rowCount >0){
            res.send(respuesta.rows[0]);
        }else{
            res.status(500).send({error:'No existen artistas con ese nombre'});
        }
        
    }catch(error){
        console.log(error);
    }
}

module.exports ={
    obtenerArtistaPorId
}