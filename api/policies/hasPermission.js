const MainErrors = require('../errors/MainErrors');

module.exports = function(permission){
  return function(req, res, next){
    let user = req.user;
    let permissions = JSON.parse(user.permissions);
    if (permissions.indexOf(permission) <= -1) return res.APIResponse(MainErrors.NO_PERMISSION, false, {});

    next();
  };
};
