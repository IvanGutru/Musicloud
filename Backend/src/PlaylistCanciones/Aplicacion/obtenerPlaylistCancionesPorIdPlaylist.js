const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');


const ObtenerPlaylistCancionesPorIdPlaylist = async(req, res) =>{
    var idPlaylist = req.params.idPlaylist;
    try {
        const respuesta = await conexionBaseDatos.query('SELECT * FROM PlaylistCanciones WHERE idplaylist = $1',[idPlaylist]);
        if(respuesta.rowCount>0){
            res.send(respuesta.rows)
            console.log('Se han obtenido la playlistCanciones ');
        }else{
            res.status(500).send({error:'La playlist no tiene canciones agregadas'});
        }
    } catch (error) {
        res.status(500).send({error:error});
        console.log(error);
    }

}

module.exports ={
    ObtenerPlaylistCancionesPorIdPlaylist
}