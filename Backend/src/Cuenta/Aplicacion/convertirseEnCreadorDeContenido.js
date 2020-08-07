
const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const ConvertirseEnCreadorDeContenido = async(req, res) =>{
    var idCuenta = req.params.idCuenta; 
    try {
        console.log(idCuenta);
        const respuesta = await conexionBaseDatos.query('UPDATE Cuenta set CreadorContenido = true where idCuenta =$1',[idCuenta]);
        console.log(respuesta.rowCount);
        if(respuesta.rowCount>0){
            res.send({Mensaje: 'Se ha a agregado la funcionalidad de creador de contenido'});
        }else{
            console.log('No funciono');
        }
    } catch (error) {
        res.status(500).send({error:error});
    }
}

module.exports ={
    ConvertirseEnCreadorDeContenido
}