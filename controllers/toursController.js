const fs = require("fs")

const Tour = require(".././models/toursModel")

const checkData = (req, res, next, val) => {
  const tour = Tour.findById(val)

  if (!tour) {
    return res.status(404).json({
      status: "failed",
      message: `data with this id ${val} not found`,
    })
  }
  next()
}

const getAllTours = async (req, res) => {
  try {
    const newTours = await Tour.find()

    res.status(200).json({
      status: "success",
      requestTime: req.requestTime,
      data: {
        newTours,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    })
  }
}

const getTourById = async (req, res) => {
  try {
    const id = req.params.id
    const tour = await Tour.findById(id)

    res.status(200).json({
      status: "success",
      requestTime: req.requestTime,
      data: {
        tour,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    })
  }
}

const createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body)
    // 201 = CREATED
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    })
  }
}

const editTour = async (req, res) => {
  try {
    const id = req.params.id
    const tour = await Tour.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    )

    res.status(201).json({
      status: "success",
      data: {
        tour: tour,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    })
  }
}

const removeTour = async (req, res) => {
  try {
    const id = req.params.id
    const tour = await Tour.findByIdAndRemove(id)

    res.status(201).json({
      status: "success",
      data: {
        tour: null,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    })
  }
}

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  editTour,
  removeTour,
  checkData,
}
