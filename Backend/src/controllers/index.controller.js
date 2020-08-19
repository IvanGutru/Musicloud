var pool = require('../Utilidades/conexionBaseDatos');

const getCuentaPorId = async (req, res) =>{
    try{
        const respuesta = await pool.query('SELECT * FROM cuenta;');
        res.send(respuesta.rows);
    }catch(err){
        console.log(err);
    }
}
const getTokens = async (req, res) =>{
    try{
        const respuesta = await pool.query('SELECT * FROM TokenUsuario;');
        res.send(respuesta.rows);
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    getCuentaPorId,
    getTokens
}