const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');
const crypto = require('crypto');
const {GuardarImagen, GenerarNombreImagen} = require('../../Utilidades/guardarImagenes');

const CrearArtista = async (req, res)=>{

    try {
        const artista ={nombre: req.body.nombre, descripcion: req.body.descripcion,fechaRegistro: req.body.fechaRegistro, 
            portada:req.body.portada,idGenero: req.body.idGenero};
        if(await ValidarArtistaNoRegistrado(artista.nombre)){
            artista.idArtista = generarIdArtista();
            artista.portada = ObtenerValorPortada(artista.portada, artista.nombre,artista.fechaRegistro);
            const respuesta = await conexionBaseDatos.query('INSERT INTO Artista (idArtista,nombre,descripcion,portada,fechaRegistro,idGenero) VALUES ($1,$2,$3,$4,$5,$6);',
            [artista.idArtista,artista.nombre,artista.descripcion,artista.portada,artista.fechaRegistro,artista.idGenero]);
            if(respuesta.rowCount>0){
                var artistaRegistrado = await ObtenerCuentaArtista(artista.idArtista);
                console.log(artistaRegistrado);
                if(artistaRegistrado!=null){
                    res.send(artistaRegistrado);
                }else{
                    res.status(500).send({error: 'Ocurrió un error al recuperar al artista'});
                }
            }else{
                res.status(500).send({error: 'Ocurrió un error al guardar al artista'});
            }
        }else{
            res.status(500).send({error:'El nombre del artista ingresado ya está registrado'});
        }
    } catch (error) {
        res.status(500).send({error:'Error en base de datos'});
    }
}

async function ValidarArtistaNoRegistrado(nombreArtista){
    const respuesta = await conexionBaseDatos.query('Select * FROM Artista Where nombre=$1;',[nombreArtista]);
    if(respuesta.rowCount>0){
        return false
    }
    return true;
}

function generarIdArtista(){
    var current_date = (new Date()).valueOf().toString();
    var random = Math.random().toString();  
    const idArtistaNuevo = crypto.createHash('sha1').update(current_date+random).digest('hex');
    return idArtistaNuevo;
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

async function ObtenerCuentaArtista(idArtista){
    const respuesta = await conexionBaseDatos.query('SELECT * FROM Artista Where idArtista = $1;',[idArtista]);
    return respuesta.rows[0];
}
module.exports ={
    CrearArtista
}