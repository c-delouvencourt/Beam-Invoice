/**
 * Users.js
 *
 * @description :: Users models for auth and users management.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

var bcrypt = require("bcryptjs");

module.exports = {
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    firstName: {
      type: 'string',
      required: true,
      unique: false,
      maxLength: 30,
      example: 'Jean'
    },

    name: {
      type: 'string',
      required: true,
      unique: false,
      maxLength: 40,
      example: 'Dupont'
    },

    email: {
      type: 'string',
      required: true,
      isEmail: true,
      example: 'contact@beam.io'
    },

    rank: {
      type: 'string',
      required: true,
      unique: false,
      maxLength: 25,
      example: 'Comptable'
    },

    picture: {
      type: 'string',
      required: false
    },

    lastSeenAt: {
      type: 'number',
      description: 'Dernière connexion de l\'utilisateur en timestamp.',
      example: 1502844074211
    },

    permissions: {
      type: 'number',
      defaultsTo: false
    },

    password: {
      type: 'string',
      description: 'Mot de passe de l\'utilisateur.',
    },

    apiToken: {
      type: 'string',
      description: 'API Token de l\'utilisateur.',
      required: true,
      unique: true,
      example: 'n8Z4QBr8He5IujCSNAU1t6Da3ihUpRjEwyt1ScLxnRO39GJdr5G9lve'
    },

    jwt: {
      type: 'string',
      description: 'Token JWT de l\'utilisateur.',
      example: 'n8Z4QBr8He5IujCSNAU1t6Da3ihUpRjEwyt1ScLxnRO39GJdr5G9lve'
    },

    isDeleted: {
      type: 'boolean',
      defaultTo: false
    }

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

  customToJSON: function() {
    return _.omit(this, ['apiToken', 'password'])
  },

  beforeCreate: function(values, cb) {
    bcrypt.hash(values.password, 10, function(err, hash) {
      if (err) return cb(err);
      values.password = hash;
      cb();
    });
  }

};

