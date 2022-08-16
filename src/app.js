require("dotenv").config()

const express = require("express")
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.json({info: `Aplicação rodando na porta: ${port}`})
})

app.listen(port, () => {
    console.log("API is running")
})