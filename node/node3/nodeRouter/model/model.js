
var ejs = require('ejs');


var app  = {
  //login
  login:function(req,res){

    console.log('login')
   



    let data = '后台数据'
    let list = ['1', '2', '3']

    ejs.renderFile('ejs/login.ejs', {
      data: data,
      list: list
    }, (err, data) => {
      res.end(data)
    })


  },
  register:(req,res)=>{


  },
  doLogin:(req,res)=>{

    

  },
  home:(req,res)=>{
    res.end('home')
  }
  
}


module.exports = app




// app.login('1','2')

// app['login']('1','2')