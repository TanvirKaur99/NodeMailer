var express=require('express');
var bodyparser=require('body-parser');

var apiroutes=require('./routes/userRoutes');
var app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


app.use('/',apiroutes);
app.listen(3000);

