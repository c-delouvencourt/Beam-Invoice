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
      defaultTo: 0
    },

    viewCount: {
      type: 'number',
      defaultTo: 0
    },

    acceptedDate: {
      type: 'string',
      required: false
    },

    toInvoice: {
      type: 'boolean',
      defaultTo: false
    },

    toInvoiceNumber: {
      type: 'number',
      required: false
    },

    isAccepted: {
      type: 'boolean',
      defaultTo: false
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

};

