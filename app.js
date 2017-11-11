var express=require('express');
var moogose=require('mongoose');
var bodyParser=require('body-parser');
var cors=require('cors');
var  path=require('path');

const route=require('./routes/route');

var app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'resources')));
app.use('/api',route);

const port=3000;

app.listen(port,()=>{
    console.log('Server started successfully on port '+port);
});

app.get('/',(req,resp)=>{
    resp.send('Hello World');   
});

moogose.connect('mongodb://localhost:27017');
moogose.connection.on("connected",()=>{
    console.log("Mongodb connected successfully");
});
moogose.connection.on("error",(err)=>{
    console.log("Mongodb connecttion failed "+err);
});