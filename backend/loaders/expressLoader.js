const cors = require('cors');
const express = require('express');

    const myServer = ({app}) =>{
    
        const corsOptions = {origin: "http://localhost:4200"}
    
        app.get('/',(req,res)=>{
        res.send('api connected')
        });
        
        app.use(cors(corsOptions));
    
        app.use(express.urlencoded({extended:false}));    
    
    return app;
    
    };

module.exports = myServer;