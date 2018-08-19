var express=require('express');
var toDoController=require('./controller/toDoController');

var app=express();
//set up template engine

app.set('view engine','ejs');

//static files

app.use(express.static('public'));
//lisen to port

app.listen(3000);
console.log("listening to 3000");

//fire controller

toDoController(app);

