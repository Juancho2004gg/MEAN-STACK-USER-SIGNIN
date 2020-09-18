/*
* Server dependecies
*/
require('dotenv').config()
const   express   = require('express'),
        mongoose  = require('mongoose'),
        jwt       = require('jsonwebtoken'),
        path      = require('path'),
        crypto    = require('crypto'),
        multer    = require('multer'),
        loaders   = require('./loaders'),
        server    = require('./server'),
        routes    = require('./routes'),
        app       = express()
/*
* Running server
*/
server({ app , routes , mongoose, loaders, jwt, multer})