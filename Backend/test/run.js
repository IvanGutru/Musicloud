const CONEXBD = require('../src/Utilidades/conexionBaseDatos');
const app = require('../src/index');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { should } = require('chai');  // Using Should style
const Playlist = require('../src/Playlist/Dominio/Playlist');

chai.use(chaiHttp);
const {expect} = chai;

describe('Endpoints de Album:', () => {
    it("Manejar GET request /Album/Id/:idAlbum", (done) => {
        const idAlbum = '36b3e197d88c1fb956b54392387fc0294fd3d216';
        chai.request(app)
        .get(`/Album/Id/${idAlbum}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Manejar GET request /AlbumHome", (done) =>{
        chai.request(app)
        .get("/AlbumHome")
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Manejar GET request /Album/:idArtista", (done) => {
        const idArtista = '3cc0e0448bc2aea780ae259785b4d84de01d4637';
        chai.request(app)
        .get(`/Album/${idArtista}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Manejar GET request /Album/Nombre/:nombreAlbum", (done) => {
        const nombreAlbum = 'STARBOY';
        chai.request(app)
        .get(`/Album/Nombre/${nombreAlbum}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Obtener imagen álbum /Album/Imagen/:nombreImagen", (done) => {
        const nombreImagen = 'portadaAlbum.png';
        chai.request(app)
        .get(`/Album/Imagen/${nombreImagen}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });
    it("Crear ÁLBUM /Album", (done) => {
        const Album = {
            nombre:'AlbumPrueba',
            compania:false,
            fechaRegistro:'12-08-2020',
            portada:"",
            idGenero: 2,
            idArtista:'eb0c261b3e8b35f7a8628b5e4d4d4909a66e7353'
        };
        chai.request(app)
        .post('/Album')
        .set('Accept', 'aplication/json')
        .send(Album)
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Eliminar álbum /Album", (done) => {
        const nombre = 'AlbumPrueba';
        const idArtista = 'eb0c261b3e8b35f7a8628b5e4d4d4909a66e7353';
        chai.request(app)
        .delete(`/Album/${nombre}/${idArtista}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });
});

describe('Endpoints Artista', () =>{

   it("Crear Artista /Artista", (done) => {
        const Artista = {
            nombre:'ArtistaPrueba',
            descripcion:'DescripcionPrueba',
            fechaRegistro:'12-08-2020',
            portada:"",
            idGenero: 2
        };
        chai.request(app)
        .post('/Artista')
        .set('Accept', 'aplication/json')
        .send(Artista)
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Crear Artista erro (ya registrado) /Artista", (done) => {
        const Artista = {
            nombre:'ArtistaPrueba',
            descripcion:'DescripcionPrueba',
            fechaRegistro:'12-08-2020',
            portada:"",
            idGenero: 2
        };
        chai.request(app)
        .post('/Artista')
        .set('Accept', 'aplication/json')
        .send(Artista)
        .end((err, res) => {
            expect(res.status).to.equal(501);
        done();
        });
    });

    it("Eliminar Artista /Artista", (done) => {
        const nombre = 'ArtistaPrueba';
        chai.request(app)
        .delete(`/Artista/${nombre}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Manejar GET request /Artista/:nombreArtista", (done) => {
        const nombreArtista = 'The';
        chai.request(app)
        .get(`/Artista/${nombreArtista}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    
    it("Manejar GET Bad request /Artista/:nombreArtista", (done) => {
        const nombreArtista = 'zzz';
        chai.request(app)
        .get(`/Artista/${nombreArtista}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(500);
        done();
        });
    });

    it("Manejar GET request /Artista/Id/:idArtista", (done) => {
        const idArtista = '2e6e9aa2332e50e7b9fa4fea31d87c521f722605';
        chai.request(app)
        .get(`/Artista/Id/${idArtista}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Manejar GET BAD request /Artista/Id/:idArtista", (done) => {
        const idArtista = '2e6e9aa2332';
        chai.request(app)
        .get(`/Artista/Id/${idArtista}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(500);
        done();
        });
    });

    it("Manejar GET request /ArtistaHome", (done) =>{
        chai.request(app)
        .get("/ArtistaHome")
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });
    
    it("Manejar GET request /Artista/Imagen/:nombreImagen", (done) => {
        const nombreImagen = 'portadaArtista.png';
        chai.request(app)
        .get(`/Artista/Imagen/${nombreImagen}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });
});

describe('Endpoints BibliotecaPropia:', ()=>{
    // it("Manejar POST request /BibliotecaPropia", (done) =>{
    //     const BibliotecaPropia = {
    //         nombreCancion: 'Cancion ejemplo',
    //         nombreGenero: 'Genero de ejemplo',
    //         albumCancion: 'Album ejemplo',
    //         portada: 'portadaBibliotecaPropia.png',
    //         duracion:'12',
    //         archivo:'231312312312',
    //         fechaRegistro:'12-08-2020',
    //         idCuenta: 'e03ffa3bd72888b737df5a995e133a2e793c132e',
    //         idPlaylist: 27
    //     };
    //     Chai.request(app)
    //     .post('/BibliotecaPropia')
    //     .set('Accept', 'application/json')
    //     .send(BibliotecaPropia)
    //     .end((err, res)=>{
    //         expect(res.status).to.equal(200);
    //         done();
    //     });
    // });

    it("Manejar GET Bad request /BibliotecaPropia/:idPlaylist/:idCuenta", (done) => {
        const idPlaylist = 27;
        const idCuenta = 'e03ffa3bd72888b737df5a995e133a2e793c132e';
        chai.request(app)
        .get(`/BibliotecaPropia/${idPlaylist}/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(500);
        done();
        });
    });

    it("Manejar GET request /BibliotecaPropia/:idPlaylist/:idCuenta", (done) => {
        const idPlaylist = 22;
        const idCuenta = 'e50a502f0a0e2ee1f31ffa538376e2085047a6fd';
        chai.request(app)
        .get(`/BibliotecaPropia/${idPlaylist}/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Manejar GET request /BibliotecaPropia/:nombreImagen", (done) => {
        const nombreImagen = 'portadaBibliotecaPropia.png';
        chai.request(app)
        .get(`/BibliotecaPropia/${nombreImagen}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

});

describe('Endpoints Cancion:', ()=>{

    it("Obtener canciones de álbum /Canciones/:idAlbum", (done) => {
        const idAlbum = '36b3e197d88c1fb956b54392387fc0294fd3d216';
        chai.request(app)
        .get(`/Canciones/${idAlbum}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Obtener canciones de álbum error en idAlbum /Canciones/:idAlbum", (done) => {
        const idAlbum = '36b3e197d88c1fb956b54392387fc0294f';
        chai.request(app)
        .get(`/Canciones/${idAlbum}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(500);
        done();
        });
    });

    it("Obtener canciones por idCancion /Canciones/Id/:idCancion", (done) => {
        const idCancion = '7e741a4de097cf13736b0405db4403a130abf2af';
        chai.request(app)
        .get(`/Canciones/Id/${idCancion}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Obtener canciones por idCancion error en idCancion /Canciones/Id/:idCancion", (done) => {
        const idCancion = '7e741a4de097cf13736b0405db44130abf2af';
        chai.request(app)
        .get(`/Canciones/Id/${idCancion}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(500);
        done();
        });
    });
});

describe('Endpoints Cuenta:', ()=>{
    it("Iniciar sesión /Cuenta/Login", (done) => {
        const cuenta = {
            correo:'DonRamon@hotmail.com',
            contraseña:'12345'
        };
        chai.request(app)
        .post('/Cuenta/Login')
        .set('Accept', 'aplication/json')
        .send(cuenta)
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });
    it("Iniciar sesión contraseña incorrecta /Cuenta/Login", (done) => {
        const cuenta = {
            correo:'DonRamon@hotmail.com',
            contraseña:'123'
        };
        chai.request(app)
        .post('/Cuenta/Login')
        .set('Accept', 'aplication/json')
        .send(cuenta)
        .end((err, res) => {
            expect(res.status).to.equal(501);
        done();
        });
    });
    it("Iniciar sesión correo incorrecto /Cuenta/Login", (done) => {
        const cuenta = {
            correo:'noregistradooo@hotmail.com',
            contraseña:'12345'
        };
        chai.request(app)
        .post('/Cuenta/Login')
        .set('Accept', 'aplication/json')
        .send(cuenta)
        .end((err, res) => {
            expect(res.status).to.equal(502);
        done();
        });
    });

    it("Actualizar cuenta /Cuenta/Actualizar", (done) => {
        const cuenta = {
            idCuenta:'e03ffa3bd72888b737df5a995e133a2e793c132e',
            contraseña:'12345',
            apellidos:'Gomez Gomez',
            nombre:'Jose jose'
        };
        chai.request(app)
        .put('/Cuenta/Actualizar')
        .set('Accept', 'aplication/json')
        .send(cuenta)
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Actualizar cuenta error en idCuenta /Cuenta/Actualizar", (done) => {
        const cuenta = {
            idCuenta:'e03ffa3bd72888b7a995e133a2e793c132e',
            contraseña:'12345',
            apellidos:'Gomez Gomez',
            nombre:'Jose jose'
        };
        chai.request(app)
        .put('/Cuenta/Actualizar')
        .set('Accept', 'aplication/json')
        .send(cuenta)
        .end((err, res) => {
            expect(res.status).to.equal(201);
        done();
        });
    });

    
    it("Convertirse en creador de contenido /Cuenta/CreadorContenido/:idCuenta", (done) => {
        const idCuenta = 'e03ffa3bd72888b737df5a995e133a2e793c132e';
        chai.request(app)
        .put(`/Cuenta/CreadorContenido/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });
    it("Crear cuenta /Cuenta", (done) => {
        const cuenta = {
            correo:'cuentaNoRegistrada@hotmail.com',
            contraseña:'12345',
            apellidos: 'Trujillo trujillo',
            nombre: 'Ivan Ivan',
            nombreUsuario: 'usarioNoRegistrado',
            creadorContenido: false
        };
        chai.request(app)
        .post('/Cuenta')
        .set('Accept', 'aplication/json')
        .send(cuenta)
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });
    it("Eliminar cuenta /Cuenta", (done) => {
        const correo = 'cuentaNoRegistrada@hotmail.com';
        chai.request(app)
        .delete(`/Cuenta/${correo}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Crear cuenta correo ya registrado/Cuenta", (done) => {
        const cuenta = {
            correo:'noregistrado@hotmail.com',
            contraseña:'12345',
            apellidos: 'Trujillo',
            nombre: 'Ivan',
            nombreUsuario: 'ivan',
            creadorContenido: false
        };
        chai.request(app)
        .post('/Cuenta')
        .set('Accept', 'aplication/json')
        .send(cuenta)
        .end((err, res) => {
            expect(res.status).to.equal(501);
        done();
        });
    });
    it("Crear cuenta cnombre usuario ya registrado/Cuenta", (done) => {
        const cuenta = {
            correo:'no@hotmail.com',
            contraseña:'12345',
            apellidos: 'Trujillo',
            nombre: 'Ivan',
            nombreUsuario: 'ivanivan',
            creadorContenido: false
        };
        chai.request(app)
        .post('/Cuenta')
        .set('Accept', 'aplication/json')
        .send(cuenta)
        .end((err, res) => {
            expect(res.status).to.equal(502);
        done();
        });
    });

    it("Obtener tokens /Cuenta/Tokens", (done) => {
        chai.request(app)
        .get('/Cuenta/Tokens')
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });
});


describe('Endpoints CuentaArtista', () =>{

    it("Obtener Cuenta Artista /CuentaArtista/:idCuenta", (done) => {
        const idCuenta = '6b56ff348ab23b8e1036250f690ea81df5db303b';
        chai.request(app)
        .get(`/CuentaArtista/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });
    it("Error al obtener Cuenta Artista /CuentaArtista/:idCuenta", (done) => {
        const idCuenta = '6b56ff348abe1036250f690ea81df5db303b';
        chai.request(app)
        .get(`/CuentaArtista/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(500);
        done();
        });
    });
  /*   it("Crear CuentaArtista /Cuenta", (done) => {
        const CuentaArtista = {
            idCuenta:'e03ffa3bd72888b737df5a995e133a2e793c132e',
            idArtista:'12345'
        };
        chai.request(app)
        .post('/CuentaArtista')
        .set('Accept', 'aplication/json')
        .send(CuentaArtista)
        .end((err, res) => {
            expect(res.status).to.equal(502);
        done();
        });
    }); */
    it("Crear CuentaArtista error Artista no registrado/Cuenta", (done) => {
        const CuentaArtista = {
            idCuenta:'e03ffa3bd72888b737df5a995e133a2e793c132e',
            idArtista:'12345'
        };
        chai.request(app)
        .post('/CuentaArtista')
        .set('Accept', 'aplication/json')
        .send(CuentaArtista)
        .end((err, res) => {
            expect(res.status).to.equal(500);
        done();
        });
    });
});

describe('Endpoints Género', () =>{
    it("Obtener géneros /Generos", (done) => {
        chai.request(app)
        .get('/Generos')
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Obtener géneros por id /Generos/ObtenerPorId/:idGenero", (done) => {
        const idGenero = 1;
        chai.request(app)
        .get(`/Generos/ObtenerPorId/${idGenero}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Error al obtener géneros por id /Generos/ObtenerPorId/:idGenero", (done) => {
        const idGenero = 8;
        chai.request(app)
        .get(`/Generos/ObtenerPorId/${idGenero}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(500);
        done();
        });
    });

    it("Obtener idGenero /Generos/ObtenerId/:nombre", (done) => {
        const nombre = 'Pop';
        chai.request(app)
        .get(`/Generos/ObtenerId/${nombre}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });
    
    it("Obtener idGenero error en nombre /Generos/ObtenerId/:nombre", (done) => {
        const nombre = 'lll';
        chai.request(app)
        .get(`/Generos/ObtenerId/${nombre}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(500);
        done();
        });
    });

    it("Obtener album por género /Generos/Album/:idGenero", (done) => {
        const idGenero = '5';
        chai.request(app)
        .get(`/Generos/Album/${idGenero}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Obtener album por género error, no hay género con ese id /Generos/Album/:idGenero", (done) => {
        const idGenero = '10';
        chai.request(app)
        .get(`/Generos/Album/${idGenero}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(500);
        done();
        });
    });
});

