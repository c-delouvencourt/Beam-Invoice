/**
 * Invoices.js
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

    file: {
      type: 'string',
      required: false
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

    type: {
      type: 'number',
      required: false,
      defaultsTo: 0
    },

    viewCount: {
      type: 'number',
      defaultsTo: 0
    },

    paymentDate: {
      type: 'string',
      required: false
    },

    fromEstimate: {
      type: 'boolean',
      defaultsTo: false
    },

    fromEstimateNumber: {
      model: 'estimates',
      required: false
    },

    isPayed: {
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

