const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');


const añadirCancionAHistorial = async (req,res) =>{
    try {
        var idCancion = req.params.idCancion;
        var idCuenta = req.params.idCuenta;
        var fechaReproduccion  = new Date();
        if(await validarCancionNoRegistradaEnHistorial(idCancion) != false){
            if(GuardarReproduccion(idCuenta, idCancion,fechaReproduccion)){
                res.send('Se añadió la canción al historial')
            }else{
                res.status(500).send({error:'Error al guardar Historial'});
            }
        }else if(await ActualizarHistorial(idCuenta,idCancion,fechaReproduccion)){
                res.status(201).send('Se actualizó el historial');
        }else{
            res.status(500).send({error:'Error al actualizar Historial'});
        }
       
    } catch (error) {
        res.status(500).send(error);
        
    }
}
async function GuardarReproduccion(idCuenta,idCancion,fechaReproduccion){
    const respuesta = await conexionBaseDatos.query('INSERT INTO Historial (fechaReproduccion,idCuenta,idCancion) VALUES($1,$2,$3)',
            [fechaReproduccion,idCuenta,idCancion]);
            if(respuesta.rowCount >0){
                return true;
            }else{
                console.log('No se pudo guardar el historial');
                return false;
            }
}
async function validarCancionNoRegistradaEnHistorial(idCancion, idCuenta){
    const respuesta = await conexionBaseDatos.query('SELECT * FROM Historial where (idCancion = $1) AND (IdCuenta = $2);',[idCancion,idCuenta]);
    if(respuesta.rowCount>0){
        return false;
    }else{
        return true;
    }

}

async function ActualizarHistorial(idCuenta, idCancion, fechaReproduccion){
    const respuesta = await conexionBaseDatos.query('UPDATE Historial set fechaReproduccion = $1 where idcuenta = $2 and idCancion = $3;',
    [fechaReproduccion,idCuenta, idCancion]);
    if(respuesta.rowCount>0){
        console.log('Se actualizó el historial');
        return true;
    }else{
        console.log('No se pudo actualizar');
        return false;
    }
}
module.exports ={
    añadirCancionAHistorial
} 