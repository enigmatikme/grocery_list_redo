var express = require('express');
var app = express(); 
const db = require('../database/index');
const bodyParser = require('body-parser');

app.use(express.static('client/dist'));
app.use(bodyParser.json());

//'insert into groceries (name, quantity) values ("chicken", 2)'
app.post('/groceries', function(req, res) {
    db.insertItems(`insert into groceries (name, quantity) values('${req.body.name}', ${req.body.quantity})`, function(err, result) {
      if (err) {
          console.log("error found in server index.js", err);
          res.send(err);
      } else {
          res.status(200).send(result);
      }
    });
});

app.get('/groceries', function(req, res) {
    db.getItems('select name,quantity from groceries', function(err, result) {
        if (err) {
            console.log("error in getting items from db", err);
            res.send(err);
        } else {
            res.status(200).send(result);
        }
    });
})


var PORT = 3001; 
app.listen(PORT, console.log("listening on " + PORT))




