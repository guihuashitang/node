var express = require('express')

var app = new express(); /** 实例化*/
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
app.use(cookieParser('signed'))
var md5 = require("md5-node")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.use(express.static('public'))
app.use('/admin',express.static('public'))
app.use('/admin/upload',express.static('upload'))
app.use('/admin/product/upload',express.static('upload'))




var admin = require("./routes/index.js")



app.use('/admin',admin)





app.listen(8002,'127.0.0.1')


/**
 * 
 * express.static('public')给public目录下提供静态服务
 * 中间件就是匹配路由之前和 匹配路由之后做的一系列操作
 * 权限判断:没有登录跳转到登录页面
 * 
 * 
 * 中间件表示匹配任意路由
 * 
 * 
 * 
 * 第三方中间件
 * body-parser
 * 
 * 
 * 应用级中间件
 * next()继续向下匹配
 */