describe('Endpoints Historial', () =>{
    it("Obtener historial de cuenta /Historial/Album/:idGenero", (done) => {
        const idCuenta = '6b56ff348ab23b8e1036250f690ea81df5db303b';
        chai.request(app)
        .get(`/Historial/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Obtener historial de cuenta vacío  /Historial/Album/:idGenero", (done) => {
        const idCuenta = '6dab2eaaef769e0c3b92b0e24d13c7ae308d4178';
        chai.request(app)
        .get(`/Historial/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(500);
        done();
        });
    });

    it("Actualizar historial /Historial/:idCancion/:idCuenta", (done) => {
        const idCuenta = '27c30218965750e9b299942de30fe4bd86aabc28';
        const idCancion = 'c3a524fa8cd0b833dd29bd884ec53070746fcb2e';
        chai.request(app)
        .post(`/Cancion/Historial/${idCancion}/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Añadir historial /Historial/:idCancion/:idCuenta", (done) => {
        const idCuenta = '27c30218965750e9b299942de30fe4bd86aabc28';
        const idCancion = 'c3a524fa8cd0b833dd29bd884ec53070746fcb2e';
        chai.request(app)
        .post(`/Cancion/Historial/${idCancion}/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });
});

describe('Enpoints PlaylistCanciones:', () =>{
    it("Obtener PlaylistCanciones por ID /PlaylistCanciones/:idPlaylist", (done) => {
        const idPlaylist = 1;
        chai.request(app)
        .get(`/PlaylistCanciones/${idPlaylist}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Obtener PlaylistCanciones vacía /PlaylistCanciones/:idPlaylist", (done) => {
        const idPlaylist = 34;
        chai.request(app)
        .get(`/PlaylistCanciones/${idPlaylist}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(500);
        done();
        });
    });

    it("Agregar cancion a playlist /PLaylistCanciones/:idPLaylist/:idCancion", (done) => {
        const idPlaylist = 31;//playlist de ejemplo
        const idCancion = 'c3a524fa8cd0b833dd29bd884ec53070746fcb2e';
        chai.request(app)
        .post(`/PlaylistCanciones/${idPlaylist}/${idCancion}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    }); 
    it("Error al agregar cancion a playlist (ya está) /PLaylistCanciones/:idPLaylist/:idCancion", (done) => {
        const idPlaylist = 31;//playlist de ejemplo
        const idCancion = 'b9d07ee483d1f6c73b863a1c544ef9e31acd6e47';
        chai.request(app)
        .post(`/PlaylistCanciones/${idPlaylist}/${idCancion}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(500);
        done();
        });
    });
});

