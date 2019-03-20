var events =require('events');
var EventEmitter = new events.EventEmitter();

var fs =require('fs')


function getMime(){

  fs.readFile('./IO/mime.json',(err,data)=>{ 

    EventEmitter.emit('getData',data)

    
  })
}

getMime()

//监听广播数据
EventEmitter.on('getData',(mime)=>{

  console.log(mime.toString())


})
