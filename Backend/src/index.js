const express = require('express');
const app = express();
const PUERTO = 5000;



app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({extended: true}));
app.use(require('./routes/index'));

try {
    app.listen(PUERTO);
    console.log('Server in '+ PUERTO);
} catch (error) {
    console.log(error);
    
}

module.exports = app;
