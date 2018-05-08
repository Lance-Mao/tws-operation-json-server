const express = require('express');

const app = express();

app.get('/', function (request, response) {
    response.send("hello world");
});

app.listen(3000,function () {
    console.log("服务器3000端口");
})