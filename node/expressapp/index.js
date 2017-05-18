/**
 * Created by 207-003 on 2017-05-15.
 */

//ES6

//let = 일반 변수
//const = 상수(객체)

const morgan = require('morgan');

const express = require('express'); //재할당, 재선언 불가

const fs = require('fs'); //파일 읽기 모듈

const ejs = require('ejs'); //ejs도깔거얌

const bodyParser = require('body-parser');

const expressSession = require('express-session');

const cookieParser = require('cookie-parser');

const multipart = require('connect-multiparty');

//서버 만들자
const app = express();

//로그 남기자
app.use( morgan("combined"));

//쿠키와 세션
app.use(expressSession({

    secret : "my-secret-key",
    resave : false,
    saveUninitialized : true

}) );

app.use( cookieParser());




//post 요청 데이터를 request 객체의 body로 등록시켜주는 미들웨어
//다른 미들웨어보다 먼저 수행되어야 하므로 가장 위에 선언한다.
app.use(bodyParser.urlencoded({extended : false}));



//static 요소 불러오기
app.use( express.static(__dirname + "/static"));
app.use( express.static(__dirname + "/multipart"));

//라우팅
app.use("/user", require("./routes/user.route").router);
app.use("/", require("./routes/article.route").router);


//500페이지 처리하는
app.use(function (err, request, response) {

    response.type("text/html");
    response.sendStatus(500);

});

//404페이지 처리하는
app.use(function (request, response) {

    response.type("text/html");
    response.sendStatus(404);

});


//서버 실행
app.listen(3000, function () {

    console.log("server running...");

});