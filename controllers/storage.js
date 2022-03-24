const { StorageModel } = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;
const { handleHttpError } = require('../utils/handleError');


/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async(req, res) => {
    try {
        const data = await StorageModel.find({});
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'error_get_items');
    }

};

const getItem = (req, res) => {};


const createItem = async(req, res) => {
    try {
        const { file } = req;
        //console.log(file);
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }
        const data = await StorageModel.create(fileData);
        res.send(data);
    } catch (error) {
        handleHttpError(res, 'error_create_items');
    }

};


const updateItems = (req, res) => {};
const deleteItems = (req, res) => {};


module.exports = { getItems, getItem, createItem, updateItems, deleteItems }