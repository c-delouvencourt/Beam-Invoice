const MainErrors = require('../errors/MainErrors');

module.exports = {
  list: function (req, res) {
    try {
      let archive = req.param("archive", false);

      Contracts.find({isDeleted: archive}).exec(function callback(err, contracts) {
        if (err) return res.APIResponse(MainErrors.DB_ERROR, false, {});

        return res.APIResponse(MainErrors.OK, false, {contracts});
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

      Contracts.findOne({id: req.param('id')}).exec(function callback(err, contract) {
        if (err) return res.APIResponse(MainErrors.DB_ERROR, false, {});

        return res.APIResponse(MainErrors.OK, false, {contract});
      });
    }catch (e) {
      return res.APIResponse(MainErrors.ROUTES_ERROR, false, {error: e});
    }
  },
  create: async function (req, res) {
    try {
      const params = req.validate({
        'client': 'int',
        'date': 'ISO8601',
        'file': 'string',
      });

      if (params === false) return res.APIResponse(MainErrors.INVALID_REQUEST, false, {validation: params.data});

      let contract = await Contracts.create({
        client: req.param('client'),
        date: req.param('date'),
        file: req.param('file')
      }).fetch();

      return res.APIResponse(MainErrors.OK, false, {contract});
    }catch (e) {
      return res.APIResponse(MainErrors.ROUTES_ERROR, false, {error: e});
    }
  },
  update: async function (req, res) {
    try {
      const params = req.validate({
        'id': 'int',
        'client': 'int',
        'date': 'ISO8601',
        'file': 'string',
      });

      if (params === false) return res.APIResponse(MainErrors.INVALID_REQUEST, false, {validation: params.data});

      let contract = await Contracts.updateOne({id: req.param("id")}).set({
        client: req.param('client'),
        date: req.param('date'),
        file: req.param('file')
      }).fetch();

      return res.APIResponse(MainErrors.OK, false, {contract});
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

      let contract = await Contracts.updateOne({id: req.param('id')}).set({
        isDeleted: req.param('archive')
      }).fetch();

      return res.APIResponse(MainErrors.OK, false, {contract});
    } catch (e) {
      return res.APIResponse(MainErrors.ROUTES_ERROR, false, {error: e});
    }
  }
};
