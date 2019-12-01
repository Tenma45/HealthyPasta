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

app.use("/static", express.static('./public/static/'));
app.use("/static", express.static('./public/pic/'));
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
const schedule = fdatabase.ref('schedule')
const orderTrainer = fdatabase.ref('orderTrainer')
const orderFDM = fdatabase.ref('orderFDM')
 
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

app.post('/checkuser',(req,res)=>{
    let duplicate = false
    memberref.once("value", function(snapshot) {
        if(snapshot.child(req.body.username).exists()){
                duplicate = true
                res.json({duplicate:duplicate})       
            }
            else{
                
                res.json({duplicate:duplicate}) 
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
//HERE
app.post('/fetchprofile',(req,res)=>{
    memberref.once("value", function(snapshot) {
    let doc = snapshot.child(req.session.username).val();
    res.json(doc)
    })
 })

app.post('/updateprofile',(req,res)=>{
    req.body.username=req.session.username
    memberref.once("value", function(snapshot) {
        let doc = snapshot.child(req.session.username).val();
        req.body.password=doc.password
        req.body.role=doc.role
        memberref.child("/"+req.session.username).set(req.body)
        //memberref.child("/"+req.session.username).update({firstname:req.body.firstname})    
        res.redirect('/#/home')
        })
 })
 
 app.post('/addrequest',(req,res)=>{
    memberref.child("/"+req.body.username).set(req.body)
    res.redirect('/')
 })

 app.post('/fetchstate',(req,res)=>{
    res.redirect('/')
 })

 app.post('/fetchrequest1',(req,res)=>{
    res.redirect('/')
 })

 app.post('/fetchrequest2',(req,res)=>{
    res.redirect('/')
 })

 app.post('/addclient1',(req,res)=>{
    res.redirect('/')
 })

 app.post('/addclient2',(req,res)=>{
    res.redirect('/')
 })

 app.post('/fetchclient1',(req,res)=>{
    res.redirect('/')
 })

 app.post('/fetchclient2',(req,res)=>{
    res.redirect('/')
 })

 app.post('/fetchschedule',(req,res)=>{
    res.redirect('/')
 })

 app.post('/addschedule',(req,res)=>{
    res.redirect('/')
 })

 app.post('/removeprogram',(req,res)=>{
    res.redirect('/')
 })

 app.post('/removerequest',(req,res)=>{
    res.redirect('/')
 })

 app.post('/doneclient',(req,res)=>{
    res.redirect('/')
 })


app.listen(process.env.port||6000,()=>{
    console.log("Server is on");
})

exports.app = functions.https.onRequest(app);