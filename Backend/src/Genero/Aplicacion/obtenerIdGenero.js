const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const ObtenerIdGenero = async(req,res) =>{
    try {
        var nombre = req.params.nombre;
        const respuesta = await conexionBaseDatos.query('SELECT idGenero FROM Genero WHERE nombre = $1;',[nombre]);
        if(respuesta.rowCount>0){
            res.send(respuesta.rows);
        }else{
            res.status(500).send({error:'No hay géneros registrados con ese nombre'});
        }
    } catch (error) {
        res.status(500).send({error:error});
    }
}
module.exports ={
    ObtenerIdGenero
}