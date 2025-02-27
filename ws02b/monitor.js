const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'files', 'watch.txt');

fs.watch(filePath, (eventType, filename) => {
    console.log(`Type: '${eventType}' modification detected in file: ${filename}`);
});
