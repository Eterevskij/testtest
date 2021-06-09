import {Router} from 'express';
import mysql from 'mysql';
import express from 'express';

const router = Router();

let sql;

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'Telephone'
  });
  connection.connect();
  
  
export const getBooks = (req, res, next) => {
    sql = 'SELECT * FROM `phone`';
    req.resp = sqlRes;

      next();
}     

connection.query( 
    sql,
    function (error, results, fields) {
        sqlRes = results;
    }
  )

// !!!!

app.get('/page', function(req, res) {
  connection.query("SELECT * FROM `table`",  function(err, result) {
      res.render('index.html', { object: result });
  });
});



  connection.end();