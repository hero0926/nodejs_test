/**
 * Created by 207-003 on 2017-05-17.
 */
// Route 용 Express 모듈 가져오기

const express = require("express");
const fs = require('fs'); //파일 읽기 모듈
const ejs = require('ejs'); //ejs도깔거얌
const multipart = require('connect-multiparty');


// Route를 수행하는 객체 가져오기

const router = express.Router();


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

//제일먼저 실행시키자!
router.use(function (request, response, next) {

    console.log(request.session.USER);

    //로그인을 안했다면?
    if(request.session.USER == undefined){

        response.redirect("/user/login");

        //얘는 끝낸다.
        return;

    }else{
        //다음 미들웨어를 실행시키자!
        next();

    }

});


//http://localhost:3000 으로 접속시 보이는 화면 설정
router.get("/", function (request, response) {


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
router.get("/write", function (request, response) {

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
//얘한테만 미들웨어를 넘긴다.
router.post("/write", multipart({

        uploadDir : "/multipart"

    }), function (request, response) {

    //POST로 전달된 데이터들을 받아온다
    //let -> ES6
    let subject = request.body.subject;
    let writer = request.body.writer;
    let content = request.body.content;
    let files = request.files;

    console.log(files);

    //mockdata에 추가하기 위해 리터럴 생성
    const newData = {

        subject : subject,
        content : content,
        writer : writer

    };

    //파일 업로드 했을 경우
    if(files.file.originalFilename != ''){

        newData.originalFilename = files.file.originalFilename;
        newData.filePath = files.file.path;

    }

    //mockdata 에 추가하기
    mockData.push(newData);

    //추가 완료 시 "/"로 이동
    response.redirect("/");

});

//글 읽기

router.get("/contents/:id", function (request, response) {

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

router.get("/delete/:id", function (request, response) {

    let id = request.params.id;

    //배열 삭제
    mockData.splice(id, 1);

    response.redirect("/");
});


//파일 다운로드

router.get("/download/:id", function (request, response) {

    let id = request.params.id;
    const item = mockData[id];

    console.log(item.filePath);

    fs.readFile( item.filePath, "utf-8", function (err, data) {
        response.type('octet/stream');
        response.set({

            'Content-Disposition' : 'attachment; file-name="' + item.originalFileName + '"',
            'Content-Transfer-Encoding' : 'binary'

        });
        response.send(data);
    } );

});


// router 객체는 express에서 사용할 수 있도록 router 모듈에 포함시킴
exports.router = router;