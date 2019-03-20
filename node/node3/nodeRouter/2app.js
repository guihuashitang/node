var http = require('http');
var model = require('./model/model.js')
var url = require('url');
var ejs = require('ejs');
var fs = require('fs')
//path.extname 获取文件后缀名


http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html;charser='utf-8'"
  });
  var pathname = url.parse(req.url).pathname.replace('/','');

  try{

    model[pathname](req, res)

  }catch(err){

    model['home'](req, res)


  }
 



}).listen('8002')