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

    type: {
      type: 'number',
      required: false,
      defaultTo: 0
    },

    viewCount: {
      type: 'number',
      defaultTo: 0
    },

    paymentDate: {
      type: 'string',
      required: false
    },

    fromEstimate: {
      type: 'boolean',
      defaultTo: false
    },

    fromEstimateNumber: {
      model: 'estimates',
      required: false
    },

    isPayed: {
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

