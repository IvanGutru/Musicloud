const fs = require('fs');

const ObtenerImagenArtista = async(req,res)=>{
    try {
    var nombreImagen = req.params.nombreImagen;
    var pathImagenes = '/home/ivangutru/Documentos/Musicloud/Backend/Imagenes/';
    fs.createReadStream(pathImagenes+nombreImagen,'base64').pipe(res);
    
    } catch (error) {
        console.log(error);
    }
    
}

module.exports ={
    ObtenerImagenArtista
}