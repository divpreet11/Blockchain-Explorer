import { json } from 'body-parser';
import * as mongoose from 'mongoose'
import UserHelper from "../helpers/user.helper";

//var Schema = mongoose.Schema;

var data = new mongoose.Schema({
    //_Id: mongoose.Schema.ObjectId,
    block_number: Number,
    data: Object
});




module.exports = mongoose.model("Data", data);