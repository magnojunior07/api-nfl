require("dotenv").config()

const express = require("express")
const body_parser = require("body-parser")
const routes = require("./routes/routes")
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(body_parser.json())
app.use(express.urlencoded({extended: true}))
app.use(routes)

app.listen(port, () => {
    console.log("API is running")
})
