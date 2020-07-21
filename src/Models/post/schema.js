const {Schema} = require("mongoose")
const mongoose=require("mongoose")

const postSchema= new Schema(
{ _id : String,
role : String,
company : String,
username : String,
user : {
id:Number,
name : String,
surname : String,
email: String,
bio: String,
title:String,
area:String,
ussername:String,
createdAt: String,
updatedAt: String,
},}
)

module.exports = mongoose.model("post", postSchema )