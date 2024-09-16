// server.js or app.js
const express = require('express');
const route=require('./routeApi');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api',route)

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});

