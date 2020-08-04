const {DecodificarBase64} = require('./decodificarBase64');
const fs = require('fs');

function GuardarImagen(imagenCodificada,nombreImagen){
    var path = '/home/ivangutru/Documentos/Musicloud/Backend/Imagenes/';
    var imagenDecodificada = DecodificarBase64(imagenCodificada);
    var newPath = path+nombreImagen;
    console.log(newPath);
    fs.appendFile(newPath,imagenDecodificada,"binary", (err) =>{
      if(err) throw err;
      console.log('Se creo el archivo');
    })
}

function GenerarNombreImagen(nombreImagen, fechaCreacion){
  var nuevoNombreImagen = nombreImagen.replace(/ /g,'_'); 
  return nuevoNombreImagen+'-'+fechaCreacion+'.png';
}
module.exports ={
  GuardarImagen,
  GenerarNombreImagen
}