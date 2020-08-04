const express = require('express');
const app = express();



//Middelwares
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({extended: true}));

//Definir las rutas
app.use(require('./routes/index'));

try {
    app.listen(5000,'127.0.0.1');
    console.log('Server in 5000');
} catch (error) {
    console.log(error);
    
}

