const cors = require('cors');
const express = require('express');

    const myServer = ({app}) =>{
    
    app.get('/',(req,res)=>{
        res.send('api connected')
    });
    app.use(cors());
    app.use(express.urlencoded({extended:false}));    
    
    return app;
    
    };

module.exports = myServer;