// Require express - gives us a function
const express = require('express');

// Created an instance of express by calling the function
// returned above - gives us an object
const app = express();
const port = 5000;

// express static file serving - public is the folder name
app.use(express.static('server/public'));

app.listen(port, () => {
    console.log("Up and running on port: ",port);
});