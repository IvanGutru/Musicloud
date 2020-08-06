const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const ObtenerArtistasHome = async(req, res) =>{
    try {
        const respuesta = await conexionBaseDatos.query('SELECT * FROM Artista ORDER BY nombre LIMIT 10;');
        if(respuesta.rowCount>0){
            res.send(respuesta.rows)
        }else{
            res.status(500).send({error: 'No existe ningun artista registrado'});
        }
    } catch (error) {
        res.status(500).send({error:error});
    }
}

module.exports ={
    ObtenerArtistasHome
}