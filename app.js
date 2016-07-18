require('dotenv').config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//NOTE: Load DB before Controllers 
require('./db/database');

var routes = require('./controllers/index');

var app = express();
