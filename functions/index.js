const functions = require('firebase-functions');
const express = require('express');
const path = require('path')
const app = express();
var site_root = path.resolve(__dirname+'/..');

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/index.html'));
})

app.get('/time',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/404.html'));
})

app.listen(process.env.port,()=>{
    console.log("Server on "+process.env.port);
}
)

exports.app = functions.https.onRequest(app);