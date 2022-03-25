const { handleHttpError } = require('../utils/handleError');


const checkRol = (roles) => (req, res, next) => {
    try {
        const { user } = req;
        const rolesByUser = user.role;

        const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle));
        if (!checkValueRol) {
            handleHttpError(res, 'user_not_permissions', 403);
        }
        next();
    } catch (error) {
        handleHttpError(res, 'error_permissions', 403);
    }
}

module.exports = checkRol;