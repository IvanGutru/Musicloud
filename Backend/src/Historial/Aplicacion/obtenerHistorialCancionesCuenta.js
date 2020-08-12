const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');


const obtenerHistorialReproduccion = async (req,res) =>{
    try {
        var idCuenta = req.params.idCuenta;
        const respuesta = await conexionBaseDatos.query('SELECT * FROM Historial  Where IdCuenta = $1 ORDER BY fechaReproduccion DESC LIMIT 20',[idCuenta]);
        if(respuesta.rowCount >0){
            res.send(respuesta.rows)
            console.log('Se obtuvo el historial');
        }else{
            res.status(500).send({error:'El album no tiene canciones'});
        }
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

module.exports ={
    obtenerHistorialReproduccion
} 