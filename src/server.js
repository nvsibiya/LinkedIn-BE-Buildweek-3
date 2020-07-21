const express = require("express")
const cors = require("cors")
const { join } = require("path")
const listEndpoints = require("express-list-endpoints")
const mongoose = require("mongoose")


const {
  notFoundHandler,
  badRequestHandler,
  genericErrorHandler,
} = require("./handleError")
const profilesRouter = require("./models/profiles")
const experiencesRouter = require("./models/experiences")
const postsRouter= require("./Models/post")
const server = express()

const port = process.env.PORT

const staticFolderPath = join(__dirname, "../public")
server.use(express.static(staticFolderPath))
server.use(express.json())

server.use(cors())


server.use("/profiles", profilesRouter)
server.use("/posts", postsRouter)
server.use("/experiences", experiencesRouter)
// ERROR HANDLERS MIDDLEWARES

server.use(badRequestHandler)
server.use(notFoundHandler)
server.use(genericErrorHandler)

console.log(listEndpoints(server))

mongoose
  .connect("mongodb://localhost:27017/MODELS", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    server.listen(port, () => {
      console.log("Running on port", port)
    })
  )
  .catch((err) => console.log(err))
