require("dotenv").config();
const express = require("express");
const app = express();   // function 
 // server will listen on this port 


 const JSONDATA = {
    "name": "Bhupesh Choudhary", 
    "mob": "7489356891",
    "addr": "jaipur"
 }




app.get("/", (req, res)=>{          // listen on slash route if you get any request on then it will send the response
    res.send("Hello World");
});

app.get("/twitter", (req, res)=>{
    res.send("Welcome to twitter app");
});

app.get("/login", (req, res)=>{
    res.send("<h1>Please login at twitter</h1>")
})
 
app.get("/youtube", (req, res)=>{
    res.send("<h2>Chai aur code</h1>");
})

app.get("/mydata", (req, res)=>{
    res.json(JSONDATA);
})

app.listen(process.env.PORT, ()=>{              // listen (variable)
    console.log(`listening to port ${process.env.PORT}`);
});
