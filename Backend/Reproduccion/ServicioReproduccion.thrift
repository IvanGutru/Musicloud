struct AudioCancion{
    1: string nombreCancion
    2: binary audio
}

service ServicioReproduccion{
    AudioCancion ObtenerCancion(1: string nombreArchivo)
    bool SubirAudio(1: AudioCancion audioCancion)
}
