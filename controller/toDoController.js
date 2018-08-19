var bodyParser=require('body-parser');
var mongoose=require('mongoose');

//Connect to the db

mongoose.connect('mongodb://pavan:pavan123@ds111422.mlab.com:11422/todo');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//create the schema

var todoSchema=new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo',todoSchema);

var itemOne= Todo({item:"get something"}).save(function(err){
    if(err) throw err;
    console.log('item saved');
});
console.log("hello world");
var data=[{item:'get milk'},{item:'dog'},{item: 'Hello world'}];
module.exports=function(app){
app.get('/todo',function(req,res){
    res.render('todo',{todos:data});

});

app.post('/todo',urlencodedParser,function(req,res){
data.push(req.body);
res.json(data);
});

app.delete('/todo/:item',function(req,res){
    console.log(req.params.item);
    data=data.filter(function(todo){
        return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);


});
};
