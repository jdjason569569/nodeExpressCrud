const { check } = require('express-validator');
const validationResults = require('../utils/handleValidator');

const validatorCreateItem = [
    check('name').exists().notEmpty(),
    check('album').exists().notEmpty(),
    (req, res, next) => {
        return validationResults(req, res, next)
    }

]

module.exports = { validatorCreateItem };