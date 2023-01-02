var express=require("express");
const app=express();
var path=require("path");
var bodyparse=require("body-parser");
app.get("/",function(req,resp){

    resp.sendFile(path.join(__dirname,"./public/index.html"));
});

app.listen(4444);
console.log("server is listening on port 4444");