/**
 * 非阻塞式IO
 * 
 */
var fs =require('fs')



function getMime(cb){
  fs.readFile('./IO/mime.json',(err,data)=>{
    // console.log(data)
    console.log(2)
    cb(data)
  })
  
}

getMime(function(res){ //回调函数处理异步
  console.log(res)
})