const UnauthenticatedError = require('./authError');
const BadRequestError = require('./bad-request');
const NotFoundError = require('./not-found');
const CustomAPIError = require('./custom-error')


module.exports = {
    UnauthenticatedError,
    BadRequestError,
    NotFoundError,
    CustomAPIError
}