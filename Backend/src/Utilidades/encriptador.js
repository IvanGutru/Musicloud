const bcrypt = require('bcrypt');

const encriptador =(contraseña)=>{
    return bcrypt.hashSync(contraseña, bcrypt.genSaltSync(10),null);
};

const comparar = (contraseña, contraseña2) => {
    return bcrypt.compareSync(contraseña, contraseña2);
};

module.exports={encriptador, comparar};