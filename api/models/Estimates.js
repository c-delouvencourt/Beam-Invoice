/**
 * Estimates.js
 *
 * @description :: Users models for auth and users management.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    client: {
      model: 'users'
    },

    date: {
      type: 'string',
      required: true
    },

    articles: {
      type: 'json',
      required: true
    },

    taxes: {
      type: 'number',
      columnType: 'float',
      required: false,
      defaultsTo: 0
    },

    viewCount: {
      type: 'number',
      defaultsTo: 0
    },

    acceptedDate: {
      type: 'string',
      required: false
    },

    toInvoice: {
      type: 'boolean',
      defaultsTo: false
    },

    toInvoiceNumber: {
      type: 'number',
      required: false
    },

    isAccepted: {
      type: 'boolean',
      defaultsTo: false
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

