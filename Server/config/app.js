const express = require('express');
const db = require('../src/db/conn');
const path = require('path');
// require('../src/db/conn'); // database connection
db.dbConnect(); // database connection

const app = express();
console.log(path.join(__dirname , '..'));
app.use(express.static(path.join(__dirname , '..')));
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
const UserRouter=require('../src/router/AuthRoute');
const ProductRouter=require('../src/router/ProcuctRoute');
const CategoryRouter = require('../src/router/CategoryRoute');
const AddressRoute = require('../src/router/AddressRoute');
const cartRoute = require('../src/router/CartRoute')

app.use('/auth/', UserRouter);
app.use('/product/', ProductRouter);
app.use('/category/', CategoryRouter);
app.use('/address/', AddressRoute);
app.use('/cart/', cartRoute);
app.use(pageNotFound);
app.use(errorHandler);

module.exports=app;
