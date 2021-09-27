
export const XCookieMiddleware = (req, res, next) => {
  const xCookie = req.header('X-Cookie');
  if (xCookie) {
    req.headers.cookie = xCookie;
  }
  next();
};