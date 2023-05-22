const config = {};

config.version = require('../version.json').version;
console.log(`CONFIG: version:${config.version}`);

module.exports = config;
