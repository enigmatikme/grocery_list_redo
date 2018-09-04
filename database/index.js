var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Student12345!',
    database: 'new_grocery_list'
});

var insertItems = function(query, whenPosted) {
    
    connection.query(query, function(err, res) {
        if (err) {
            console.log("db insertitems err", err);
            whenPosted(err, null);
        } else {
            console.log("db insert items succes");
            whenPosted(null, res);
        }
    });
}

//BRB

var getItems = function(query, whenReceived) {
    connection.query(query, function(err, res) {
        if (err) {
            console.log("databse get Items err", err);
            whenReceived(err, null);
        } else {
            console.log("database get Items succes", res)
            whenReceived(null, res);
        }
    });
}

module.exports = {
    getItems: getItems,
    insertItems: insertItems
}
