var express = require('express');
var app = express(); 
const db = require('../database/index');
const bodyParser = require('body-parser');

app.use(express.static('client'));
app.use(bodyParser.text());

app.get('/groceries', function(req, res) {
    res.send('helllllooo werrrld');
});
//'insert into groceries (name, quantity) values ("chicken", 2)'
app.post('/groceries', function(req, res) {
    console.log("this is the req.body", req.body);
    db.insertItems(`insert into groceries (name, quantity) values('${req.body}', 2)`, function(err, result) {
      if (err) {
          console.log("error found in server index.js", err);
          res.send(err);
      } else {
          console.log("success in inserting items, index.js server");
          res.status(400).send(result);
      }
    });
    console.log(req.body);
});

app.get('/groceries', function(req, res) {
    console.log("get request hit");
    db.getItems('select name,quantity from groceries', function(err, result) {
        if (err) {
            console.log("error in getting items from db", err);
            res.send(err);
        } else {
            console.log("success in getting items from db", result);
            res.status(400).send(result);
        }
    });
})


var PORT = 3001; 
app.listen(PORT, console.log("listening on " + PORT))



