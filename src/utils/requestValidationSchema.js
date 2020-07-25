const {
  errors: { BadRequestError }
} = require('custom-error-exceptions');

const validationSchema = (schema) => {
  return async (req, res, next) => {
    const { value, error } = schema(req.body);
    let response;
    if (error) {
      response = next(new BadRequestError(error.message));
    } else {
      req.body = value;
      response = next();
    }
    return response;
  };
};

module.exports = validationSchema;
