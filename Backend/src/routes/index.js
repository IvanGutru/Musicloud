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
const {obtenerAlbumPorIdArtista} = require('../Album/Aplicacion/obtenerAlbumPorIdArtista');
router.get('/Album/:idArtista',obtenerAlbumPorIdArtista);

module.exports = router;
