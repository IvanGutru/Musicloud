const {Router} = require('express');
const router = Router();

const {getCuentaPorId } = require('../controllers/index.controller');
router.get('/Cuenta', getCuentaPorId);

//Rutas de cuenta
const { crearCuenta} = require('../Cuenta/Aplicacion/crearCuenta');
router.post('/Cuenta',crearCuenta);

const { login } = require('../Cuenta/Aplicacion/login');
router.post('/Cuenta/Login',login);

const {getTokens } = require('../controllers/index.controller');
router.get('/Cuenta/Tokens', getTokens);

//Rutas de Artista
const {obtenerArtistaPorNombre} = require('../Artista/Aplicacion/mostrarArtistas');
router.get('/Artista/:nombre',obtenerArtistaPorNombre);

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

module.exports = router;
