const express = require('express');

const app = express();

app.get('/', function (req, res){
    res.send("Hello Again MoneyLion!");
});

app.listen(80);
