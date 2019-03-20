var http = require('http');
var router = require('./model/router.js')
var url =  require('url');

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
  
  router.statics(req,res,'static')


  
}).listen('8001')


/**
 * url.parse
 * 
 * 
 * 
 */  