var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost/connection',function(err){
  if(err){
    console.log(`error is ${err}`);
  }
  else
  {
    console.log('connected to the database');
  }
});

var Schema = new mongoose.Schema({
	email    : String,
	name     :String,
	age   : Number
});

var user = mongoose.model('emp', Schema);

app.post('/new', function(req, res){
	new user({
		email    : req.body.email,
		name: req.body.name,
		age   : req.body.age
	}).save(function(err, doc){
		if(err) res.json(err);
		else    res.send('Successfully inserted!');
	});
});

app.get('/view', function(req, res){
  user.find({},=>(err, data){
	    if(!err){
	    console.log(data);
	    }
	       
	});
});


for find One thing and send name in body 
// app.post('/view', function(req, res){
//   user.findOne({name:req.body.name},function(err, data){
// 	    if(!err){
// 	    console.log(data);
// 	    }
	       
// 	});
// });

app.listen(3000,function (err) {
	if(err){
	    console.log(err)
	   }else{
            console.log('server is running on port 3000');	
	   }
	
	   
 
});
