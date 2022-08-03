const { decodeJwt } = require("../helpers/jwtHelpers");

const authorization = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const data = decodeJwt(token);
    req.user_id = data.id;
    return next();
  } catch {
    return res.sendStatus(401);
  }
};

module.exports = authorization;
