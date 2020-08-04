

function DecodificarBase64(cadena){
    let buff = Buffer.from(cadena,'base64').toString("binary")
    return buff;
}

module.exports ={
    DecodificarBase64
}
