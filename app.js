const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

// Middlewares
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Cors handling
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers',"Origin,x-Requested-With,Content-Type,Accept,Authorization");
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','GET,PATCH,POST,DELETE');
        return res.status(200).json({});
    }
})

// Routes
app.use('/products',productRoutes);
app.use('/orders',orderRoutes);

// Error handing
app.use((req,res,next)=>{
    const error = new Error('Not Found!');
    error.status = 404;
    next(error);
})
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    })
})
module.exports = app;