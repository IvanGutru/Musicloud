const {Router} = require('express');
const router = Router();

const {getCuentaPorId } = require('../controllers/index.controller');
router.get('/Cuenta', getCuentaPorId);

//Rutas de cuenta
const { crearCuenta } = require('../Cuenta/Aplicacion/crearCuenta');
router.post('/Cuenta',crearCuenta);

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

const { ObtenerAlbumesHome } = require('../Album/Aplicacion/obtenerAlbumesHome');
router.get('/AlbumHome',ObtenerAlbumesHome);

const{ObtenerImagenAlbum} = require('../Album/Aplicacion/obtenerImagenAlbum');
router.get('/Album/imagen/:nombreImagen',ObtenerImagenAlbum);

//Rutas de cacion
const {CrearCancion} = require('../Cancion/Aplicacion/crearCancion');
router.post('/Cancion',CrearCancion);

const { obtenerCancionesPorIdAlbum } = require('../Cancion/Aplicacion/obtenerCancionesPorIdAlbum');
router.get('/Canciones/:idAlbum',obtenerCancionesPorIdAlbum);

//Rutas Playlist
const {CrearPlaylist} = require('../Playlist/Aplicacion/crearPlaylist');
router.post('/Playlist',CrearPlaylist);

const{ObtenerPlaylistDeSistema} = require('../Playlist/Aplicacion/obtnerPlaylistDeSistema');
router.get('/Playlist/Sistema/:idPlaylistSistema',ObtenerPlaylistDeSistema);

const{ObtenerImagenPlaylist} = require('../Playlist/Aplicacion/obtenerImagenPlaylist');
router.get('/Playlist/imagen/:nombreImagen',ObtenerImagenPlaylist);


//Rutas de géneros
const{ObtenerGeneros} = require('../Genero/Aplicacion/obtenerGeneros');
router.get('/Generos',ObtenerGeneros);

const{ObtenerIdGenero} = require('../Genero/Aplicacion/obtenerIdGenero');
router.get('/Generos/ObtenerId/:nombre',ObtenerIdGenero);


module.exports = router;
