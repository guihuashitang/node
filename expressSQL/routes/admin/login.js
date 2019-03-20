
var express = require('express')
var router = express.Router();
var app = new express(); /** 实例化*/
var md5 = require("md5-node")
var session = require('express-session');
app.use(session({
  secret :  'secret', // 对session id 相关的cookie 进行签名
  resave : false,   
  saveUninitialized: true, // 是否保存未初始化的会话
  cookie:{
    maxAge: 1000*60*30
  },
  rolling: true
}))



var SQL = require('../../modules/sql.js')


//登录
router.get('/',(req,res)=>{

  res.render('admin/login')


})


// //登录
router.post('/dologin',(req,res)=>{

  // var username = req.body.username;
  // var password = md5(req.body.password)

  let sql = 'SELECT * FROM users WHERE username= ? AND password= ?'

  SQL._connectDb(sql,[req.body.username,req.body.password],function(results, fields){
    console.log(results[0])
    session.userinfo = results[0]

    res.redirect('/admin/product'); 
  })


})



module.exports = router;