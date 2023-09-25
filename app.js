// CORE PACKAGE/MODULE
const fs = require("fs")

// THIRD PARTY PACKAGE/MODULE
const express = require("express")
const morgan = require("morgan")

// OUR OWN PACKAGE/MODULE
const tourRouter = require(`${__dirname}/routes/tourRoutes.js`)
const userRouter = require(`${__dirname}/routes/userRoutes.js`)

const app = express()

// middleware dari express
// memodifikasi incoming request/request body ke api kita
app.use(express.json())
app.use(morgan("dev"))

// OUR OWN MIDDLEWARE
app.use((req, res, next) => {
  console.log(
    "hallo FSW2 di middleware kita sendiri"
  )
  next()
})

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString()
  console.log(req.requestTime)
  next()
})

// middleware untuk check nih boleh gak di akses user tersebut === authorization
// app.use((req, res, next) => {
//   if (req.body.role !== "admin") {
//     return res.status(401).json({
//       message: "kamu gak boleh akses",
//     })
//   }

//   next()
// })

app.use("/api/v1/tours", tourRouter)
app.use("/api/v1/users", userRouter)

module.exports = app
