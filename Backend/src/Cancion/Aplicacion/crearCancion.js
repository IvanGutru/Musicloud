const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');
const crypto = require('crypto');

const CrearCancion= async (req, res)=>{

    try {
        const cancion={nombre: req.body.nombre,duracion: req.body.duracion, archivo:req.body.archivo, idAlbum: req.body.idAlbum,
        portada: req.body.portada};
            cancion.idCancion = generarIdCancion();
            const respuesta = await conexionBaseDatos.query('INSERT INTO Cancion (idCancion,nombre,duracion,archivo,idAlbum,portada) VALUES ($1,$2,$3,$4,$5,$6);',
            [cancion.idCancion,cancion.nombre,cancion.duracion,cancion.archivo,cancion.idAlbum,cancion.portada]);
            if(respuesta.rowCount>0){
                res.send({Mensaje: 'Se registro la cancion con éxito'});
                console.log('Se registró la canción');
            }else{
                res.status(500).send({error: 'Ocurrió un error al guardar el cancion'});
            }

    } catch (error) {
        res.status(500).send({error:'Error en base de datos'});
        console.log(error);
    }
}


function generarIdCancion(){
    var current_date = (new Date()).valueOf().toString();
    var random = Math.random().toString();  
    const idCancion = crypto.createHash('sha1').update(current_date+random).digest('hex');
    return idCancion;
}

module.exports ={
    CrearCancion
}