var express = require('express');

var router = express.Router();
var session = require('express-session');

var login = require('./admin/login.js');
var product = require('./admin/product.js');
var user = require('./admin/user.js');

router.use((req, res,next) => {
  console.log(req.url)
  if (req.url == '/login' || req.url == '/login/dologin') {

    next()

  } else {
    
    if (session.userinfo && session.userinfo.username != '') {

      // req.app.locals['userinfo']=req.session.userinfo; 
      next();

    } else {

      res.redirect('/admin/login')


    }
  }
})

router.use('/login',login)
router.use('/product',product)
router.use('/user',user)


module.exports = router