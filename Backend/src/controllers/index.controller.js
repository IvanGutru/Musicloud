var pool = require('../conexionBaseDatos');

const getCuentaPorId = async (req, res) =>{
    try{
        const respuesta = await pool.query('SELECT * FROM cuenta;');
        console.log(respuesta.rows);
        res.send(respuesta.rows);
    }catch(err){
        console.log(err);
    }
}
const getTokens = async (req, res) =>{
    try{
        const respuesta = await pool.query('SELECT * FROM TokenUsuario;');
        console.log(respuesta.rows);
        res.send(respuesta.rows);
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    getCuentaPorId,
    getTokens
}