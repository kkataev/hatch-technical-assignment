/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const sourceFile = path.resolve(__dirname, '../src/data/nl.json');
const distFile = path.resolve(__dirname, '../src/data/nl-filtered.json');

console.log('Reading source file');

const data = fs.readFileSync(sourceFile);
const json = JSON.parse(data);

const mapped = json.map((item) => ({
  city: item.city,
  adminName: item.admin_name,
  population: parseInt(item.population, 10),
}));

console.log('Saving mapped data');

fs.writeFileSync(distFile, JSON.stringify(mapped), { flag: 'w+' });

console.log('Data saved successfully');
