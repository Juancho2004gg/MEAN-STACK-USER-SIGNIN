const cors = require('cors');
const express = require('express');

    const myServer = ({app}) =>{
    
    app.get('/',(req,res)=>{
        res.send('api connected')
    });
    app.use(cors('localhost:4200'));
    app.use(express.urlencoded({extended:false}));    
    
    return app;
    
    };

module.exports = myServer;