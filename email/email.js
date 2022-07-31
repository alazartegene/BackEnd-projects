const express = require("express");
//const cors = require("cors");
const request = require("request");
const https = require("https");
const path = require('path');
const app = express();


app.use(express.static ( path.resolve(__dirname, 'public')));
//app.use(cors())

app.use(express.urlencoded({extended: false}))


app.get("/", function(req, res){
    res.sendFile(__dirname + "/email.html");
});

app.post("/", function(req, res){

const firstName = req.body.fName;
const lastName = req.body.lName;
const email = req.body.email;

 console.log(firstName, lastName, email);

const data = {
    members: [
        {
            email_adress: email,
            status: "subscribed",
            merge_fields:{
                FNAME: firstName,
                LNAME: lastName,
            }
        }
    ]
};



const jsonData= JSON.stringify(data); 

const url = "https://us14.api.mailchimp.com/3.0/lists/1b9e09f96e";

const options = {
    method: "POST",
    auth: "alazar:98abf5951417fc727b7b1ed7e9a67899-us14"
}


const request = https.request(url, options, function(response){
   if( response.statusCode === 200){
       res.sendFile(__dirname + "/success.html");
   } else{
       res.sendFile(__dirname + "/failure.html");
   }
   
    response.on("data", function(data){
        console.log(JSON.parse(data));
    })

})
 request.write(jsonData);
 request.end();

});
app.post("/failure.html", function(req ,res){
    res.redirect("/");
});
app.listen(3000, function(){
    console.log("Local Server 3000 is running...");
});


// APIKEY

// 98abf5951417fc727b7b1ed7e9a67899-us14


// API Idl
// 1b9e09f96e

// 98abf5951417fc727b7b1ed7e9a67899-us14