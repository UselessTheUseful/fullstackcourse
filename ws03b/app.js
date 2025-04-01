//E1

const express = require('express');
const app = express();
const ejs = require('ejs');
require('dotenv').config();
const routes = require('./routes/routes');

const port = process.env.PORT || 3000;

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
    res.render('./pages/test');
});

//E2 - E3 - E4 - E5

app.use('/', routes.router);

app.listen(port);
console.log(`Server is running on port ${port}`);
