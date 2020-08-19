const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const ObtenerCuentaArtista = async(req, res) =>{
    var idCuenta = req.params.idCuenta;
    try {
        const respuesta = await conexionBaseDatos.query('SELECT * FROM CuentaArtista WHERE idCuenta = $1',[idCuenta]);
        if(respuesta.rowCount>0){
            res.send(respuesta.rows[0])
        }else{
            res.status(500).send({error:'No se encontraron CuentaArtistas registradas'});
        }
    } catch (error) {
        res.send({error:error});
    }

}
module.exports = {
    ObtenerCuentaArtista
}
