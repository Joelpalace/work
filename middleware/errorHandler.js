const errorHandler = (req, res) => {
    res.status(404).json ({ msg: 'Are you lost?' })
}

module.exports = errorHandler