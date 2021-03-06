const {Router} = require('express');
const router = Router();

const {getCuentaPorId } = require('../controllers/index.controller');
router.get('/Cuenta', getCuentaPorId);

//Rutas de cuenta
const { crearCuenta } = require('../Cuenta/Aplicacion/crearCuenta');
router.post('/Cuenta',crearCuenta);

const { EliminarCuenta } = require('../Cuenta/Aplicacion/eliminarCuentaPorCorreo');
router.delete('/Cuenta/:correo',EliminarCuenta);

const { ConvertirseEnCreadorDeContenido } = require('../Cuenta/Aplicacion/convertirseEnCreadorDeContenido');
router.put('/Cuenta/CreadorContenido/:idCuenta',ConvertirseEnCreadorDeContenido);

const { ActualizarCuenta } = require('../Cuenta/Aplicacion/actualizarCuenta');
router.put('/Cuenta/Actualizar',ActualizarCuenta);

const { login } = require('../Cuenta/Aplicacion/login');
router.post('/Cuenta/Login',login);

const {getTokens } = require('../controllers/index.controller');
router.get('/Cuenta/Tokens', getTokens);

//Rutas de Artista
const { obtenerArtistaPorNombre } = require('../Artista/Aplicacion/mostrarArtistasPorNombre');
router.get('/Artista/:nombre',obtenerArtistaPorNombre);

const { obtenerArtistaPorId } = require('../Artista/Aplicacion/obtenerArtistaPorId');
router.get('/Artista/Id/:idArtista',obtenerArtistaPorId);

const { ObtenerArtistasHome } = require('../Artista/Aplicacion/obtenerArtistasHome');
router.get('/ArtistaHome',ObtenerArtistasHome);

const {CrearArtista} = require('../Artista/Aplicacion/crearArtista');
router.post('/Artista',CrearArtista);

const {EliminarArtista} = require('../Artista/Aplicacion/eliminarArtistaPorNombre');
router.delete('/Artista/:nombre',EliminarArtista);

const{ObtenerImagenArtista} = require('../Artista/Aplicacion/obtenerImagenArtista');
router.get('/Artista/imagen/:nombreImagen',ObtenerImagenArtista);

//RutaCuenta Artista
const{ CrearCuentaArtista} = require('../CuentaArtista/Aplicacion/crearCuentaArtista');
router.post('/CuentaArtista',CrearCuentaArtista);

const{ObtenerCuentaArtista} = require('../CuentaArtista/Aplicacion/obtenerCuentaArtistaById');
router.get('/CuentaArtista/:idCuenta',ObtenerCuentaArtista);


//Rutas de Album
const { obtenerAlbumPorId} = require('../Album/Aplicacion/ObtenerAlbumPorId');
router.get('/Album/Id/:idAlbum',obtenerAlbumPorId);

const { obtenerAlbumArtista} = require('../Album/Aplicacion/obtenerAlbumArtista');
router.get('/AlbumArtista/:nombreAlbum',obtenerAlbumArtista);

const {obtenerAlbumPorIdArtista} = require('../Album/Aplicacion/obtenerAlbumPorIdArtista');
router.get('/Album/:idArtista',obtenerAlbumPorIdArtista);

const { obtenerAlbumPorNombre} = require('../Album/Aplicacion/obtenerAlbumPorNombre');
router.get('/Album/Nombre/:nombreAlbum',obtenerAlbumPorNombre);

const{CrearAlbum} = require('../Album/Aplicacion/crearAlbum');
router.post('/Album',CrearAlbum);

const{EliminarAlbumPorNombreID} = require('../Album/Aplicacion/eliiminarAlbumPorNombreId');
router.delete('/Album/:nombre/:idArtista',EliminarAlbumPorNombreID);

const { ObtenerAlbumesHome } = require('../Album/Aplicacion/obtenerAlbumesHome');
router.get('/AlbumHome',ObtenerAlbumesHome);

const{ObtenerImagenAlbum} = require('../Album/Aplicacion/obtenerImagenAlbum');
router.get('/Album/imagen/:nombreImagen',ObtenerImagenAlbum);

//Rutas de cacion
const {CrearCancion} = require('../Cancion/Aplicacion/crearCancion');
router.post('/Cancion',CrearCancion);

const { obtenerCancionesPorIdAlbum } = require('../Cancion/Aplicacion/obtenerCancionesPorIdAlbum');
router.get('/Canciones/:idAlbum',obtenerCancionesPorIdAlbum);

const { obtenerCancionesPorId } = require('../Cancion/Aplicacion/obtenerCancionPorId');
router.get('/Canciones/Id/:idCancion',obtenerCancionesPorId);

//Rutas Playlist
const {CrearPlaylist} = require('../Playlist/Aplicacion/crearPlaylist');
router.post('/Playlist',CrearPlaylist);

const {EliminarPlaylistPorNombre} = require('../Playlist/Aplicacion/eliminarPlaylistPorNombre');
router.delete('/Playlist/EliminarNombre/:nombre',EliminarPlaylistPorNombre);

const {EliminarPlaylistPorId} = require('../Playlist/Aplicacion/eliminarPlaylistPorId');
router.delete('/Playlist/Eliminar/:idPlaylist',EliminarPlaylistPorId);

