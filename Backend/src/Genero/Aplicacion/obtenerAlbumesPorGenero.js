const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');


const obtenerAlbumPorGenero = async (req, res)=>{
    var idGenero = req.params.idGenero;
    try {
        const respuesta =await conexionBaseDatos.query('SELECT * FROM Album Where idGenero = $1 ORDER BY Random() LIMIT 3;',[idGenero]);
        if(respuesta.rowCount > 0){
            res.send(respuesta.rows);
            console.log('Se obtuvo al menos un album');
        }else{
            res.status(500).send({error:'No hay álbumes de ese genero'});
        }
    } catch (error) {
        res.send({error: error});
        console.log(error);
    }

}

module.exports ={
    obtenerAlbumPorGenero
}