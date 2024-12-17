/**
 * 
 * @param {string} name Name of the error
 * @param {string} message Message of the error
 * @param {number} code Http status code of the error 
 * @param {*} data If have some return to the user
 */
const GenericError = (name, message, code, data) => {
  const newError = new Error();
  newError.name = name || 'CustomError';
  newError.message = message || 'An unexpected error occurred';
  newError.statusCode = code || 500;
  newError.data = data || {};
  throw newError;
}

module.exports = GenericError;