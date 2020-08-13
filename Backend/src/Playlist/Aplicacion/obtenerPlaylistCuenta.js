const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');


const ObtenerPlaylistDeCuenta = async(req, res) =>{
    var idCuenta = req.params.idCuenta;
    try {
        const respuesta = await conexionBaseDatos.query('SELECT * FROM Playlist WHERE idCuenta = $1',[idCuenta]);
        if(respuesta.rowCount>0){
            res.send(respuesta.rows)
            console.log('Se han obtenido las playlist del usuario');
        }else{
            res.status(500).send({error:'El usuario aún no tiene playlist registradas'});
        }
    } catch (error) {
        res.status(500).send({error:error});
        console.log(error);
    }

}

module.exports ={
    ObtenerPlaylistDeCuenta
}