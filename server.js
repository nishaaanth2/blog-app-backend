console.log("hello")
const app = require("express")()
var mongoose = require('mongoose');
const dbConfig = require('./src/config/configDatabase');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
//const cors = require("cors")
const PORT = 3000;
const express = require("express");
const router = require('./src/routes/index')
const env = process.env.NODE_ENV || 'local';

app.use(express.json())
app.use('/api/v1',router)
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});