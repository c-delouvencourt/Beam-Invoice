const MainErrors = require('../errors/MainErrors');

module.exports = {
  list: function (req, res) {
    let archive = req.param("archive", false);

    Invoices.find({isDeleted: archive}).exec(function callback(err, invoices) {
      if (err) return res.APIResponse(MainErrors.DB_ERROR, false, {});

      return res.APIResponse(MainErrors.OK, false, {invoices});
    });
  },
  pdf: function (req, res) {
    sails.hooks.pdf.make(
      "",
      {
        a: "Bob Dole",
      },
      {
        output: 'storage/invoice_3.pdf',
        width: '21cm',
        height: '29.7cm'
      },
      function(err, result) {
        console.log(err, result);
      }
    );
  }
};
