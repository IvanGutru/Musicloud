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

const { ObtenerArtistasHome } = require('../Artista/Aplicacion/obtenerArtistasHome');
router.get('/ArtistaHome',ObtenerArtistasHome);

const {CrearArtista} = require('../Artista/Aplicacion/crearArtista');
router.post('/Artista',CrearArtista);

//RutaCuenta Artista
const{ CrearCuentaArtista} = require('../CuentaArtista/Aplicacion/crearCuentaArtista');
router.post('/CuentaArtista',CrearCuentaArtista);

//Rutas de Album
const { obtenerAlbumPorId} = require('../Album/Aplicacion/ObtenerAlbumPorId');
router.get('/Album/Id/:idAlbum',obtenerAlbumPorId);

const {obtenerAlbumPorIdArtista} = require('../Album/Aplicacion/obtenerAlbumPorIdArtista');
router.get('/Album/:idArtista',obtenerAlbumPorIdArtista);

const { obtenerAlbumPorNombre} = require('../Album/Aplicacion/obtenerAlbumPorNombre');
router.get('/Album/Nombre/:nombreAlbum',obtenerAlbumPorNombre);

//Rutas de cacion

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
