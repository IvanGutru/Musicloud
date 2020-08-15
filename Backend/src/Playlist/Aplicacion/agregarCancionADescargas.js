const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const AgregarCancionADescargas = async(req,res) =>{
    try {
        var idCancion = req.params.idCancion;
        var idCuenta = req.params.idCuenta;
        var playlistDescargas = await ObtenerPlaylistDescargasDeCuenta(idCuenta);
        if(playlistDescargas !=null){
            if(await ValidarCancionNoRegistradaEnDescargas(playlistDescargas.idplaylist,idCancion)){
                if(await GuardarCancionEnDescargas(playlistDescargas.idplaylist,idCancion)){
                    res.send({Mensaje:'Se ha guardardo la canción en Descargas'});
                }else{
                    console.log('No se pudo guardar la canción en descargas');
                    res.status(500).send('No se pudo guardar la canción en descargas');
                }
            }else{
                res.status(500).send({error: 'La canción seleccionada ya se encuentra en tu lista de descargas'});
            }

        }else{
            console.log('No se pudo recuperar la plylist de tipo Descargas');
            res.status(500).send({error:'No se pudo recuperar la plylist de tipo Descargas'});
        }
        
    } catch (error) {
        res.status(500).send({error: error});
        console.log(error);
    }
}


async function ObtenerPlaylistDescargasDeCuenta(idCuenta){
    var idTipoPlaylist = 4;
    const playlist = await conexionBaseDatos.query('SELECT * FROM PLAYLIST WHERE (IdCuenta = $1) AND (idTipoPlaylist = $2)',[idCuenta,idTipoPlaylist]);
    if(playlist.rowCount>0){
        return playlist.rows[0];
    }else{
        return null;
    }
}

async function GuardarCancionEnDescargas(idPlaylist,idCancion){
    const playlistCanciones = await conexionBaseDatos.query('INSERT INTO PlaylistCanciones(idPlaylist,idCancion) VALUES ($1,$2);',[idPlaylist,idCancion]);
    if(playlistCanciones.rowCount>0){
        return true;
    }
    return false;
}

async function ValidarCancionNoRegistradaEnDescargas(idPlaylist,idCancion){
    const respuesta = await conexionBaseDatos.query('SELECT * FROM PlaylistCanciones Where (idPlaylist = $1) and (idCancion = $2);',[idPlaylist,idCancion]);
    if(respuesta.rowCount>0){
        return false;
    }
    return true;
}
module.exports={
    AgregarCancionADescargas
}