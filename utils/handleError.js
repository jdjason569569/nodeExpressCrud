const handleHttpError = (res, message = 'error', code = 403) => {
    res.status(code);
    res.send({ error: message });
}

module.exports = { handleHttpError };