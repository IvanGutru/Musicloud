class Cancion{
    constructor(idCancion, nombre,duracion,archivo,idAlbum){
        this.idCancion = idCancion;
        this.nombre = nombre;
        this.duracion = duracion;
        this.archivo = archivo;
        this.idAlbum = idAlbum;
    }
}

module.exports = Cancion;