const fs = require('fs');
const inquirer = require('inquirer');
const figlet = require('figlet');
const signale = require('signale');
const editJsonFile = require("edit-json-file");
const uuidv4 = require('uuid/v4');
let packageJson = require('../package');

fs.writeFile(__dirname + '/../config.json', JSON.stringify({
  "db": {
    "host": "",
    "user": "",
    "password": "",
    "port": "3306",
    "database": "Beam"
  },
  "jwt": {
    "key": "CHANGE THIS PLS !!"
  }
}), async function (err) {
  if (err) return console.log(err);

  let file = await editJsonFile(__dirname + '/../config.json', { autosave: true });

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
        {type: "input", name: "db:host", message: "DB host", default: "localhost"},
        {type: "input", name: "db:user", message: "DB user", default: "user"},
        {type: "input", name: "db:password", message: "DB password", default: "password"},
        {type: "input", name: "db:port", message: "DB port", default: 3306},
        {type: "input", name: "db:database", message: "DB database", default: "Beam"}
      ])
      .then(answers => {
        file.set("db.host", answers["db:host"]);
        file.set("db.user", answers["db:user"]);
        file.set("db.password", answers["db:password"]);
        file.set("db.port", answers["db:port"]);
        file.set("db.database", answers["db:database"]);
        signale.success('Configuration done !');
        signale.pending('Generating a JWT random key...');
        file.set("jwt.key", uuidv4());
        signale.success('Generated !');

        file.save();
      });
  });

});
