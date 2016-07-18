var express = require('express');
var controller = express.Router();

// Note: Grab Model - 
// var Model = require('../models/MyModel');

// HOME PAGE
controller.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });

});

// NOTE: 
//  Model.find(function(err, types) {
//     if (err) console.log(err);
//     res.json(types);
//   });
// });

module.exports = controller;
