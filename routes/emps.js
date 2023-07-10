const express = require("express");
const appForEmps = express.Router();
const mysql = require("mysql2");
const config = require("config");
const connection = mysql.createConnection({
  host: config.get("host"),
  user: config.get("user"),
  password: config.get("password"),
  database: config.get("database"),
});

appForEmps.get("/", (request, response) => {
  var query = "select * from Employee";
  connection.query(query, (error, result) => {
    if (error == null) {
      var data = JSON.stringify(result);
      response.setHeader("Content-Type", "application/json");
      response.send(data);
    } else {
      console.log(error);
    }
  });
});

appForEmps.post("/", (request, response) => {
  var query = `insert into Employee(id, e_name, email, password, emp_id, dname, doj) values (${request.body.id},'${request.body.e_name}','${request.body.email}','${request.body.password}','${request.body.emp_id}','${request.body.dname}','${request.body.doj}');`;

  connection.query(query, (error, result) => {
    if (error == null) {
      var data = JSON.stringify(result);
      response.setHeader("Content-Type", "application/json");
      response.send(data);
    } else {
      console.log(error);
      response.setHeader("Content-Type", "application/json");
      response.send(error);
    }
  });
});

appForEmps.delete("/:id", (request, response) => {
  var query = `delete from Employee where id= ${request.params.id}`;
  connection.query(query, (error, result) => {
    if (error == null) {
      var data = JSON.stringify(result);
      response.setHeader("Content-Type", "application/json");
      response.send(data);
    } else {
      console.log(error);
      response.setHeader("Content-Type", "application/json");
      response.send(error);
    }
  });
});

appForEmps.put("/:id", (request, response) => {
  var query = `update Employee set dname='${request.body.dname}', doj='${request.body.doj}' where id=${request.params.id}`;
  connection.query(query, (error, result) => {
    if (error == null) {
      var data = JSON.stringify(result);
      response.setHeader("Content-Type", "application/json");
      response.send(data);
    } else {
      console.log(error);
      response.setHeader("Content-Type", "application/json");
      response.send(error);
    }
  });
});

module.exports = appForEmps;
