var jwt = require("jsonwebtoken");
const MainErrors = require('../errors/MainErrors');
const AuthErrors = require('../errors/AuthErrors');

module.exports = function(req, res, next) {
  var bearerToken;
  var bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== 'undefined') {
    var bearer = bearerHeader.split(" ");
    bearerToken = bearer[1];

    if (bearer[0] !== "Bearer") {
      return res.APIResponse(MainErrors.INVALID_REQUEST, false, {});
    }

    jwt.verify(bearerToken, sails.config.custom.jwt_token, function(err, decoded) {
      if (err) {
        if (err.name === "TokenExpiredError")
          return res.APIResponse(AuthErrors.SESSION_EXPIRATION, false, {});
        else
          return res.APIResponse(AuthErrors.SESSION_EXPIRATION, false, {});
      }

      Users.findOne({id: decoded.id}).exec(function callback(error, user) {
        if (error) return res.APIResponse(MainErrors.DB_ERROR, false, {});
        if (!user) return res.APIResponse(AuthErrors.INVALID_PASSWORD, false, {});

        req.user = user;
        next();
      });
    });
  } else {
    return res.APIResponse(MainErrors.INVALID_REQUEST, false, {});
  }
};
