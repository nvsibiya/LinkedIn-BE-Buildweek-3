const { Schema } = require("mongoose")
const mongoose = require("mongoose")

const userSchema = new Schema(
  {
    _id: String,
    name: String,
    surname: String,
    bio: String,
    title: String,
    area: String,
    image: String,
   username:String
  },
)

module.exports = mongoose.model("user", userSchema)
