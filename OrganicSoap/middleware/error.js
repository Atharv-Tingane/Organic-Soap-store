function notFound(req, res) { res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` }); }

function errorHandler(error, req, res, next) { // eslint-disable-line no-unused-vars
  let status = error.statusCode || 500;
  let message = error.message || 'Internal server error';
  if (error.name === 'ValidationError') { status = 400; message = Object.values(error.errors).map((item) => item.message).join(', '); }
  else if (error.name === 'CastError') { status = 400; message = `Invalid ${error.path}`; }
  else if (error.code === 11000) { status = 409; message = `${Object.keys(error.keyPattern || {})[0] || 'Value'} already exists`; }
  else if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') { status = 401; message = 'Invalid or expired token'; }
  if (status >= 500) console.error(error);
  res.status(status).json({ message });
}
module.exports = { notFound, errorHandler };
