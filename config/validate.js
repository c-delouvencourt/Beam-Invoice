const MainErrors = require('../api/errors/MainErrors');

module.exports.validate = function(req, res) {
  return {
    responseMethod: (data) => {
      res.APIResponse(MainErrors.INVALID_REQUEST, false, {data});
    }
  };
};
