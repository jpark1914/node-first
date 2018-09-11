//The main Point of Entry To Do node.JS app


const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const config = require('./config');//Get config exports




//Start listening for connections
console.log(`Listening on port ${port}...`);
app.listen (port);

//Mongo Stuff
const mongoose = require('mongoose');

// Actually connect to the database (lets use a promise)
mongoose.connect(config.getDbConnectionString(),{ useNewUrlParser: true }).then(()=> {
        console.log("Successfully connected to the database.");
    },
    err => {
        console.log("ERROR connecting to the database.");
        throw err;
    }
);

const setupController = require('./controllers/setupController');
setupController(app);