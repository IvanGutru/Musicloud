const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');


const obtenerCancionesPorId = async (req,res) =>{
    try {
        var idCancion = req.params.idCancion;
        const respuesta = await conexionBaseDatos.query('SELECT * FROM Cancion Where IdCancion = $1',[idCancion]);
        if(respuesta.rowCount >0){
            res.send(respuesta.rows[0])
          
        }else{
            res.status(500).send({error:'No hay canciones registradas'});
        }
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

module.exports ={
    obtenerCancionesPorId
} 