const express = require('express');
const db = require('../src/db/conn');
// require('../src/db/conn'); // database connection
db.dbConnect(); // database connection

const app = express();
app.use(express.json({}));

const {pageNotFound} = require('../src/middleware/PageNotFound');
const {errorHandler} = require('../src/middleware/ErrorHandler');
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Router
const UserRouter=require('../src/router/authRoute');


app.use('/auth/', UserRouter);
app.use(pageNotFound);
app.use(errorHandler);

module.exports=app;
