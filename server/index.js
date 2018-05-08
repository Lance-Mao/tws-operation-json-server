//导入express模块
const express = require('express');

const app = express();

//引入mongoose数据库驱动
const mongoose = require('mongoose');
//设置连接位置
mongoose.createConnection('mongodb://localhost:27017/test');


//引入WeatherSchema
const Weather = require('./models/weather');

const db = mongoose.connection;
// db.on('error', () => console.log("error"));
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    let weather = new Weather({
        date: "明天（周四）",
        dayPictureUrl: "http://api.map.baidu.com/images/weather/day/leizhenyu.png",
        weather: "雷阵雨转中雨",
        wind: "微风",
        temperature: "29～22℃",
    });
    console.log(weather);
    weather.save(function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log('saved OK!');
        }
        // 关闭数据库链接
        db.close();
    });
    console.log("success");
});

app.get('/', function (request, response) {
    response.send("hello world");
});

app.listen(3000, function () {
    console.log("服务器3000端口");
});