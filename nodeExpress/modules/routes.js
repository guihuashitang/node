var express = require('express')
var router = express.Router();
var app = new express(); /** 实例化*/
var fs = require("fs")

app.use(express.static('public'))



//图片上传
var multiparty = require('multiparty');
// var http = require('http');
// var util = require('util');



var DB = require('./db.js')






router.use((req,res,next)=>{
  if(session.userinfo&&session.userinfo.username!=''){
    next();
  }else{
    res.redirect('/login')
    next();
  }
 
})



//商品
router.get('/product',(req,res)=>{
 

  DB.find('product',{},function(data){
    
    res.render('product',{
      list:data
    })
  })

})

//编辑商品
router.get('/productedit',(req,res)=>{

  var id = req.query.id;
  DB.find('product',{"_id":new DB.ObjectID(id)},function(data){
    console.log(data)
    res.render('productedit',{
      data:data[0]
    })

  })



})


router.post('/doEdit',(req,res)=>{

  var form = new multiparty.Form()
  form.uploadDir = 'upload'
  
  form.parse(req,function(err,fields,files){
    let _id = fields._id[0]
    let title = fields.title[0]
    let price = fields.price[0]
    let fee = fields.fee[0]
    let description = fields.description[0]
    let pic = files.pic[0].path;

    var originalFilename = files.pic[0].originalFilename
    if(originalFilename){

      var params = {
        title,
        price,
        fee,
        description,
        pic
      }
    }else{
      var params = {
        title,
        price,
        fee,
        description,
      }
      fs.unlink(pic)
    }

    console.log(fields) //获取表单数据

    console.log(files) //图片上传成功

    DB.updata('product',{"_id":new DB.ObjectID(_id)},params,function(data){
      res.redirect('/product')
    
  
    })


  })



})





//z增加商品 
router.get('/productadd',(req,res)=>{

  res.render('productadd')


})

//商品
router.post('/doProductAdd',(req,res)=>{
  
  var form = new multiparty.Form()
  form.uploadDir = 'upload'
  
  form.parse(req,function(err,fields,files){

    let title = fields.title[0]
    let price = fields.price[0]
    let fee = fields.fee[0]
    let description = fields.description[0]
    let pic = files.pic[0].path

    console.log(fields) //获取表单数据

    console.log(files) //图片上传成功

    DB.insert('product',{
      title,
      price,
      fee,
      description,
      pic
    },(data)=>{
      res.redirect('/product')
    })


  })


})
 

//z增加商品
router.get('/productDel',(req,res)=>{

  var id = req.query.id;

  DB.deleteData('product',{"_id":new DB.ObjectID(id)},function(data){
    res.redirect('/product')

  })

})




module.exports = router;