import { json } from 'body-parser';
import * as mongoose from 'mongoose'
import UserHelper from "../helpers/user.helper";


var data = new mongoose.Schema({
    block_number: Number,
    data: Object
});




module.exports = mongoose.model("Data", data);