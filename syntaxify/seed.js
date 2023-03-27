require('dotenv').config();
require('./config/database');

const Documentation = require('./models/documentation');

const data = require('./data');

(async function() {
results = await Promise.all([
  Documentation.create(data.documentations),
  ]);
  process.exit();
})();