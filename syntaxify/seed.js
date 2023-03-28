require('dotenv').config();
require('./config/database');

const Language = require("./models/language");
const Framework = require("./models/framework");
const Database = require("./models/database");

const data = require('./data');

(async function() {
  const p1 = Language.deleteMany({});
  const p2 = Framework.deleteMany({});
  const p3 = Database.deleteMany({});
  let results = await Promise.all([p1, p2, p3])
results = await Promise.all([
  Language.create(data.languages),
  Framework.create(data.frameworks),
  Database.create(data.databases),
]);
process.exit();
})();
  