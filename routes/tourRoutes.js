const express = require("express")

const router = express.Router()

// ROUTES UNTUK TOUERS
router
  .route("/")
  .get(getAllTours)
  .post(createTour)

router
  .route("/:id")
  .get(getTourById)
  .patch(editTour)
  .delete(removeTour)

module.exports = router
