/**
 * Clients.js
 *
 * @description :: Users models for auth and users management.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    entrepriseName: {
      type: 'string',
      required: false,
      unique: true,
      maxLength: 70
    },

    fullName: {
      type: 'string',
      required: true,
      unique: false,
      maxLength: 100,
    },

    email: {
      type: 'string',
      required: false,
      isEmail: true
    },

    phone: {
      type: 'string',
      required: false,
      unique: false
    },

    address: {
      type: 'string',
      required: true,
      unique: false
    },

    address2: {
      type: 'string',
      required: false,
      unique: false
    },

    city: {
      type: 'string',
      required: true,
      unique: false
    },

    postalCode: {
      type: 'string',
      required: true,
      unique: false
    },

    country: {
      type: 'string',
      required: false,
      unique: false
    },

    picture: {
      type: 'string',
      required: false
    },

    siret: {
      type: 'string',
      required: false,
      unique: false
    },

    tvaNumber: {
      type: 'string',
      required: false,
      unique: false
    },

    isDeleted: {
      type: 'boolean',
      defaultsTo: false
    }

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

