const { matchedData } = require('express-validator');
const { TracksModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');


/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async(req, res) => {
    try {
        const data = await TracksModel.find({});
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'error_get_items');
    }
};

const getItem = async(req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await TracksModel.findById(id);
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'error_get_item');
    }
};


const createItems = async(req, res) => {
    const { body } = matchedData(req); //No permite traer los valores definos en las validaciones sin datos basura
    try {
        const data = await TracksModel.create(body);
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'error_get_items');
    }
};


const updateItems = async(req, res) => {
    const { id, ...body } = matchedData(req); //No permite traer los valores definos en las validaciones sin datos basura
    try {
        const data = await TracksModel.findByIdAndUpdate(id, body);
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'error_update_items');
    }
};
const deleteItems = async(req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await TracksModel.deleteOne({ _id: id });
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'error_delete_item');
    }
};


module.exports = { getItems, getItem, createItems, updateItems, deleteItems }