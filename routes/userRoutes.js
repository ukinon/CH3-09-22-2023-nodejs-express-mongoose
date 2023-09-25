const express = require("express")

const router = express.Router()

const usersController = require("../controllers/usersController")

router.param("id", usersController.checkData)

// ROUTES UNTUK USERS
router
  .route("/")
  .get(usersController.getAllUsers)
  .post(
    usersController.checkBody,
    usersController.createUser
  )

router
  .route("/:id")
  .get(usersController.getUserById)
  .patch(usersController.editUser)
  .delete(usersController.removeUser)

module.exports = router