describe('Endpoints Playlist:', ()=>{
    it("Elimnar canción de playlist /PLaylist/Elimiminar/:idPLaylist/:idCancion", (done) => {
        const idPlaylist = 31;//playlist de ejemplo
        const idCancion = 'c3a524fa8cd0b833dd29bd884ec53070746fcb2e';
        chai.request(app)
        .delete(`/Playlist/Eliminar/${idPlaylist}/${idCancion}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Agregar cancion a descargas /PLaylist/Descargas/:idCancion/:idCuenta", (done) => {
        const idCuenta = 'e03ffa3bd72888b737df5a995e133a2e793c132e';
        const idCancion = 'fa676025e104313a46302af4b15017e8ec28e836';
        chai.request(app)
        .post(`/Playlist/Descargas/${idCancion}/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });
    it("Error al agregar cancion a descargas (ya registrada )/PLaylist/Descargas/:idCancion/:idCuenta", (done) => {
        const idCuenta = 'e03ffa3bd72888b737df5a995e133a2e793c132e';
        const idCancion = 'fa676025e104313a46302af4b15017e8ec28e836';
        chai.request(app)
        .post(`/Playlist/Descargas/${idCancion}/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(500);
        done();
        });
    });

    it("Eliminar cancion de descargas /PLaylist/Descargas/:idCancion/:idCuenta", (done) => {
        const idCuenta = 'e03ffa3bd72888b737df5a995e133a2e793c132e';
        const idCancion = 'fa676025e104313a46302af4b15017e8ec28e836';
        chai.request(app)
        .delete(`/Playlist/Descargas/${idCancion}/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });
   

    it("Agregar cancion a Megusta /PLaylist/MeGusta/:idCancion/:idCuenta", (done) => {
        const idCuenta = 'e03ffa3bd72888b737df5a995e133a2e793c132e';
        const idCancion = 'fa676025e104313a46302af4b15017e8ec28e836';
        chai.request(app)
        .post(`/Playlist/MeGusta/${idCancion}/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Agregar cancion a Megusta error (ya esta) /PLaylist/MeGusta/:idCancion/:idCuenta", (done) => {
        const idCuenta = 'e03ffa3bd72888b737df5a995e133a2e793c132e';
        const idCancion = 'fa676025e104313a46302af4b15017e8ec28e836';
        chai.request(app)
        .post(`/Playlist/MeGusta/${idCancion}/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(501);
        done();
        });
    });

    it("Eliminar cancion de Me gusta /PLaylist/Me gusta/:idCancion/:idCuenta", (done) => {
        const idCuenta = 'e03ffa3bd72888b737df5a995e133a2e793c132e';
        const idCancion = 'fa676025e104313a46302af4b15017e8ec28e836';
        chai.request(app)
        .delete(`/Playlist/MeGusta/${idCancion}/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Crear Playlist /Playlist", (done) => {
        const Playlist = {
            nombre:'PlaylistPrueba',
            publica:false,
            fechaCreacion:'12-08-2020',
            portada:"",
            idCuenta:'e03ffa3bd72888b737df5a995e133a2e793c132e',
            idTIpoPLaylist: 2
        };
        chai.request(app)
        .post('/Playlist')
        .set('Accept', 'aplication/json')
        .send(Playlist)
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Eliminar playlisy /PLaylist/EliminarNombre/:nombre", (done) => {
        const nombre = 'PlaylistPrueba';
        chai.request(app)
        .delete(`/Playlist/EliminarNombre/${nombre}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });
    
    it("Obtener imagen playlist /Playlist/Imagen/:nombreImagen", (done) => {
        const nombreImagen = 'playlistPortada.png';
        chai.request(app)
        .get(`/Playlist/Imagen/${nombreImagen}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

     
    it("Obtener playlist de Cuenta /Playlist/Usuario/:idCuenta", (done) => {
        const idCuenta = '6b56ff348ab23b8e1036250f690ea81df5db303b';
        chai.request(app)
        .get(`/Playlist/Usuario/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Obtener playlist de Cuenta el usuario no tiene playlist /Playlist/Usuario/:idCuenta", (done) => {
        const idCuenta = '07b8c6e0588735140c33f1d96c6ef34794100f75';
        chai.request(app)
        .get(`/Playlist/Usuario/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(500);
        done();
        });
    });

    it("Obtener playlist de Inicio /Playlist/Inicio", (done) => {
        chai.request(app)
        .get(`/Playlist/Inicio`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Obtener playlist publicas por nombre /Playlist/Usuario/:idCuenta", (done) => {
        const nombre = 'ro';
        chai.request(app)
        .get(`/Playlist/Publicas/${nombre}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Obtener playlist publicas por nombre error (no hay) /Playlist/Usuario/:idCuenta", (done) => {
        const nombre = 'zzz';
        chai.request(app)
        .get(`/Playlist/Publicas/${nombre}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(500);
        done();
        });
    });

    it("Obtener playlist TipoUsuario /Playlist/TipoUsuario/:idCuenta", (done) => {
        const idCuenta= '6b56ff348ab23b8e1036250f690ea81df5db303b';
        chai.request(app)
        .get(`/Playlist/TipoUsuario/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Obtener playlist del sistema /Playlist/Sistema/:idPlaylistSistema", (done) => {
        const nombre = 1;
        chai.request(app)
        .get(`/Playlist/Sistema/${nombre}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Validar canción en descargas /PLaylist/MeGusta/:idCancion/:idCuenta", (done) => {
        const idCuenta = '6b56ff348ab23b8e1036250f690ea81df5db303b';
        const idCancion = 'c3a524fa8cd0b833dd29bd884ec53070746fcb2e';
        chai.request(app)
        .get(`/Playlist/Descargas/${idCancion}/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });
    
    it("Validar canción no está en descargas /PLaylist/MeGusta/:idCancion/:idCuenta", (done) => {
        const idCuenta = 'e03ffa3bd72888b737df5a995e133a2e793c132e';
        const idCancion = 'fa676e104313a46302af4b15017e8ec28e836';
        chai.request(app)
        .get(`/Playlist/Descargas/${idCancion}/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(202);
        done();
        });
    });

    it("Validar canción en Me gusta /PLaylist/MeGusta/:idCancion/:idCuenta", (done) => {
        const idCuenta = '6b56ff348ab23b8e1036250f690ea81df5db303b';
        const idCancion = '7e741a4de097cf13736b0405db4403a130abf2af';
        chai.request(app)
        .get(`/Playlist/MeGusta/${idCancion}/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(200);
        done();
        });
    });

    it("Validar que la canción no está en Me gusta /PLaylist/MeGusta/:idCancion/:idCuenta", (done) => {
        const idCuenta = '6b56ff348ab23b8e1036250f690ea81df5db303b';
        const idCancion = 'c3a524fa8cd0b833dd29bd884ec53070746fcb2e';
        chai.request(app)
        .get(`/Playlist/MeGusta/${idCancion}/${idCuenta}`)
        .set('Accept', 'aplication/json')
        .end((err, res) => {
            expect(res.status).to.equal(202);
        done();
        });
    });
});