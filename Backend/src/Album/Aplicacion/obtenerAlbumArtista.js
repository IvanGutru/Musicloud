const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const obtenerAlbumArtista = async(req,res) =>{
    var nombreAlbum = req.params.nombreAlbum;
    try {
        const album = await conexionBaseDatos.query('SELECT * FROM Album Where nombre ILIKE $1',[nombreAlbum+'%']);

        if(album.rowCount > 0){
            console.log('entro');
            const albumRecuperado = album.rows[0];
            console.log(albumRecuperado.idArtista);
            const artista = await conexionBaseDatos.query('SELECT * FROM Artista Where idArtista = $1',[albumRecuperado.idArtista]);
            if(artista.rowCount >0){
                res.send(album.rows[0]);
                console.log('se hizo');
            }
        }else{
            res.status(500).send({error:'No existe un album con el Id establecido'});
        }
    } catch (error) {
        res.send({error:error});
        console.log(error);
    }

}

module.exports = {
    obtenerAlbumArtista
}
