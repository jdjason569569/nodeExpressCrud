const { UsersModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { verifyToken } = require('../utils/handleJwt');

const authMiddleware = async(req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handleHttpError(res, 'no_token', 401);
            return;
        }
        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);

        if (!dataToken._id) {
            handleHttpError(res, 'error_id_token', 401);
            return;
        }
        const user = await UsersModel.findById(dataToken._id);
        req.user = user;
        next();
    } catch (error) {
        handleHttpError(res, 'not_session', 401);
    }
}

module.exports = authMiddleware;