var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

module.exports = function() {
    
    var app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    
    //route to angular app
    app.use(express.static('./core/client'));
    
    return app;
    
}