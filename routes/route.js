var express=require('express');
var contact=require('../model/contact')
var router=express.Router();




router.get('/data',(req,resp,next)=>{
    contact.find((err,contacts)=>{
        resp.json(contacts);
    });
});

router.post('/data',(req,resp,next)=>{
    var newContact=new contact({
        name:req.body.name,
        mobile:req.body.mobile
    });
    debugger;
    newContact.save((err,contact)=>{
        if (err!=null) {
            resp.json({msg: err});
        }else {
            resp.json({msg: "Data added successfuly."});
        }
    });
});

module.exports=router;