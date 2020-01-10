const editJsonFile = require("edit-json-file");

const uuidv4 = require('uuid/v4');
let file = editJsonFile('../config.json', { autosave: true });

// DB
file.set("postgresql.host", "localhost");

// JWT
file.set("jwt.key", uuidv4());

