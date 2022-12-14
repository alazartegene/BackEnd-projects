const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator", function(req,res){
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    
    var bmi = weight / (height * height);

    res.send("your bmi is " + bmi);
});

app.listen(3000, function(){
    console.log("port is connected to local host 3000");
});