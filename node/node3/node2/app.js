var http = require('http');
var url =  require('url');
var fs =require('fs')
var path =require('path')
var mimeModel = require('./model/getMine.js')


var events =require('events');
var EventEmitter = new events.EventEmitter();

//path.extname 获取文件后缀名
/**
 * req获取url信息
 * res浏览器返回响应信息
 * 
 * supervisor
 * cnpm install -g supervisor改代码自动重启服务器
 * 
 * node模块分为   1.Node提供的模块：核心模块，2.用户编写的模块：文件模块
*/

http.createServer((req,res)=>{
  var pathname = url.parse(req.url).pathname //过滤传值
  if(pathname=='/'){
    pathname = '/index.html'
  }
  // console.log(pathname)
  //发送HTTP头部
  //状态码 200
  //文件类型html,字符集utf
 
  var extname = path.extname(pathname)
  if(req.url!='/favicon.ico'){
    //文件操作
    fs.readFile('static'+pathname,(err,data)=>{
      if(err){
        fs.readFile('static/404.html',(err404,data404)=>{
          res.writeHead(404,{"Content-Type":"text/html;charser='utf-8'"});
          res.write(data404)
          res.end()
        })

      }else{
        //同步 1.
        // var mime = mimeModel(extname)
        // res.writeHead(200,{"Content-Type":`${mime};charser='utf-8'`});
        // res.write(data)
        // res.end()


        //回调 2.
        // mimeModel(extname,(mime)=>{
        //   res.writeHead(200,{"Content-Type":`${mime};charser='utf-8'`});
        //   res.write(data)
        //   res.end()  
        // })


        //使用events  3.
        mimeModel(extname,EventEmitter)
        EventEmitter.on('getData',(mime)=>{

          res.writeHead(200,{"Content-Type":`${mime};charser='utf-8'`});
          res.end(data)  

        })





      }

    })

    // var result = url.parse(req.url,true) //(地址，true表示把get传值转化为对象)
    // console.log(result)
    // console.log(result.query.aid,'2')
  }


}).listen('8001')


/**
 * url.parse
 * 
 * 
 * 
 */  