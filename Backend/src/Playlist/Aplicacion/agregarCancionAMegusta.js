const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const AgregarCancionAmegusta = async(req,res) =>{
    try {
        var idCancion = req.params.idCancion;
        var idCuenta = req.params.idCuenta;
        var playlistMeGusta = await ObtenerPlaylistMeGustaDeCuenta(idCuenta);
        if(playlistMeGusta !=null){
            if(await ValidarCancionNoRegistradaEnMegusta(playlistMeGusta.idplaylist,idCancion)){
                if(await GuardarCancionEnMegusta(playlistMeGusta.idplaylist,idCancion)){
                    res.send({Mensaje:'Se ha guardardo la canción en Me gusta'});
                }else{
                    console.log('No se pudo guardar la canción');
                    res.status(500).send('No se pudo guardar la canción');
                }
            }else{
                res.status(501).send({error: 'La canción seleccionada ya ha sido agregada'});
            }

        }else{
            console.log('No se pudo recuperar la plylist de tipo Me gusta');
            res.status(500).send({error:'No se pudo recuperar la plylist de tipo Me gusta'});
        }
        
    } catch (error) {
        res.status(500).send({error: error});
        console.log(error);
    }
}


async function ObtenerPlaylistMeGustaDeCuenta(idCuenta){
    var idTipoPlaylist = 3;
    const playlist = await conexionBaseDatos.query('SELECT * FROM PLAYLIST WHERE (IdCuenta = $1) AND (idTipoPlaylist = $2)',[idCuenta,idTipoPlaylist]);
    if(playlist.rowCount>0){
        return playlist.rows[0];
    }else{
        return null;
    }
}

async function GuardarCancionEnMegusta(idPlaylist,idCancion){
    const playlistCanciones = await conexionBaseDatos.query('INSERT INTO PlaylistCanciones(idPlaylist,idCancion) VALUES ($1,$2);',[idPlaylist,idCancion]);
    if(playlistCanciones.rowCount>0){
        return true;
    }
    return false;
}

async function ValidarCancionNoRegistradaEnMegusta(idPlaylist,idCancion){
    const respuesta = await conexionBaseDatos.query('SELECT * FROM PlaylistCanciones Where (idPlaylist = $1) and (idCancion = $2);',[idPlaylist,idCancion]);
    if(respuesta.rowCount>0){
        return false;
    }
    return true;
}
module.exports={
    AgregarCancionAmegusta
}