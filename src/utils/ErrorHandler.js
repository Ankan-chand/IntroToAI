class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
        this.data = null;
    }
}

module.exports = ErrorHandler;
