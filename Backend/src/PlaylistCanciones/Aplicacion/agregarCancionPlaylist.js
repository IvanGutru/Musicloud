const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');


const agregarCancionPlaylist = async (req,res) =>{
    try {
        var idCancion = req.params.idCancion;
        var idPlaylist = req.params.idPlaylist;
        if(await validarCancionNoRegistradaEnPlaylist(idCancion,idPlaylist)!=false){
            if(GuardarCancionEnPlaylist(idPlaylist,idCancion)){
                res.send('Se añadió la canción a la playlist')
            }else{
                res.status(500).send({error:'Error al guardar la canción'});
            }
        }else{
            res.status(500).send({error: 'La canción ya está registrada en la playlist seleccionada'});
        }
       
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}
async function GuardarCancionEnPlaylist(idPlaylist,idCancion){
    const respuesta = await conexionBaseDatos.query('INSERT INTO PlaylistCanciones (idPlaylist,idCancion) VALUES($1,$2)',
            [idPlaylist,idCancion]);
            if(respuesta.rowCount >0){
                return true;
            }else{
                return false;
            }
}
async function validarCancionNoRegistradaEnPlaylist(idCancion,idPlaylist){
    const respuesta = await conexionBaseDatos.query('SELECT * FROM PlaylistCanciones where idCancion = $1 and idPlaylist = $2;',[idCancion,idPlaylist]);
    if(respuesta.rowCount>0){
        return false;
    }else{
        return true;
    }

}


module.exports ={
    agregarCancionPlaylist
} 