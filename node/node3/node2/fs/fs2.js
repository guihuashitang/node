var fs = require('fs')

//1.判断是否有目录   没有就创建   (图片上传)
// fs.stat('./upload',(err,stats)=>{
//   if(err){
//     fs.mkdir('./upload',(error)=>{
//       if(error){
//         console.log(error)
//         return false
//       }
//       console.log('创建成功')
//     })
//   }else{
//     console.log('目录已存在')
//     console.log(stats.isDirectory())
//   }

// })

//2.找出文件夹下目录，打印
var fileList = [];
fs.readdir('css', (err, files) => {
  if (err) {
    console.log(err)
    return false
  } else {
    // for(item of files){ //判断是目录还是文件 --异步
    //   console.log('item1',item)
    //    fs.stat(item,(error,stats)=>{
    //     console.log('item2',item)
    //   })
    // }

    (function getFile(i) {
      if (i == files.length) {
        console.log(fileList)
        return false
      }
      fs.stat('css/' + files[i], (error, stats) => {
        if (stats.isDirectory()) {
          fileList.push(files[i])
        }
        getFile(i + 1)

      })
    })(0)

  }

})