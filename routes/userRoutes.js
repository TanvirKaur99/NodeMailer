var express=require('express');
var myctrl=require('../controller/userController');
var route =express.Router();

route.get('/',myctrl.openPage);
route.post('/mail',myctrl.sendingEmails);
module.exports=route;