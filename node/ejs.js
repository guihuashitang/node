var http = require('http');
var router = require('./model/router.js')
var url =  require('url');
var ejs =  require('ejs');
var fs =require('fs')
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
  res.writeHead(200,{"Content-Type":"text/html;charser='utf-8'"});
  var pathname = url.parse(req.url).pathname;
  var basic = url.parse(req.url);

var method = req.method.toLowerCase();
console.log(method)
  if(pathname=='/login'){

    let data = '后台数据'
    let list = ['1','2','3']

    ejs.renderFile('ejs/login.ejs',{data:data,list:list},(err,data)=>{
      res.end(data)
    })

  }else if(pathname=='/register'){

    let msg = '注册'
    let h = '<h2>aaa<h2>'
    // <%-h%> 解析html

    ejs.renderFile('ejs/register.ejs',{msg:msg,h:h},(err,data)=>{
      res.end(data)
    })

  }else if(pathname=='/doLogin'&&method=='get'){


    res.end('doLogin'+method)

  }else if(pathname=='/doLogin'&&method=='post'){

    var postStr = '';

    req.on('data', function(chunk){  

      postStr += chunk;

    });


    req.on('end',function(){

      fs.appendFile('ejs/ttt.txt',postStr+'\n',function(err){
        if(err){
          console.log(err)
          return
        }
        console.log('chenggong')
        res.end()
      })
      
    })



  }else{
    ejs.renderFile('ejs/index.html',{},(err,data)=>{
      res.end(data)
    })
  }

}).listen('8002')

