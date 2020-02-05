/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */
const generator = require('generate-password');
const bcrypt = require('bcryptjs');

module.exports.bootstrap = async function (cb) {
  if ((await Users.count()) === 0) {
    let password = await generator.generate({
      length: 10,
      numbers: true
    });

    let apiToken = await generator.generate({
      length: 54,
      numbers: true,
    });

    await Users.create(
      {firstName: "John", name: "Doe", email: "admin@beam.io", rank: 'Admin', password: password, permissions: [], apiToken: apiToken, jwtToken: apiToken}
    );
    sails.log();
    sails.log('------------------------------------------------------------');
    sails.log('We have created an user for you because of first start up !');
    sails.log('');
    sails.log('             PLEASE CHANGE THE PASSWORD !!!                  ');
    sails.log('');
    sails.log('                 Your credentials                           ');
    sails.log('               ---------------------');
    sails.log('               Email : admin@beam.io                       ');
    sails.log('               Password :', password);
    sails.log('------------------------------------------------------------');
  }
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
