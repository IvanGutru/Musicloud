const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');


const ObtenerPlaylistDeSistema = async(req, res) =>{
    var idPlaylistSistema = req.params.idPlaylistSistema;
    try {
        const respuesta = await conexionBaseDatos.query('SELECT * FROM Playlist WHERE idTipoPlaylist = $1',[idPlaylistSistema]);
        if(respuesta.rowCount>0){
            res.send(respuesta.rows)
        }else{
            res.status(500).send({error:'No se encontraron playlist del sistema'});
        }
    } catch (error) {
        res.send({error:error});
    }

}

module.exports ={
    ObtenerPlaylistDeSistema
}