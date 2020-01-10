const inquirer = require('inquirer');
const figlet = require('figlet');
const signale = require('signale');
const editJsonFile = require("edit-json-file");
const uuidv4 = require('uuid/v4');

let packageJson = require('../package');
let file = editJsonFile('../config.json', { autosave: true });

figlet('Beam', function(err, data) {
  if(err) return signale.fatal(err);
  console.log(data);
  signale.success('Version', packageJson.version);
  signale.success('Welcome to the Beam installer...');
  signale.success('Please follow the instruction to install the project.');

  console.log();
  console.log();
  signale.success('Starting with the database...');

  // Ask options
  inquirer
    .prompt([
      {type: "input", name: "db:host", message: "Postgresql host", default: "localhost"},
      {type: "input", name: "db:user", message: "Postgresql user", default: "user"},
      {type: "input", name: "db:password", message: "Postgresql password", default: "password"},
      {type: "input", name: "db:port", message: "Postgresql port", default: 5432},
      {type: "input", name: "db:database", message: "Postgresql database", default: "beam"}
    ])
    .then(answers => {
      file.set("postgresql.host", answers["db:host"]);
      file.set("postgresql.user", answers["db:user"]);
      file.set("postgresql.password", answers["db:password"]);
      file.set("postgresql.port", answers["db:port"]);
      file.set("postgresql.database", answers["db:database"]);
      signale.success('Configuration done !');
      signale.pending('Generating a JWT random key...');
      file.set("jwt.key", uuidv4());
      signale.success('Generated !');

      file.save();
    });
});
