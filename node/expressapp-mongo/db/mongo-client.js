/**
 * Created by 207-003 on 2017-05-18.
 */
const mongoose = require("mongoose");

//function 곧바로 실행 ();
module.exports = function () {
    //docker 연결
    mongoose.connect("mongodb://192.168.99.100:32769/article", function (error) {

        if(error){
            console.log(error);
        }else{
            console.log("CONNECT MONGO");
        }
    });


} ();