const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');
const crypto = require('crypto');
const {GuardarImagen, GenerarNombreImagen} = require('../../Utilidades/guardarImagenes');

const CrearAlbum = async (req, res)=>{

    try {
        const album ={nombre: req.body.nombre, compania: req.body.compania,portada: req.body.portada,idGenero: req.body.idGenero,
        idArtista: req.body.idArtista, fechaRegistro: req.body.fechaRegistro};
            album.idAlbum = generarIdAlbum();
            console.log(album.idAlbum);
            album.portada = ObtenerValorPortada(album.portada, album.nombre,album.fechaRegistro);
            const respuesta = await conexionBaseDatos.query('INSERT INTO Album(idAlbum,nombre,compania,portada,idGenero,idArtista,fechaRegistro) VALUES ($1,$2,$3,$4,$5,$6,$7);',
            [album.idAlbum,album.nombre,album.compania,album.portada,album.idGenero,album.idArtista,album.fechaRegistro]);
            if(respuesta.rowCount>0){
                var albumRegistrado = await ObtenerAlbumRegistrado(album.idAlbum);
                console.log(albumRegistrado);
                if(albumRegistrado!=null){
                    res.send(albumRegistrado);
                }else{
                    res.status(500).send({error: 'Ocurrió un error al recuperar el album'});
                }
            }else{
                res.status(500).send({error: 'Ocurrió un error al guardar el album'});
            }

    } catch (error) {
        res.status(500).send({error:'Error en base de datos'});
    }
}


function generarIdAlbum(){
    var current_date = (new Date()).valueOf().toString();
    var random = Math.random().toString();  
    const idAlbum = crypto.createHash('sha1').update(current_date+random).digest('hex');
    return idAlbum;
}


function ObtenerValorPortada(portada,nombre,fechaCreacion){
    if(portada == ""){
        var portadaDefault = 'portadaArtista.png';
        return portadaDefault;
    }else{
        var nombreImagen = GenerarNombreImagen(nombre,fechaCreacion);        
        GuardarImagen(portada,nombreImagen);
        return nombreImagen;
    }
}

async function ObtenerAlbumRegistrado(idAlbum){
    const respuesta = await conexionBaseDatos.query('SELECT * FROM Album Where idAlbum = $1;',[idAlbum]);
    return respuesta.rows[0];
}
module.exports ={
    CrearAlbum
}