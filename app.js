require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const dbConnect = require('./config/mongo');

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;

//Routes
app.use('/api', require('./routes'));

app.listen(port, () => {
    console.log(`port ready in ${port}`);
});

dbConnect();