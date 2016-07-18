var mongoose = require('mongoose');

//DB connection
var connectionString = process.env.DB;
console.log('Attempting to Connect');

mongoose.connect(connectionString);
// NOTE: Connect to DB in connectionString

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to: ' + process.env.DB);
});
mongoose.connection.on('error', function (error) {
    console.log('Mongoose ERROR ' + error);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected from: ' + process.env.DB);
});
