const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

const ObtenerCancionesBibliotecaPropia = async(req, res) => {
    try {
        var idPlaylist = req.params.idPlaylist;
        var idCuenta = req.params.idCuenta;
        const respuesta = await conexionBaseDatos.query('Select * from BibliotecaPropia where (idPlaylist = $1)'
        +'and (idCuenta = $2)',[idPlaylist,idCuenta]);
        if(respuesta.rowCount>0){
            res.send(respuesta.rows);
        }else{
            res.status(500).send({error:'Aún no tiene contenido en su Biblioteca'});
        }
    } catch (error) {
        res.status(500).send({error: error})
        console.log(error);
    }
  
}

module.exports ={
    ObtenerCancionesBibliotecaPropia
}