const express = require("express");
require('dotenv').config();
const app = express();
const path = require("path");
const bodyparser = require('body-parser');
const fs = require('fs');

const port = process.env.PORT || 3005;

const IndexRouter = require('./router/index.js');
const AboutRouter = require('./router/about.js');
const ContactRouter = require('./router/contact.js');
const ServicesRouter = require('./router/services.js');

app.use(bodyparser.urlencoded({ extended: true }));

const requestLogger = (req, res, next) => {
    console.log(req.method + " " + req.url);
    next();
};

const HeaderChecker = (req, res, next) => { 
    if (req.headers['x-custom-header']) {
        next();
    } else {
        res.status(403).send('Error: no custom header');
    }
};

app.use(requestLogger);
app.use('/contact', HeaderChecker);

app.use(express.static(path.join(__dirname, "public")));

app.use('/', IndexRouter);

app.use('/about', AboutRouter);

app.use('/contact', ContactRouter);

app.use('/services', ServicesRouter);

app.post('/submit', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

const filePath = path.join(__dirname, 'files');

app.get('/list', (req, res) => { 
    fs.readFile(filePath + '/text.txt', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading text file: ' + err);
        } else {
            res.send(data);
        }
    });
});  

app.get('/json', (req, res) => {
    let rawdata = fs.readFileSync(filePath + '/data.json');
    let data = JSON.parse(rawdata);

    html = '<table><tr><th>Name</th><th>Service</th></tr>';
    for (x in data) {
        html += `<tr><td>${data[x].name}</td><td>${data[x].service}</td></tr>`;
    }
    html += '</table>';
    res.send(html);
});

app.post('/add', (req, res) => {
    if (!req.body.name || !req.body.service) {
        res.status(400).send('Missing data in request');
        return;
    }

    let rawdata = fs.readFileSync(filePath + '/data.json');
    let data = JSON.parse(rawdata);

    let name = req.body.name;
    let service = req.body.service;

    data.push({ name: name, service: service });

    let jsonStr = JSON.stringify(data);

    fs.writeFile(__dirname + "/files/data.json", jsonStr, (err) => {
        if (err) throw err;
        console.log("Data written to file");
    });

    res.end();
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});