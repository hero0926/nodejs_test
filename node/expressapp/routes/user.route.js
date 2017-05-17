/**
 * Created by 207-003 on 2017-05-17.
 */
// Route 용 Express 모듈 가져오기

const express = require("express");
const fs = require('fs'); //파일 읽기 모듈
const ejs = require('ejs'); //ejs도깔거얌

// Route를 수행하는 객체 가져오기

const router = express.Router();


//http://localhost:3000 으로 접속시 보이는 화면 설정
router.get("/", function (request, response) {

    response.type("text/html");
    response.send("<h1>Hello User.</h1>");

});

//로그인~
router.get("/login", function (request, response) {

    fs.readFile('view/login.html', 'utf-8', function (err, data) {

        if(err){
            response.type("text/html");
            response.sendStatus(500);
        }

        response.type("text/html");
        response.send(ejs.render(data));

    });

});

    router.post("/login", function (request, response) {

       let id = request.body.id;
       let password = request.body.password;

       const user = {

           id : id,
           password : password

       };

       request.session.USER = user;

       response.redirect("/");

    });

// router 객체는 express에서 사용할 수 있도록 router 모듈에 포함시킴
exports.router = router;