const {EliminarCancionDePlaylist} = require('../Playlist/Aplicacion/eliminarCancionDePlaylist');
router.delete('/Playlist/Eliminar/:idPlaylist/:idCancion',EliminarCancionDePlaylist);

const {AgregarCancionAmegusta} = require('../Playlist/Aplicacion/agregarCancionAMegusta');
router.post('/Playlist/MeGusta/:idCancion/:idCuenta',AgregarCancionAmegusta);

const {QuitarCancionDeMeGusta} = require('../Playlist/Aplicacion/quitarCancionDeMegusta');
router.delete('/Playlist/MeGusta/:idCancion/:idCuenta',QuitarCancionDeMeGusta);

const {ValidarCancionMeGusta} = require('../Playlist/Aplicacion/validarCancionEnMeGusta');
router.get('/Playlist/MeGusta/:idCancion/:idCuenta',ValidarCancionMeGusta);

const {AgregarCancionADescargas} = require('../Playlist/Aplicacion/agregarCancionADescargas');
router.post('/Playlist/Descargas/:idCancion/:idCuenta',AgregarCancionADescargas);

const {QuitarCancionDescargas} = require('../Playlist/Aplicacion/quitarCancionDescargas');
router.delete('/Playlist/Descargas/:idCancion/:idCuenta', QuitarCancionDescargas);

const {ValidarCancionEnDescargas} = require('../Playlist/Aplicacion/validarCancionEnDescargas');
router.get('/Playlist/Descargas/:idCancion/:idCuenta',ValidarCancionEnDescargas);

const{ObtenerPlaylistDeSistema} = require('../Playlist/Aplicacion/obtnerPlaylistDeSistema');
router.get('/Playlist/Sistema/:idPlaylistSistema',ObtenerPlaylistDeSistema);

const{ObtenerPlaylistDeCuenta} = require('../Playlist/Aplicacion/obtenerPlaylistCuenta.js');
router.get('/Playlist/Usuario/:idCuenta',ObtenerPlaylistDeCuenta);

const{ObtenerPlaylistTipoUsuario} = require('../Playlist/Aplicacion/obtenerPlaylistTipoUsuario');
router.get('/Playlist/TipoUsuario/:idCuenta',ObtenerPlaylistTipoUsuario);

const{ObtenerPlaylistPorNombre} = require('../Playlist/Aplicacion/obtenerPlaylistPorNombre');
router.get('/Playlist/Publicas/:nombre',ObtenerPlaylistPorNombre);

const{ObtenerPlaylistInicio} = require('../Playlist/Aplicacion/obtenerPlaylistInicio');
router.get('/Playlist/Inicio',ObtenerPlaylistInicio);

const{ObtenerImagenPlaylist} = require('../Playlist/Aplicacion/obtenerImagenPlaylist');
router.get('/Playlist/imagen/:nombreImagen',ObtenerImagenPlaylist);

//Rutas Historial
const {añadirCancionAHistorial} = require('../Historial/Aplicacion/AñadirCancionAHistorial');
router.post('/Cancion/Historial/:idCancion/:idCuenta',añadirCancionAHistorial);

const {obtenerHistorialReproduccion} = require('../Historial/Aplicacion/obtenerHistorialCancionesCuenta');
router.get('/Historial/:idCuenta',obtenerHistorialReproduccion);

//Rutas Playlist Canciones
const {agregarCancionPlaylist} = require('../PlaylistCanciones/Aplicacion/agregarCancionPlaylist');
router.post('/PlaylistCanciones/:idPlaylist/:idCancion',agregarCancionPlaylist);

const {ObtenerPlaylistCancionesPorIdPlaylist} = require('../PlaylistCanciones/Aplicacion/obtenerPlaylistCancionesPorIdPlaylist');
router.get('/PlaylistCanciones/:idPlaylist',ObtenerPlaylistCancionesPorIdPlaylist);
//Rutas de géneros
const{ObtenerGeneros} = require('../Genero/Aplicacion/obtenerGeneros');
router.get('/Generos',ObtenerGeneros);

const{ObtenerGenerosPorId} = require('../Genero/Aplicacion/obtenerGenerosPorId');
router.get('/Generos/ObtenerPorId/:idGenero',ObtenerGenerosPorId);

const{ObtenerIdGenero} = require('../Genero/Aplicacion/obtenerIdGenero');
router.get('/Generos/ObtenerId/:nombre',ObtenerIdGenero);

const{obtenerAlbumPorGenero} = require('../Genero/Aplicacion/obtenerAlbumesPorGenero');
router.get('/Generos/Album/:idGenero',obtenerAlbumPorGenero);

//Rutas BibliotecaPropia

const {CrearBibliotecaPropia} = require('../BibliotecaPropia/Aplicacion/crearBibliotecaPropia');
router.post('/BibliotecaPropia',CrearBibliotecaPropia);

const {ObtenerCancionesBibliotecaPropia} = require('../BibliotecaPropia/Aplicacion/obtenerCancionesBibliotecaPropia');
router.get('/BibliotecaPropia/:idPlaylist/:idCuenta',ObtenerCancionesBibliotecaPropia);

const{ObtenerImagenBibliotecaPropia} = require('../BibliotecaPropia/Aplicacion/obtenerImagenBibliotecaPropia');
router.get('/BibliotecaPropia/:nombreImagen',ObtenerImagenBibliotecaPropia);


module.exports = router;
