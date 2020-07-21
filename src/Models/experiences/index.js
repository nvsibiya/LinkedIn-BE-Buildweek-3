const express = require("express")

const experienceSchema = require("./schema")

const experiencesRouter = express.Router()

experiencesRouter.get("/", async (req, res, next) => {
  try {
    const experiences = await experienceSchema.find(req.query)
    res.send(experiences )
  } catch (error) {
    next(error)
  }
})

experiencesRouter.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id
    const experience = await experienceSchema.findById(id)
    if (experience) {
      res.send(experience)
    } else {
      const error = new Error( error.httpStatusCode = 404)
     
      next(error)
    }
  } catch (error) {
    console.log(error)
    next("While reading experiences list a problem occurred!")
  }
})

experiencesRouter.post("/", async (req, res, next) => {
  try {
    const newExperience = new experienceSchema(req.body)
    const { _id } = await newExperience.save()

    res.status(201).send(_id)
  } catch (error) {
    next(error)
  }
})

experiencesRouter.put("/:id", async (req, res, next) => {
  try {
    const  experience = await experienceSchema.findByIdAndUpdate(req.params.id, req.body)
    console.log(experience)
    if (experience) {
      res.send("Ok")
    } else {
      const error = new Error(`experience with id ${req.params.id} not found`)
      error.httpStatusCode = 404
      next(error)
    }
  } catch (error) {
    next(error)
  }
})

experiencesRouter.delete("/:id", async (req, res, next) => {
  try {
    const experience = await experienceSchema.findByIdAndDelete(req.params.id)
    if (experience) {
      res.send("Deleted")
    } else {
      const error = new Error(`experience with id ${req.params.id} not found`)
      error.httpStatusCode = 404
      next(error)
    }
  } catch (error) {
    next(error)
  }
})

module.exports = experiencesRouter
