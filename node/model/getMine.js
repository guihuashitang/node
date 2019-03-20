
var fs =require('fs')


// 1. 同步
// module.exports = function(extname){//获取后缀名

//   var data = fs.readFileSync('./model/mime.json')
//   var Mime = JSON.parse(data.toString())

//   return Mime[extname]||'text/html'
// }


// 2. 回调
// module.exports = function(extname,cb){//获取后缀名
//   fs.readFile('./model/mime.json',(err,data)=>{ //异步获取不到  可使用回调函数 or events or 同步readFileSync
//     if(err){
//       console.log('文件不存在',err)
//       return false
//     }else{
//       var Mime = JSON.parse(data.toString())

//       cb(Mime[extname]||'text/html')


//     }
//   })

// }

// 3. 使用events解决异步



module.exports = function(extname,EventEmitter){//获取后缀名

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