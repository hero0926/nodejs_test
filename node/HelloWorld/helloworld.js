/**
 * Created by 207-003 on 2017-05-15.
 */

//Http 모듈 가져옴
var http = require('http');
var fs = require('fs');


//Http 서버 만들기
var server = http.createServer(function (request, response) {

    //response.writeHead(200, {'Content-Type' : 'text/html'});
    //response.end('<h1>HELLO WORLD</h1>');

    fs.readFile('helloworld.html', 'utf-8' ,function (err, data) {

        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(data);

    });


});

//서버실행
server.listen(3000, function () {
    console.log("ㅅㅓㅂㅓ 3000");
});
