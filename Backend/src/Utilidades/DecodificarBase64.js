

function DecodificarBase64(cadena){
    let buff = Buffer.from(cadena,'base64').toString('ascii')
    return buff;
}

module.exports ={
    DecodificarBase64
}
