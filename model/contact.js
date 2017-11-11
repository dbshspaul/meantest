var moogose=require('mongoose');

var contactSchema= moogose.Schema({
    name:{
        type:String,
        require:true
    },
    mobile:{
        type:String,
        require:true
    }
});

const  Contact=module.exports=moogose.model('Contact',contactSchema);