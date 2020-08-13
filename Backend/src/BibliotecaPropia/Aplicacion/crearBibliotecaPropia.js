const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');
const {GuardarImagen, GenerarNombreImagen} = require('../../Utilidades/guardarImagenes');

const CrearBibliotecaPropia = async (req, res)=>{

    try {
        const cancionBiblioteca ={nombreCancion: req.body.nombreCancion, generoCancion: req.body.generoCancion,albumCancion: req.body.albumCancion,
            portada: req.body.portada, duracion: req.body.duracion, archivo: req.body.archivo, fechaRegistro: req.body.fechaRegistro,idCuenta: req.body.idCuenta, idPlaylist:req.body.idPlaylist};
            cancionBiblioteca.portada = ObtenerValorPortada(cancionBiblioteca.portada, cancionBiblioteca.nombreCancion,cancionBiblioteca.fechaRegistro);
            if(await ValidarNumeroDeCanciones(cancionBiblioteca.idCuenta)){
                if(await GuardarCancionBiblioteca(cancionBiblioteca)){
                    var cancionBibliotecaRegistrada = await ObtenercancionBibliotecaRegistrada(cancionBiblioteca.idCuenta);
                    console.log('Casi lo logramos');
                    res.send(cancionBibliotecaRegistrada);
                    console.log(cancionBibliotecaRegistrada);
                }else{
                    res.status(500).send({error: 'Ocurrió un error al guardar el cancionBiblioteca'});
                    console.log('Error al guardar');
                }
            }else{
                res.status(500).send({error:'El número máximo permitido de canciones es 250'});
            }
    } catch (error) {
        res.status(500).send({error:'Error en base de datos'});
        console.log(error);
    }
}

async function GuardarCancionBiblioteca(cancionBiblioteca){
    const respuesta = await conexionBaseDatos.query('INSERT INTO BibliotecaPropia(nombreCancion,generoCancion,albumCancion,portada,duracion,archivo,idCuenta,idPlaylist)'+
    'VALUES ($1,$2,$3,$4,$5,$6,$7,$8);',[cancionBiblioteca.nombreCancion,cancionBiblioteca.generoCancion,cancionBiblioteca.albumCancion,cancionBiblioteca.portada,
        cancionBiblioteca.duracion,cancionBiblioteca.archivo,cancionBiblioteca.idCuenta, cancionBiblioteca.idPlaylist]);
        if(respuesta.rowCount>0){
            return true;
        }
        return false;
}
function ObtenerValorPortada(portada,nombre,fechaCreacion){
    if(portada == ""){
        var portadaDefault = 'portadaBibliotecaPropia.png';
        return portadaDefault;
    }else{
        var nombreImagen = GenerarNombreImagen(nombre,fechaCreacion);        
        GuardarImagen(portada,nombreImagen);
        return nombreImagen;
    }
}
async function ValidarNumeroDeCanciones(idCuenta){
    const respuesta = await conexionBaseDatos.query('SELECT * FROM BibliotecaPropia Where idCuenta = $1;',[idCuenta]);
    console.log(respuesta.rowCount);
    if(respuesta.rowCount <251){
        return true;
    }
    return false;
}

async function ObtenercancionBibliotecaRegistrada(idCuenta){
    const respuesta = await conexionBaseDatos.query('SELECT * FROM BibliotecaPropia Where idCuenta = $1 ORDER BY IdBibliotecaPropia DESC LIMIT 1;',[idCuenta]);
    return respuesta.rows[0];
}
module.exports ={
    CrearBibliotecaPropia
}