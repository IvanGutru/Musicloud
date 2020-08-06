const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const CrearCuentaArtista = async(req, res) =>{
    try {
        const cuentaArtista = {idCuenta: req.body.idCuenta, idArtista: req.body.idArtista}
        const respuesta = await conexionBaseDatos.query('INSERT INTO CuentaArtista (idCuenta, idArtista) VALUES ($1,$2);',
        [cuentaArtista.idCuenta,cuentaArtista.idArtista])
        if(respuesta.rowCount>0){
            res.send({Mensaje:'Se guardó la CuentaArtista'});
            console.log('Se guardó la CuentaArtista');
        }else{
            res.status(500).send({error: 'Ocurrió un error al la CuentaArtista'});
        }

    } catch (error) {
        res.status(500).send({error:error});
    }
}

module.exports ={
    CrearCuentaArtista
}