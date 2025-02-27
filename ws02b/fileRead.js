const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files', 'example.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// exit on uncought error
process.on('uncaughtException', err => {
    console.error(`There was an uncought exception ${err}`);
    process.exit(1);
});