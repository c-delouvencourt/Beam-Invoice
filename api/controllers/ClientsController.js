const MainErrors = require('../errors/MainErrors');

module.exports = {
  list: function (req, res) {
    let archive = req.param("archive", false);

    Clients.find({isDeleted: archive}).exec(function callback(err, invoices) {
      if (err) return res.APIResponse(MainErrors.DB_ERROR, false, {});

      return res.APIResponse(MainErrors.OK, false, {invoices});
    });
  },
};
