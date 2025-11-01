export async function healthcheck(req, res, next) {
  res.status(200).json(true);
}
