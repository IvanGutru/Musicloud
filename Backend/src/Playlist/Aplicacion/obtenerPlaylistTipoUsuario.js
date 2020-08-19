const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');


const ObtenerPlaylistTipoUsuario = async(req, res) =>{
    var idCuenta = req.params.idCuenta;
    var idTipoPlaylist = 2;
    var idTipoSistema = 1;
    try {
        const respuesta = await conexionBaseDatos.query('SELECT * FROM Playlist WHERE (idCuenta = $1) and (idTipoPlaylist = $2 OR idTipoPlaylist = $3)',
        [idCuenta,idTipoPlaylist, idTipoSistema]);
        if(respuesta.rowCount>0){
            res.send(respuesta.rows)
        }else{
            res.status(500).send({error:'El usuario aún no tiene playlist registradas'});
        }
    } catch (error) {
        res.status(500).send({error:error});
        console.log(error);
    }

}

module.exports ={
    ObtenerPlaylistTipoUsuario
}