const express = require("express")

const profileSchema = require("./schema")

const profilesRouter = express.Router()

profilesRouter.get("/", async (req, res, next) => {
  try {
    const profiles = await profileSchema.find(req.query)
    res.send(profiles)
  } catch (error) {
    next(error)
  }
})

profilesRouter.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id
    const profile = await profileSchema.findById(id)
    if (profile) {
      res.send(user)
    } else {
      const error = new Error(error.httpStatusCode = 404)
      
      next(error)
    }
  } catch (error) {
    console.log(error)
    next("While reading users list a problem occurred!")
  }
})

profilesRouter.post("/", async (req, res, next) => {
  try {
    const newprofile = new profileSchema(req.body)
    const { _id } = await newprofile.save()

    res.status(201).send(_id)
  } catch (error) {
    next(error)
  }
})

profilesRouter.put("/:id", async (req, res, next) => {
  try {
    const profile= await profileSchema.findByIdAndUpdate(req.params.id, req.body)
    console.log(profile)
    if (profile) {
      res.send("Ok")
    } else {
      const error = new Error(`User with id ${req.params.id} not found`)
      error.httpStatusCode = 404
      next(error)
    }
  } catch (error) {
    next(error)
  }
})

profilesRouter.delete("/:id", async (req, res, next) => {
  try {
    const profile = await profileSchema.findByIdAndDelete(req.params.id)
    if (profile) {
      res.send("Deleted")
    } else {
      const error = new Error(`User with id ${req.params.id} not found`)
      error.httpStatusCode = 404
      next(error)
    }
  } catch (error) {
    next(error)
  }
})

module.exports = profilesRouter
