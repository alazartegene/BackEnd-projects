const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/weatherproject.html");
});
app.post("/", function(req, res){
   
    const query = req.body.cityName;
    const appKey = "&appid=ad3040116e3789c2eed092e120b4e32d";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&" + appKey + "&units=" + unit;
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temprature = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = " http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<p>The temprature is currently " + weatherDescription + ".<p>");
            res.write("<h1> The temprature in " + query +  " is " + temprature + " &#8451.</h1>");
            res.write("<img src=" + imageURL + ">");
            res.send()
        }) 
    });

})






app.listen(3000, function(){
    console.log("the app is runing on port 3000");
});