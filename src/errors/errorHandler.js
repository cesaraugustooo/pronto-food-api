export class AppError extends Error {
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

export class NotFounError extends Error{
    constructor(message,statusCode){
        super(message),
        this.statusCode = statusCode
    }
}