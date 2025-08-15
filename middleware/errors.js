const errorHandlerMiddleware = (err, req, res, next) => {
    res.status(500).json({ msg: 'You are getting it wrong' });
}

module.exports = errorHandlerMiddleware;
