//jshint esversion:6

const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/",function(req, res){
  res.sendFile(__dirname + "/start.html");
});

app.post("/dicee.html",function(req, res){
  res.sendFile(__dirname + "/dicee.html");

});

app.listen("3000", function(){
  console.log("server started");
});
