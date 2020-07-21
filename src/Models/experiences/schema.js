const {Schema} = require("mongoose")
const mongoose= require("mongoose")

const experienceSchema= new Schema(
{ _id : String,
role : String,
startDate: String,
company : String,
endDAte : String,
description : String,
area: String,
username: String,
createdAt: String,
updatedAt: String,
image:""},{
    timetamps:true,
}
)

module.exports = mongoose.model("experience", experienceSchema )