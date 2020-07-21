const express = require("express")

const postSchema = require("./schema")

const postsRouter = express.Router()

postsRouter.get("/", async (req, res, next) => {
  try {
    const posts = await postSchema.find(req.query)
    res.send(posts)
  } catch (error) {
    next(error)
  }
})

postsRouter.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id
    const post= await postSchema.findById(id)
    if (post) {
      res.send(user)
    } else {
      const error = new Error(error.httpStatusCode = 404)
      
      next(error)
    }
  } catch (error) {
    console.log(error)
    next("While reading post list a problem occurred!")
  }
})

postsRouter.post("/", async (req, res, next) => {
  try {
    const newpost = new postSchema(req.body)
    const { _id } = await newpost.save()

    res.status(201).send(_id)
  } catch (error) {
    next(error)
  }
})

postsRouter.put("/:id", async (req, res, next) => {
  try {
    const Post= await postSchema.findByIdAndUpdate(req.params.id, req.body)
    console.log(Post)
    if (Post) {
      res.send("Ok")
    } else {
      const error = new Error(`post with id ${req.params.id} not found`)
      error.httpStatusCode = 404
      next(error)
    }
  } catch (error) {
    next(error)
  }
})

postsRouter.delete("/:id", async (req, res, next) => {
  try {
    const Post = await postSchema.findByIdAndDelete(req.params.id)
    if (Post) {
      res.send("Deleted")
    } else {
      const error = new Error(`post with id ${req.params.id} not found`)
      error.httpStatusCode = 404
      next(error)
    }
  } catch (error) {
    next(error)
  }
})

module.exports = postsRouter
