const express = require("express");
 const app = express();
app.get("/", function(req,res){
    res.send("Hello ... I'm happy to see you ");
});
app.get("/contact",function(req,res){
    res.send("you can contact me by alazartegene@gmail.com")
});
app.get("/about",function(req,res){
    res.send(" My name is Alazar Tegene. I have graduated from Jimma University in Electrical and Computer Engineering ");
});
app.get("/next", function(req,res){
    res.send("Now we can talk if we agreed ");
});
app.get("/new",function(req,res){
    res.send("We are working on it ");
});
 app.listen(3000, function(){
     console.log("surver is opened on port 3000");
 });










