// TASK1
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const URI = process.env.URI
const PORT = process.env.PORT || 3000;

const routes = require('./routes/routes');

const app = express();

app.use(bodyParser.json());

mongoose.connect(URI, { dbName: 'tankData' });

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


