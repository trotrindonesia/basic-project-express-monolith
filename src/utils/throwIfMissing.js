const {
  errors: { CustomError }
} = require('custom-error-exceptions');

const throwIsMissing = (args, message) => {
  if (!args) {
    throw new CustomError(message);
  }
};

module.exports = throwIsMissing;
