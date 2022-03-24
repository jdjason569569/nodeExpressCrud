const { matchedData } = require('express-validator');
const { encrypt, compare } = require('../utils/handlePassword');
const { UsersModel } = require('../models');
const { tokenSign } = require('../utils/handleJwt');
const { handleHttpError } = require('../utils/handleError');

const registerCtrl = async(req, res) => {

    try {
        req = matchedData(req);
        const password = await encrypt(req.password);
        const body = {...req, password } // se obtiene el objeto req y se concatena el password si ya esta lo sobreescribe
        const dataUser = await UsersModel.create(body);

        const data = {
            token: await tokenSign(dataUser),
            dataUser: dataUser
        }
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'error_register_user');
    }

}

const loginCtrl = async(req, res) => {
    try {
        req = matchedData(req);
        const user = await UsersModel.findOne({ email: req.email });
        if (!user) {
            handleHttpError(res, 'error_login_user', 404);
            return;
        }
        const hashPassword = user.password;
        const check = await compare(req.password, hashPassword);
        if (!check) {
            handleHttpError(res, 'error_login_user', 401);
            return;
        }
        const data = {
            token: tokenSign(user),
            user
        }
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'error_login_user');
    }
}

module.exports = { registerCtrl, loginCtrl }