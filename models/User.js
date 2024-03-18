const mongoose = require('mongoose')
const { Schema } = mongoose
const UserSchema = new Schema({
    //my first input is going to be name 
    name:{
        type:String,
        required:true
        //the above line for making the field compulsory to be filled
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('user',UserSchema)
//now what the above line means is that whenever is use this 'model' then a collection titled 'user' is made on the database 
//if there is a preexisting collection then the new entries are added to that collection . otherwise new collection banke add hongi cheeze.
//data insertion jo hai woh model ki help se hota hai website to database