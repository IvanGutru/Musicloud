

function DecodificarBase64(cadena){
    let buff = Buffer.from(cadena,'base64').toString("binary")
    return buff;
}

function decodeBase64Image(dataString) 
{
  var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  var response = {};

  if (matches.length !== 3) 
  {
    return new Error('Invalid input string');
  }

  response.type = matches[1];
  response.data = new Buffer(matches[2], 'base64');

  return response;
}

module.exports ={
    DecodificarBase64,
    decodeBase64Image
}
