const { validationResult } = require('express-validator');


const idNoValido = ( req, res, next ) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(406).json({
            "status":406,
            "name" : "Not Acceptable",
            "message": "invalid ID",
            "customeMessage": "ID no valido",
        });
    }

    next();
}
const idNoEncontado = ( req, res, next ) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(404).json({
            "status":404,
            "name" : "Not Found",
            "message": "Word not found",
            "customeMessage": "palabra no encontrada",
        });
    }

    next();
}

const campoVacio = ( req, res, next ) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(404).json({
            "status":404,
            "name" : "Bad request",
            "message": "fieldempty",
            "customeMessage": "Campo vacio",
        });
    }

    next();
}

const WordExist = ( req, res, next ) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(404).json({
            "status":404,
            "name" : "Bad request",
            "message": "The word already exists",
            "customeMessage": "La palabra ya existe",
        });
    }

    next();
}


module.exports = {
    idNoEncontado,
    idNoValido,
    campoVacio,
    WordExist
}
