const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');
const bcrypt = require('bcrypt');

const ActualizarCuenta = async(req, res) =>{
    const cuenta = {idCuenta:req.body.idCuenta,contraseña: req.body.contraseña,apellidos: req.body.apellidos, nombre: req.body.nombre}
    try {
        cuenta.contraseña = await bcrypt.hash(cuenta.contraseña,10);
        const respuesta = await conexionBaseDatos.query('UPDATE Cuenta set nombre = $1, apellidos = $2,'
         +' contraseña = $3 where idCuenta =$4;',[cuenta.nombre,cuenta.apellidos,cuenta.contraseña,cuenta.idCuenta]);
        if(respuesta.rowCount>0){
            res.send({Mensaje: 'Se han modficado con éxito los datos'});
        }else{
                res.send({error:'No hubo modificaciones en la base de datos'});
        }
      
    } catch (error) {
        res.status(500).send({error:error});
    }
}

module.exports ={
    ActualizarCuenta
}