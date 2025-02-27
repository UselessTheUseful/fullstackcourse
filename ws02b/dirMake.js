const fs = require("fs/promises");
const path = require('path');
const dirPath = path.join(__dirname, 'files', 'testDir')

async function dirMake(dirPath) {
    try {
        await fs.mkdir(dirPath);
        console.log('File created')
    } catch (err) {
        console.error(err);
    }
}

dirMake(dirPath);