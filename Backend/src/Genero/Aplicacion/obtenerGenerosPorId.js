const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const ObtenerGenerosPorId = async(req,res) =>{
    try {
        var idGenero = req.params.idGenero;
        const respuesta = await conexionBaseDatos.query('SELECT * FROM Genero WHERE idGenero = $1;',[idGenero]);
        if(respuesta.rowCount>0){
            res.send(respuesta.rows[0]);
        }else{
            res.status(500).send({error:'No hay géneros registrados con ese id'});
        }
    } catch (error) {
        res.status(500).send({error:error});
    }
}
module.exports ={
    ObtenerGenerosPorId
}