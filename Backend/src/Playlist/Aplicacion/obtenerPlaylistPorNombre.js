const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');


const ObtenerPlaylistPorNombre = async(req, res) =>{
    let nombre = req.params.nombre;
    try {
        const respuesta = await conexionBaseDatos.query('SELECT * FROM Playlist WHERE nombre ILIKE $1 and publica = true;',['%'+nombre+'%']);
        if(respuesta.rowCount>0){
            res.send(respuesta.rows)
            console.log('Se han obtenido las playlist');
        }else{
            res.status(500).send({error:'No existen playlist con ese nombre'});
        }
    } catch (error) {
        res.status(500).send({error:error});
        console.log(error);
    }

}

module.exports ={
    ObtenerPlaylistPorNombre
}