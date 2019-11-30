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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
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
    if(req.session.username){
        if(req.session.role=="client"){
            res.sendFile(path.join(__dirname,'/public/UserIndex.html'));
        }
        else if(req.session.role=="trainer"){
            res.sendFile(path.join(__dirname,'/public/TrainerIndex.html'));
        }
        else if(req.session.role=="fdm"){
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

app.post('/checklogin',(req,res)=>{
    let pass = false
    let error = ''
    memberref.once("value", function(snapshot) {
        if(snapshot.child(req.body.username).exists()){
            if(snapshot.child(req.body.username).child("password").val()==req.body.password){
                req.session.username=req.body.username
                req.session.role=snapshot.child(req.body.username).child("role").val()
                console.log("USERNAME TRUE")
                pass = true
                res.json({pass:pass,error:error})       
            }
            else{
                error="Incorrect password"   
                res.json({pass:pass,error:error}) 
            }
        }
        else{  
            error="Username not found"
            res.json({pass:pass,error:error}) 
        }
    })  
})

app.post('/login',(req,res)=>{
   res.redirect('/')
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