const express = require("express")

const router = express.Router()

// ROUTES UNTUK USERS
router
  .route("/")
  .get(getAllUsers)
  .post(createUser)

router
  .route("/:id")
  .get(getUserById)
  .patch(editUser)
  .delete(removeUser)

module.exports = router
