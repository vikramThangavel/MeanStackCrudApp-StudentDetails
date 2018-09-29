var express=require("express");
var bodyparser=require('body-parser');
var mongoose=require('mongoose');
var app=express();

mongoose.connect('mongodb://localhost/students');

var db=mongoose.connection;

db.on('error',function(err){
   console.log(err);
});

db.on("success",function(req,res){
    console.log("success");
})

var Student=mongoose.model('Student',mongoose.Schema({
name:String,
dept:String,
contact:String,
salary:String
}));

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.static(__dirname + "/client"));

app.get("/api/students",function(req,res){
    Student.find(function(err,students){
        if(err)
        res.send(err);
        res.json(students);
    });
});

app.get("/api/students/:id",function(req,res){
    Student.findOne({_id:req.params.id},function(err,students){
        if(err)
        res.send(err);
        res.json(students);
    })
})

app.post('/api/students',function(req,res){
    Student.create(req.body,function(err,students){
        if(err)
        res.send(err);
        res.json(students);
    });
});


app.delete("/api/students/:id",function(req,res){
    Student.findOneAndRemove({_id:req.params.id},function(err,students){
        if(err)
        res.send(err);
        res.json(students);
    });
});

app.put("/api/students/:id",function(req,res){
    var query={
        name:req.body.name,
        dept:req.body.dept,
        contact:req.body.contact,
        salary:req.body.salary
    };
    Student.findOneAndUpdate({_id:req.params.id},query,function(err,students){
        if(err)
        res,send(err);
        res.json(students);
        })
})


app.listen(3000,function(){
    console.log("Server Started");
});