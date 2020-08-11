const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const ObtenerAlbumesHome = async(req, res) =>{
    try {
        const respuesta = await conexionBaseDatos.query('SELECT * FROM Album ORDER BY fechaRegistro DESC LIMIT 10;');
        if(respuesta.rowCount>0){
            res.send(respuesta.rows)
        }else{
            res.status(500).send({error: 'No existe ningun album registrado'});
        }
    } catch (error) {
        res.status(500).send({error:error});
    }
}

module.exports ={
    ObtenerAlbumesHome
}