/**
 * Created by 207-003 on 2017-05-18.
 */
//mongodb랑 연결
require('../mongo-client');
const mongoose = require('mongoose');
const articleschema = mongoose.Schema({

    subject : String,
    contetnt : String,
    writer : String,
    originalFileName : String,
    filePath : String

});

module.exports = mongoose.model('article', articleschema);