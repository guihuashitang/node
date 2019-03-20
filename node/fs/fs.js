var fs =require('fs')

//fs.stat 检测是文件还是目录

// fs.stat('css',(err,stat)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log(stat.isFile())//文件
//   console.log(stat.isDirectory())//目录
// })

/** 
 * fs.mkdir 创建目录
 * path 创建的目录路径
 * mode 权限 默认0777
 * callback 回调 传递异常err
 * 
*/

// fs.mkdir('css',(err)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log('创建成功')
// })

//fs.weiteFile 创建写入文件

// fs.writeFile('t.txt','asd',(err)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log('写入成功')
// })

//fs.appendFile  追加文件
// fs.appendFileSync('t1.txt','456',(err)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log('追加成功')
// })

//读取
// fs.readFile('t1.txt',(err,data)=>{
//   if(err){
//     console.log(err)
//     return
//   } 
//   console.log(data.toString())
// })

//读取目录
// fs.readdir('../fs',(err,data)=>{
//   if(err){
//     console.log(err)
//     return
//   } 
//   console.log(data)
// })


//重命名
//1.改名 2.剪切文件
// fs.rename('../t1.txt','t2.txt',(err)=>{
//   if(err){
//     console.log(err)
//     return
//   } 
//   console.log('修改成功')
// })

//删除 只能删除目录  不能删除文件
// fs.rmdir('css',(err)=>{
//   if(err){
//     console.log(err)
//     return
//   } 
//   console.log('删除成功')
// })

//删除文件
fs.unlink('t.txt',(err)=>{
  if(err){
    console.log(err)
    return
  } 
  console.log('删除文件成功')
})



