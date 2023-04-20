module.exports.Response = {
    success: (res, status = 200, message = "Ok", body = {} ) => {
        res.status(status).json({message, body});
    }, 
    error: (res, error = null) => {
        const { statusCode, message } = error;
        res.status(statusCode).json({message});
    }
}