const { validationResult } = require('express-validator/check');

function validator(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {

    const options = {
      message: errors.array()[0].msg
    };

    let {
      status,
      data,
      message,
      error,
    } = options;

    status = status || 400;
    data = data || null;
    message = message || 'BAD_REQUEST';
    error = error || 400;

    res.status(status).send({
      status,
      data,
      message,
      error,
    });
    return false;
  }
  return true;
}

module.exports = {
  validator
};
