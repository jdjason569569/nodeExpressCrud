const { StorageModel } = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;


/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async(req, res) => {
    const data = await StorageModel.find({});
    res.send({ data });
};

const getItem = (req, res) => {};


const createItem = async(req, res) => {
    const { file } = req;
    //console.log(file);
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await StorageModel.create(fileData);
    res.send(data);
};


const updateItems = (req, res) => {};
const deleteItems = (req, res) => {};


module.exports = { getItems, getItem, createItem, updateItems, deleteItems }