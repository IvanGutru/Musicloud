const {DecodificarBase64, decodeBase64Image} = require('../Utilidades/DecodificarBase64');
const fs = require('fs');

function GuardarImagen(imagenCodificada,nombreImagen ,tipoImagen){
    var path = '/home/ivangutru/Documentos/Musicloud/Backend/Imagenes/';
    var imagenDecodificada = DecodificarBase64(imagenCodificada);
    console.log('error');
    var newPath = path+nombreImagen;
    fs.appendFile(newPath,imagenDecodificada,"binary", (err) =>{
      if(err) throw err;
      console.log('Se creo el archivo');
    })
}

function GenerarNombreImagen(nombreImagen, fechaCreacion){
  var nuevoNombreImagen = nombreImagen.replace(" ","_"); 
  return nuevoNombreImagen+'-'+fechaCreacion+'.png';
}
module.exports ={
  GuardarImagen,
  GenerarNombreImagen
}