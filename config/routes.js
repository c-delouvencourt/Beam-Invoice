/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  // NOTE all routes defined before the 'GET /*' will override

  // All GET requests are directed to the app controller which renders our app.
  'GET /*': {
    controller: 'AppController',
    action: 'index',
    skipAssets: true,
  },

  // Auth
  'POST /api/auth/login': "AuthController.login",
  'GET /api/auth/token': "AuthController.token",

  // Clients
  'GET /api/client': "ClientsController.list",
  'GET /api/client/:id': "ClientsController.get",
  'PUT /api/client': "ClientsController.create",
  'PATCH /api/client/:id': "ClientsController.update",
  'DELETE /api/client/:id': "ClientsController.archive",

  // Invoices
  'GET /api/invoices': "InvoicesController.list",
  'GET /api/invoices/test': "InvoicesController.pdf",

  // Estimates
  'GET /api/estimates': "EstimatesController.list",

  // Taxes
  'GET /api/taxe': "TaxesController.list",
  'GET /api/taxe/:id': "TaxesController.get",
  'PUT /api/taxe': "TaxesController.create",
  'PATCH /api/taxe/:id': "TaxesController.update",
  'DELETE /api/taxe/:id': "TaxesController.archive",

  // Contracts
  'GET /api/contract': "ContractsController.list",
  'GET /api/contract/:id': "ContractsController.get",
  'PUT /api/contract': "ContractsController.create",
  'PATCH /api/contract/:id': "ContractsController.update",
  'DELETE /api/contract/:id': "ContractsController.archive",

  // ADMIN

  // Users
  'GET /api/admin/users': "AdminUsersController.list",
  'PUT /api/admin/users': "AdminUsersController.create",
};
