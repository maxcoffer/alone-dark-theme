const yaml = require('js-yaml');
const fs = require('fs');
const doc = yaml.safeLoad(fs.readFileSync(`${__dirname}/src/alone.yml`, 'utf8'));
fs.writeFileSync(`${__dirname}/theme/alone.json`, JSON.stringify(doc, null, 2));
