const express = require('express');
const app = express();


//Middelwares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Definir las rutas
app.use(require('./routes/index'));

try {
    app.listen(5000,'127.0.0.1');
    console.log('Server in 5000');
} catch (error) {
    console.log(error);
}

