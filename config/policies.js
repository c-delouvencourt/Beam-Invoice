/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "authenticated")
 *
 * For more information on how policies work, see:
 * http://sailsjs.org/#!/documentation/concepts/Policies
 *
 * For more information on configuring policies, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.policies.html
 */
let hasPermission = require('../api/policies/hasPermission');

module.exports.policies = {
  AuthController: {
    token: ["isAuth", hasPermission("auth:token")]
  },
  InvoicesController: {
    list: ["isAuth", hasPermission("invoices:list")]
  },
  EstimatesController: {
    list: ["isAuth", hasPermission("invoices:list")]
  },
  ClientsController: {
    list: ["isAuth", hasPermission("clients:list")],
    get: ["isAuth", hasPermission("clients:get")],
    create: ["isAuth", hasPermission("clients:create")],
    update: ["isAuth", hasPermission("clients:update")],
    archive: ["isAuth", hasPermission("clients:archive")]
  },
  TaxesController: {
    list: ["isAuth", hasPermission("taxes:list")]
  },
  ContractsController: {
    list: ["isAuth", hasPermission("contracts:list")]
  }
};
