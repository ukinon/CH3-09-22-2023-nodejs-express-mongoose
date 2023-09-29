const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")

const app = require("./app")

const port = process.env.PORT || 3000

const database = process.env.DATABASE_URI

mongoose
  .connect(database, {
    useNewUrlParser: true,
  })
  .then(() =>
    console.log("DB Connection Success")
  )

app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})
