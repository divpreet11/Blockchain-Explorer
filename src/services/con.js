const mongoose = require('mongoose');


//import * as mongoose from "mongoose"
mongoose.connect("mongodb://localhost:27017/explorer", );

var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected', function() {
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));