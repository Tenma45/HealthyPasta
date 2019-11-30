const functions = require('firebase-functions');
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
const session = require('express-session')
const app = express();
const firebase = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json')
const FirebaseStore = require('connect-session-firebase')(session);

const ref = firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://realtimeapp-b69e4.firebaseio.com'
  });

app.use(cookieParser('HTP'))
app.use(bodyParser());
//app.use(expressValidator());
app.use(session({ secret:'HTP', saveUninitialized: false, resave: false}))
app.use(session({
    store: new FirebaseStore({
      database: ref.database()
    }),
    name: '__session',
    secret: 'HTP',
    resave: true,
    saveUninitialized: true
  }));

const fdatabase = firebase.database();
const memberref = fdatabase.ref('member')

app.get('/',(req,res)=>{
    res.cookie("TEST",req.session.role,{maxAge:60000})
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
        console.log("NOID")
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
                res.cookie("TEST0",req.session.username,{maxAge:60000})
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
    delete req.session.username
    delete req.session.role
    res.redirect('/')
})

app.get('/error',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'/public/404.html'));
})

app.listen(process.env.port||5000,()=>{
    console.log("Server is on");
})

exports.app = functions.https.onRequest(app);