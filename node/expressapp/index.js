/**
 * Created by 207-003 on 2017-05-15.
 */

//ES6

//let = 일반 변수
//const = 상수(객체)

const express = require('express'); //재할당, 재선언 불가

const fs = require('fs'); //파일 읽기 모듈

const ejs = require('ejs'); //ejs도깔거얌

const bodyParser = require('body-parser');

//서버 만들자
const app = express();

//post 요청 데이터를 request 객체의 body로 등록시켜주는 미들웨어
//다른 미들웨어보다 먼저 수행되어야 하므로 가장 위에 선언한다.
app.use(bodyParser.urlencoded({extended : false}));


//자료 만들기
const mockData = [

    { subject : "졸 려",
        writer : "졸린 사람",
        content : "zzz..."
    },

    { subject : "안 졸 려",
        writer : "안 졸린 사람",
        content : "!zzz..."
    }


];



//http://localhost:3000 으로 접속시 보이는 화면 설정
app.get("/", function (request, response) {

    fs.readFile('view/list.html', 'utf-8', function (err, data) {

        if(err){
            response.type("text/html");
            response.sendStatus(500);
        }

        response.type("text/html");
        response.send(ejs.render(data, {

            title : "Node.js List Page",
            list : mockData

        })); //render 필수 render(본문, 변수 정의)

    });

});

//글쓰기페이지
app.get("/write", function (request, response) {

    fs.readFile('view/write.html', 'utf-8', function (err, data) {

        if(err){
            response.type("text/html");
            response.sendStatus(500);
        }

        response.type("text/html");
        response.send(ejs.render(data, {

            title : "Node.js Writer Page"
        })); //render 필수 render(본문, 변수 정의)

    });

});

//글쓰기 전송 페이지(post방식!)
app.post("/write", function (request, response) {

    //POST로 전달된 데이터들을 받아온다
    //let -> ES6
    let subject = request.body.subject;
    let writer = request.body.writer;
    let content = request.body.content;

    //mockdata에 추가하기 위해 리터럴 생성
    const newData = {

        subject : subject,
        content : content,
        writer : writer

    };

    //mockdata 에 추가하기
    mockData.push(newData);

    //추가 완료 시 "/"로 이동
    response.redirect("/");

});

//글 읽기

app.get("/contents/:id", function (request, response) {

    //글번호 받아오기
    let id = request.params.id;
    const item = mockData[id];

    fs.readFile("view/detail.html", "utf-8", function (err, data) {

        if (err) {
            response.type("text/html");
            response.sendStatus(500);
        }

        response.type("text/html");
        response.send(ejs.render(data, {

            item: item,
            id : id

        }));
    });
});

//글 삭제

app.get("/delete/:id", function (request, response) {

    let id = request.params.id;

    //배열 삭제
    mockData.splice(id, 1);

    response.redirect("/");
});

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

})