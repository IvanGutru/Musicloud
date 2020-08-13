--CREATE DATABASE musicloudDB;


Create table Cuenta(
    IdCuenta text NOT NULL PRIMARY KEY,
    Correo text NOT NULL,
    Contraseña text NOT NULL,
    Apellidos text NOT NULL,
    NombreUsuario text NOT NULL,
    Nombre text NOT NULL,
    CreadorContenido boolean NOT NULL
);

Create table Album(
    IdAlbum text NOT NULL PRIMARY KEY,
    Nombre text NOT NULL,
    Compania text NOT NULL,
    Portada text NOT NULL,
    FechaRegistro date NOT NULL,
    IdGenero INTEGER NOT NULL,
    IdArtista text NOT NULL
);
Create table Artista(
    IdArtista text NOT NULL PRIMARY KEY,
    Nombre text NOT NULL,
    Descripcion text NOT NULL,
    Portada text NOT NULL,
    FechaRegistro date NOT NULL,
    IdGenero INTEGER NOT NULL
);
Create table CuentaArtista(
    IdCuentaArtista serial NOT NULL PRIMARY KEY,
    IdCuenta text NOT NULL,
    IdArtista text NOT NULL
);

Create table BibliotecaPropia(
    IdBibliotecaPropia SERIAL PRIMARY KEY,
    NombreCancion text NOT NULL,
    GeneroCancion text NOT NULL,
    AlbumCancion text NOT NULL,
    Portada text NOT NULL,
    Duracion text NOT NULL,
    Archivo text NOT NULL
);

CREATE TABLE Cancion(
    IdCancion text PRIMARY KEY,
    Nombre text NOT NULL,
    Duracion text NOT NULL,
    Archivo text NOT NULL,
    Portada text NOT NULL,
    IdAlbum text
);

CREATE TABLE Genero(
    IdGenero SERIAL PRIMARY KEY,
    Nombre text NOT NULL,
    Descripcion text NOT NULL,
    Portada text NOT NULL

);


CREATE TABLE Historial(
    IdHistorial SERIAL PRIMARY KEY,
    FechaReproduccion date NOT NULL,
    IdCancion text,
    IdCuenta text
);


CREATE TABLE Playlist(
    IdPlaylist SERIAL PRIMARY KEY,
    Nombre text NOT NULL,
    Publica boolean NOT NULL,
    FechaCreacion date NOT NULL,
    Portada text NOT NULL,
    IdCuenta text,
    IdTipoPlaylist INTEGER
);

CREATE TABLE TipoPlaylist(
    IdTipoPlaylist SERIAL PRIMARY KEY,
    Nombre text NOT NULL
);

CREATE TABLE PlaylistCanciones(
    IdPlaylistCanciones SERIAL PRIMARY KEY,
    IdPlaylist integer,
    IdCancion text
);

CREATE TABLE TokenUsuario(
    IdToken SERIAL PRIMARY KEY,
    Token text NOT NULL,
    Activo boolean NOT NULL,
    IdCuenta text
);

ALTER TABLE Album 
ADD CONSTRAINT FKGenero
foreign key (IdGenero)
references Genero(IdGenero);

ALTER TABLE Album
ADD CONSTRAINT FKArtista
FOREIGN KEY (IdArtista)
REFERENCES Artista(IdArtista);

ALTER TABLE Artista
ADD CONSTRAINT FKGenero
FOREIGN KEY (IdGenero)
REFERENCES Genero(IdGenero);

ALTER TABLE Cancion
ADD CONSTRAINT FKAlbum
FOREIGN KEY (IdAlbum)
REFERENCES Album(IdAlbum);

ALTER TABLE Historial
ADD CONSTRAINT FKCuenta
FOREIGN KEY (IdCuenta)
REFERENCES Cuenta(IdCuenta);

ALTER TABLE Historial
ADD CONSTRAINT FKCancion
FOREIGN KEY (IdCancion)
REFERENCES Cancion(IdCancion);

ALTER TABLE Playlist
ADD CONSTRAINT FKCuenta
FOREIGN KEY (IdCuenta)
REFERENCES Cuenta(IdCuenta);

ALTER TABLE Playlist
ADD CONSTRAINT FKTipoPlaylist
FOREIGN KEY (IdTipoPlaylist)
REFERENCES TipoPlaylist(IdTipoPlaylist);

ALTER TABLE TokenUsuario
ADD CONSTRAINT FKCuenta
FOREIGN KEY (IdCuenta)
REFERENCES Cuenta(IdCuenta);

ALTER TABLE PlaylistCanciones
ADD CONSTRAINT FKPlaylist
FOREIGN KEY (IdPlaylist)
REFERENCES Playlist(IdPlaylist);

ALTER TABLE PlaylistCanciones
ADD CONSTRAINT FKCancion
FOREIGN KEY (IdCancion)
REFERENCES Cancion(IdCancion);

ALTER TABLE CuentaArtista
ADD CONSTRAINT FKCuenta
FOREIGN KEY (IdCuenta)
REFERENCES Cuenta(IdCuenta);

ALTER TABLE CuentaArtista
ADD CONSTRAINT FKArtista
FOREIGN KEY (IdArtista)
REFERENCES Artista(IdArtista);