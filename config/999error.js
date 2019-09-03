/**
 * Created by daulq on 3/27/18.
 */
const { app } = require('./001app');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const error = {
    error: 404,
    message: 'not_found',
    status: 400,
    data: null
  };
  next(error);
});

// error handler
app.use(function(err, req, res, next) {
  return res.json({
    error: err.error,
    message: err.message,
    status: 400,
    data: null
  })
});