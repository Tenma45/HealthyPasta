const functions = require('firebase-functions');
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express();
var firebase = require('firebase-admin');
var serviceAccount = require('./serviceAccountKey.json')

app.use(cookieParser())
app.use(bodyParser());

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://realtimeapp-b69e4.firebaseio.com'
  });
  
const database = firebase.database();
const memberref = database.ref('member')

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/home.html'));
})

app.post('/register',(req,res)=>{
    req.body.role="client"
    memberref.child("/"+req.body.username).set(req.body)
    res.sendFile(path.join(__dirname,'/public/UserIndex.html'));

})

app.get('/error',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'/public/404.html'));
})

app.listen(process.env.port,()=>{
    console.log("Server is on");
})

exports.app = functions.https.onRequest(app);