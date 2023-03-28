require('dotenv').config();
require('./config/database');

const Language = require("./models/language");
const Framework = require("./models/framework");
const Database = require("./models/database");

const data = require('./data');

(async function() {
results = await Promise.all([
  Language.create(data.languages),
  ]);
  process.exit();
})();