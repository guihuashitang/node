var fs = require('fs')

//流的方式读取

// var readStream = fs.createReadStream('t2.txt')

// var str = ''
// var count =0
// readStream.on('data',(chunk)=>{
//   str+=chunk
//   count++
// })

// readStream.on('end',(chunk)=>{
//   console.log(str)
//   console.log(count)
// })

// readStream.on('error',(err)=>{
//   console.log(err)
// })


//写入流
// var writeStream = fs.createWriteStream('t3.txt')
// var data = '999'
// writeStream.write(data,'utf8')

// writeStream.end()

// writeStream.on('finish',()=>{
//   console.log('写入完成')
// })

// writeStream.on('error',()=>{
//   console.log('写入失败')
// })




//管道流
var readStream = fs.createReadStream('t2.txt')
var writeStream = fs.createWriteStream('t3.txt')
readStream.pipe(writeStream) 