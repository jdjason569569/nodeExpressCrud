const { validationResult } = require('express-validator');

const validationResults = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next(); //instruccion que nos permite continuar hacia el controlador
    } catch (err) {
        res.status(403);
        res.send({ error: err.array() });
    }
}
module.exports = validationResults;