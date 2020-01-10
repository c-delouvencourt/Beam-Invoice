const configJSON = require('../config.json');

module.exports.custom = {
  jwt_token: configJSON.jwt.key
};
