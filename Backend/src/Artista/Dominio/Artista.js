class Artista{
    constructor(idArtista,nombre, descripcion, portada, fechaRegistro,idGenero){
        this.idArtista = idArtista;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.portada = portada;
        this.fechaRegistro = fechaRegistro;
        this.idGenero = idGenero;
    }
}

module.exports = Artista;