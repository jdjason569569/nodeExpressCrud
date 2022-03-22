const { StorageModel } = require('../models');


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
    console.log(file);

    //const data = await StorageModel.create(body);
    res.send(file);
};


const updateItems = (req, res) => {};
const deleteItems = (req, res) => {};


module.exports = { getItems, getItem, createItem, updateItems, deleteItems }