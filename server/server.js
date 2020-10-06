// Require express - gives us a function
const express = require('express');

// Created an instance of express by calling the function
// returned above - gives us an object
const app = express();
const port = 5000;

// express static file serving - public is the folder name
app.use(express.static('server/public'));

const quotesData = require ('./modules/quotes.js');

let index = 0;

app.get('/quotes', (req, res) => {
    console.log('hi from get request');
    res.send(quotesData[index]);
});

app.get('/randomQuotes', (req, res) => {
    let randomNumber = getRandomInt(quotesData.length);
    res.send(quotesData[randomNumber]);
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

app.listen(port, () => {
    console.log("Up and running on port: ",port);
});