const MainErrors = require('../errors/MainErrors');
const AuthErrors = require('../errors/AuthErrors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
  login: async function (req, res) {
    try {
      const params = await req.validate({
        'email': ['string', 'email'],
        'password': 'string'
      });

      if (params === false) return res.APIResponse(MainErrors.INVALID_REQUEST, false, {validation: params.data});

      Users.findOne({
        email: req.param('email')
      }).exec(function callback(err, user) {
        if (err) return res.APIResponse(MainErrors.DB_ERROR, false, {}) ;
        if (!user) return res.APIResponse(AuthErrors.NO_REGISTERED, false, {});

        bcrypt.compare(req.param('password'), user.password, function (error, matched) {
          if (error) return res.APIResponse(AuthErrors.INVALID_PASSWORD, false, error);
          if (!matched) return res.APIResponse(AuthErrors.INVALID_PASSWORD, false, {});

          user.jwt = jwt.sign(user.toJSON(), sails.config.custom.jwt_token, {
            expiresIn: '7d'
          });

          return res.APIResponse(MainErrors.OK, false, {user});
        });
      });
    }catch (e) {
      return res.APIResponse(MainErrors.ROUTES_ERROR, false, {error: e.message});
    }
  },

  token: async function (req, res) {
    try {
      let jwtToken = await jwt.sign(req.user.toJSON(), sails.config.custom.jwt_token, {
        expiresIn: '7d'
      });

      req.user.jwt = jwtToken;

      return res.APIResponse(MainErrors.OK, false, {user: req.user});
    }catch (e) {
      return res.APIResponse(MainErrors.ROUTES_ERROR, false, {error: e.message});
    }
  },

  profile: function (req, res) {

  }
};
