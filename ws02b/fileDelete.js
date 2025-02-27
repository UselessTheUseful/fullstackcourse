const fs = require("fs/promises");
const path = require('path');
const filePath = path.join(__dirname, 'files', 'temp.txt')

async function fileDelete(filePath) {
    try {
        await fs.unlink(filePath);
    } catch (err) {
        console.error(err);
    }
}

fileDelete(filePath);