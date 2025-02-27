const fs = require("fs/promises");
const path = require('path');
const filePath = path.join(__dirname, 'files', 'output.txt')

async function fileWrite(filePath) {
    try {
        await fs.writeFile(filePath, 'A very interesting string of text');
        console.log('file created');
        await fs.appendFile(filePath, ', that has now been appended');
        console.log('file appended');
    } catch (err) {
        console.error(err);
    }
}

fileWrite(filePath);