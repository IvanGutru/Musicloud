const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const ObtenerGeneros = async(req,res) =>{
    try {
        const respuesta = await conexionBaseDatos.query('SELECT * FROM Genero;');
        if(respuesta.rowCount>0){
            res.send(respuesta.rows);
        }else{
            res.status(500).send({error:'No hay géneros registrados'});
        }
    } catch (error) {
        res.status(500).send({error:error});
    }
}
module.exports ={
    ObtenerGeneros
}