// Error Middleware
export function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const message = err.message || "Algo deu errado!";

  return res.status(status).json({ message: message });
}
