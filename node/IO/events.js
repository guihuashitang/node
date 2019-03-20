/** 
 * events 模块处理异步
 * 
*/

var events =require('events');



var EventEmitter = new events.EventEmitter();







//广播  和  接受广播

//监听to_parent广播
EventEmitter.on('to_parent',()=>{

  console.log('接收到了广播事件')
  EventEmitter.emit('to_mime','mime的数据')

  
})


setTimeout(() => {
  console.log('开始')
  //广播to_parent事件
  EventEmitter.emit('to_parent','发送的数据')


}, 1000);


EventEmitter.on('to_mime',(data)=>{

  console.log(data)


})