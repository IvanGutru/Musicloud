CREATE DATABASE musicloud;


Create table cuenta(
    IdCuenta text NOT NULL,
    Correo text NOT NULL,
    Contraseña text NOT NULL,
    Apellidos text NOT NULL,
    NombreUsuario text NOT NULL,
    Nombre text NOT NULL,
    CreadorContenido boolean NOT NULL,
    EsGratis boolean NOT NULL
);


INSERT INTO cuenta (IdCuenta,Correo,Contraseña,Apellidos,NombreUsuario, Nombre, CreadorContenido,EsGratis)VALUES (
    '3l12j312j321312', 'irving_cena2@hotmail.com', 12345,'Gumesindo Trujillo','ivangutru', 'Irving Ivan', false, true
);

SELECT * FROM cuenta;