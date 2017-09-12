var connection = require("../config/connection.js");

var orm = {

all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

create: function(name, cb){
    var queryString = "INSERT INTO burgers (burger_name) VALUES(?)";
    connection.query(queryString, [name], function(err,result){
      if(err){
        throw err;
        }
      cb(result);
    });
  }, 

update: function(devoured, id, cb){
    var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";
    connection.query(queryString, [devoured, id], function(err,result){
      if(err){
        throw err;
        }
      cb(result);
    });
      
  }


}

module.exports = orm;