const { TracksModel } = require('../models');


/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async(req, res) => {
    const data = await TracksModel.find({});
    res.send({ data });
};

const getItem = (req, res) => {};


const createItems = async(req, res) => {
    const { body } = req;
    //console.log(body);
    const data = await TracksModel.create(body);
    res.send({ data });
};


const updateItems = (req, res) => {};
const deleteItems = (req, res) => {};


module.exports = { getItems, getItem, createItems, updateItems, deleteItems }