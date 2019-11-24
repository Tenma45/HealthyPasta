const functions = require('firebase-functions');
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
const session = require('express-session')
const app = express();
var firebase = require('firebase-admin');
var serviceAccount = require('./serviceAccountKey.json')

app.use(cookieParser('sign'))
app.use(bodyParser());
//app.use(expressValidator());
app.use(session({ saveUninitialized: false, resave: false}))

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://realtimeapp-b69e4.firebaseio.com'
  });
  
const database = firebase.database();
const memberref = database.ref('member')

app.get('/',(req,res)=>{
        res.redirect('/home')
})

app.get('/home',(req,res)=>{
    
    if(req.session.username){
        if(req.session.role=="client"){
            res.sendFile(path.join(__dirname,'/public/UserIndex.html'));
        }
        if(req.session.role=="trainer"){
            res.sendFile(path.join(__dirname,'/public/TrainerIndex.html'));
        }
        if(req.session.role=="fdm"){
            res.sendFile(path.join(__dirname,'/public/DeliMan.html'));
        }
    }
    else {
        res.sendFile(path.join(__dirname,'/public/home.html'));
    }
})

app.post('/register',(req,res)=>{
    req.body.role="client"
    memberref.child("/"+req.body.username).set(req.body)
    req.session.username=req.body.username
    req.session.role=req.body.role
    res.redirect('/')
})

app.post('/login',(req,res)=>{
    memberref.once("value", function(snapshot) {
        if(snapshot.child(req.body.username).exists()){
            if(snapshot.child(req.body.username).child("password").val()==req.body.password){
                req.session.username=req.body.username
                req.session.role=snapshot.child(req.body.username).child("role").val()
                res.redirect('/')
            }
            else{
                res.redirect('/')
            }
        }
        else{
            res.redirect('/')   
        }
    })
})

app.get('/logout',(req,res)=>{
    req.session.username=null;
    req.session.role=null;
    res.redirect('/')
})

app.get('/error',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'/public/404.html'));
})

app.listen(process.env.port,()=>{
    console.log("Server is on");
})

exports.app = functions.https.onRequest(app);