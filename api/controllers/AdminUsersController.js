const MainErrors = require('../errors/MainErrors');
const AuthErrors = require('../errors/AuthErrors');
const jwt = require('jsonwebtoken');
const generator = require('generate-password');

module.exports = {
  create: async function (req, res) {
    try {
      const params = await req.validate({
        'firstName': 'string',
        'name': 'string',
        'email': ['string', 'email'],
        'rank': 'string',
        'permissions': 'string'
      });

      if (params === false) return res.APIResponse(MainErrors.INVALID_REQUEST, false, {validation: params.data});

      let password = await generator.generate({
        length: 10,
        numbers: true
      });

      bcrypt.hash(password, 8, function (error, hash) {
        if (error) return res.APIResponse(AuthErrors.INVALID_PASSWORD, false, {});

        Users.create({
          firstName: req.param('firstName'),
          name: req.param('name'),
          email: req.param('email'),
          rank: req.param('rank'),
          permissions: req.param('permissions'),
          password: hash
        }).exec(function callback(err, user) {
          if (err) return res.APIResponse(MainErrors.DB_ERROR, false, {});
          return res.APIResponse(MainErrors.OK, false, {user, password});
        });
      });
    }catch (e) {
      return res.APIResponse(MainErrors.ROUTES_ERROR, false, {error: e.message});
    }
  },

  list: function (req, res) {
    Users.find().exec(function callback(err, users) {
      if (err) return res.APIResponse(MainErrors.DB_ERROR, false, {});

      return res.APIResponse(MainErrors.OK, false, {users});
    });
  },
};
