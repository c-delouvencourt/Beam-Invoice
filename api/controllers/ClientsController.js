const MainErrors = require('../errors/MainErrors');

module.exports = {
  list: function (req, res) {
    try {
      let archive = req.param("archive", false);

      Clients.find({isDeleted: archive}).exec(function callback(err, clients) {
        if (err) return res.APIResponse(MainErrors.DB_ERROR, false, {});

        return res.APIResponse(MainErrors.OK, false, {clients});
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

      Clients.findOne({id: req.param('id')}).exec(function callback(err, client) {
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
        'entrepriseName?': 'string',
        'fullName': 'string',
        'siret?': 'string',
        'tvaNumber?': 'string',
        'email?': ['string', 'email'],
        'phone?': ['string', 'mobilePhone'],
        'address': 'string',
        'address2?': 'string',
        'city': 'string',
        'postalCode': 'postalCode',
        'country': 'string'
      });

      if (params === false) return res.APIResponse(MainErrors.INVALID_REQUEST, false, {validation: params.data});

      let client = await Clients.create({
        entrepriseName: req.param('entrepriseName'),
        fullName: req.param('fullName'),
        siret: req.param('siret'),
        tvaNumber: req.param('tvaNumber'),
        email: req.param('email'),
        phone: req.param('phone'),
        address: req.param('address'),
        address2: req.param('address2'),
        city: req.param('city'),
        postalCode: req.param('postalCode'),
        country: req.param('country')
      }).fetch();

      let clients = await Clients.find({isDeleted: false});

      return res.APIResponse(MainErrors.OK, false, {clients});
    }catch (e) {
      return res.APIResponse(MainErrors.ROUTES_ERROR, false, {error: e});
    }
  },
  update: async function (req, res) {
    try {
      const params = req.validate({
        'id': 'int',
        'entrepriseName?': 'string',
        'fullName': 'string',
        'siret?': 'string',
        'tvaNumber?': 'string',
        'email?': ['string', 'email'],
        'phone?': ['string', 'mobilePhone'],
        'address': 'string',
        'address2?': 'string',
        'city': 'string',
        'postalCode': 'postalCode',
        'country': 'string'
      });

      if (params === false) return res.APIResponse(MainErrors.INVALID_REQUEST, false, {validation: params.data});

      let client = await Clients.updateOne({id: req.param("id")}).set({
        entrepriseName: req.param('entrepriseName'),
        fullName: req.param('fullName'),
        siret: req.param('siret'),
        tvaNumber: req.param('tvaNumber'),
        email: req.param('email'),
        phone: req.param('phone'),
        address: req.param('address'),
        address2: req.param('address2'),
        city: req.param('city'),
        postalCode: req.param('postalCode'),
        country: req.param('country')
      }).fetch();

      return res.APIResponse(MainErrors.OK, false, {client});
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

      let client = await Clients.updateOne({id: req.param('id')}).set({
        isDeleted: req.param('archive')
      }).fetch();

      return res.APIResponse(MainErrors.OK, false, {client});
    } catch (e) {
      return res.APIResponse(MainErrors.ROUTES_ERROR, false, {error: e});
    }
  }
};
