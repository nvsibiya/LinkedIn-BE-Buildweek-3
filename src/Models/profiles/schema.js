const {Schema} = require("mongoose")
const mongoose = require("mongoose")

const profileSchema = new Schema(
  {
    _id: String,
    name: String,
    surname: String,
    bio: String,
    title: String,
    area: String,
    image: String,
   username:String,
  },{
    timestamps:true,
  }
)

module.exports = mongoose.model("profile", profileSchema)
