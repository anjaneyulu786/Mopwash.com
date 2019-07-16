var express = require("express");
var app = express();
var router = express.Router();
var fs = require('fs');

app.use(express.static(__dirname + '/'));

router.get("/",function(req,res){
  res.sendFile("index.html");
});

app.use("/",router);

app.listen(80,function(){
  console.log(app.settings.env + ';__dirname:' + __dirname + ';');
  console.log('ScheduleApp UI Server started @Port : ' + this.address().port);
});

//sudo node server.js