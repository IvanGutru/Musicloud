const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');
const { query } = require('../../Utilidades/conexionBaseDatos');


const EliminarCuenta = async(req, res) =>{
    try{
        let correo = req.params.correo;
        let cuenta = await ObtenerCuenta(correo); 
        if(await EliminarPlaylistDefault(cuenta.idcuenta)){
             const respuesta = await conexionBaseDatos.query('DELETE FROM Cuenta Where correo = $1;',[correo]);
             if(respuesta.rowCount>0){
                res.send({Mensaje: 'Cuenta eliminada'});
              }else{
                 res.status(500).send({error: 'Error al eliminar la cuenta'});
             }
        }
        
    } catch (error) {
        res.status(500).send({error:error});
        console.log(error);
    }

}

async function EliminarPlaylistDefault(idCuenta){
    const respuesta = await conexionBaseDatos.query('Delete from Playlist where idCuenta = $1;',[idCuenta]);
    if(respuesta.rowCount>0){
        return true;
    }
    return false;
}

async function ObtenerCuenta(correo){
    const respuesta = await conexionBaseDatos.query('SELECT * FROM Cuenta where correo = $1;',[correo]);
    if(respuesta.rowCount>0){
        return respuesta.rows[0];
    }
    return null;
}

module.exports ={
    EliminarCuenta
}