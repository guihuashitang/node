var url =  require('url');
var fs =require('fs')
var path =require('path')
var events =require('events');
var EventEmitter = new events.EventEmitter();


function getMime(extname){//获取后缀名
  fs.readFile('./model/mime.json',(err,data)=>{
    if(err){
      console.log('文件不存在',err)
      return false
    }
    var Mime = JSON.parse(data.toString())
    var result = Mime[extname]||'text/html'
    EventEmitter.emit('getData',result)
  })
}




exports.statics = function(req,res,staticPath){
  var pathname = url.parse(req.url).pathname 
  if(pathname=='/'){
    pathname = '/index.html'
  }

  var extname = path.extname(pathname)
  if(req.url!='/favicon.ico'){
    //文件操作
    fs.readFile(staticPath+pathname,(err,data)=>{
      if(err){
        fs.readFile(staticPath+'/404.html',(err404,data404)=>{
          res.writeHead(404,{"Content-Type":"text/html;charser='utf-8'"});
          res.write(data404)
          res.end()
        })

      }else{


        //使用events  3.
        getMime(extname)
        EventEmitter.on('getData',(mime)=>{

          res.writeHead(200,{"Content-Type":`${mime};charser='utf-8'`});
          res.end(data)  

        })

      }

    })

  }

}