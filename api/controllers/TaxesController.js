const MainErrors = require('../errors/MainErrors');

module.exports = {
  list: function (req, res) {
    try {
      let archive = req.param("archive", false);

      Taxes.find({isDeleted: archive}).exec(function callback(err, taxes) {
        if (err) return res.APIResponse(MainErrors.DB_ERROR, false, {});

        return res.APIResponse(MainErrors.OK, false, {taxes});
      });
    }catch (e) {
      return res.APIResponse(MainErrors.ROUTES_ERROR, false, {error: e});
    }
  },
  get: function (req, res) {
    try {
      const params = req.validate({
        'id': 'int'
      });

      if (params === false) return res.APIResponse(MainErrors.INVALID_REQUEST, false, {validation: params.data});

      Taxes.findOne({id: req.param('id')}).exec(function callback(err, client) {
        if (err) return res.APIResponse(MainErrors.DB_ERROR, false, {});

        return res.APIResponse(MainErrors.OK, false, {client});
      });
    }catch (e) {
      return res.APIResponse(MainErrors.ROUTES_ERROR, false, {error: e});
    }
  },
  create: async function (req, res) {
    try {
      const params = req.validate({
        'category': 'string',
        'date': 'ISO8601',
        'amount': 'float',
        'description?': 'string'
      });

      if (params === false) return res.APIResponse(MainErrors.INVALID_REQUEST, false, {validation: params.data});

      let taxes = await Taxes.create({
        category: req.param('category'),
        date: req.param('date'),
        amount: req.param('amount'),
        description: req.param('description')
      }).fetch();

      return res.APIResponse(MainErrors.OK, false, {taxes});
    }catch (e) {
      return res.APIResponse(MainErrors.ROUTES_ERROR, false, {error: e});
    }
  },
  update: async function (req, res) {
    try {
      const params = req.validate({
        'id': 'int',
        'category': 'string',
        'date': 'ISO8601',
        'amount': 'float',
        'description?': 'string'
      });

      if (params === false) return res.APIResponse(MainErrors.INVALID_REQUEST, false, {validation: params.data});

      let taxe = await Taxes.updateOne({id: req.param("id")}).set({
        category: req.param('category'),
        date: req.param('date'),
        amount: req.param('amount'),
        description: req.param('description')
      }).fetch();

      return res.APIResponse(MainErrors.OK, false, {taxe});
    }catch (e) {
      return res.APIResponse(MainErrors.ROUTES_ERROR, false, {error: e});
    }
  },
  archive: async function (req, res) {
    try {
      const params = req.validate({
        'id': 'int',
        'archive': 'boolean'
      });

      if (params === false) return res.APIResponse(MainErrors.INVALID_REQUEST, false, {validation: params.data});

      let taxe = await Taxes.updateOne({id: req.param('id')}).set({
        isDeleted: req.param('archive')
      }).fetch();

      return res.APIResponse(MainErrors.OK, false, {taxe});
    } catch (e) {
      return res.APIResponse(MainErrors.ROUTES_ERROR, false, {error: e});
    }
  }
};
