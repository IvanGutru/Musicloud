class Playlist{
    constructor(idPlaylist, nombre, publica, fechaCreacion, portada, idCuenta, idTipoPlaylist){
        this.idPlaylist = idPlaylist;
        this.nombre = nombre;
        this.publica = publica;
        this.fechaCreacion = fechaCreacion;
        this.portada = portada;
        this.idCuenta = idCuenta;
        this.idTipoPlaylist = idTipoPlaylist;
    }
}
module.exports = Playlist;