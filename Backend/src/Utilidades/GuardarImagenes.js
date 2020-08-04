const {DecodificarBase64} = require('../Utilidades/DecodificarBase64');
const fs = require('fs');

function GuardarImagen(imagenCodificada,nombreImagen ,tipoImagen){
    var path = '/home/ivangutru/Documentos/Musicloud/Backend/Imagenes/';
    console.log('PASOX1');
    var imagenDecodificada = DecodificarBase64(imagenCodificada);
    var newPath = path+nombreImagen;
    fs.appendFile(newPath,imagenDecodificada, (err) =>{
      if(err) throw err;
      console.log('Se creo el archivo');
    })
    console.log('PASOX3');
}

function GenerarNombreImagen(nombreImagen, fechaCreacion){
  var nuevoNombreImagen = nombreImagen.replace(" ",""); 
  return nuevoNombreImagen+'-'+fechaCreacion+'.png';
}
module.exports ={
  GuardarImagen,
  GenerarNombreImagen
}