const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const obtenerArtistaPorNombre = async(req, res) =>{
    try{
        var nombreArtista = req.params.nombre;
        const respuesta = await conexionBaseDatos.query('SELECT * FROM Artista Where nombre ILIKE $1',[nombreArtista+'%']);
        if(respuesta.rowCount >0){
            res.send(respuesta.rows);
            console.log('Se jalo un artista');
        }else{
            res.status(500).send({error:'No existen artistas con ese nombre'});
            console.log('Valió verni');
        }
        
    }catch(error){
        console.log(error);
    }
}

module.exports ={
    obtenerArtistaPorNombre
}