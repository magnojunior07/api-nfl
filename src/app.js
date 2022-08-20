require("dotenv").config()

const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const { Team } = require("../app/models")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.json({info: `Aplicação rodando na porta: ${port}`})
})

app.get("/api/teams", async (req, res) => {
    const teams = await Team.findAll()
    return res.json(teams)
})

app.get("api/teams/:id", async (req, res) => {
    const team = await Team.findByPK(req.params.id)
    res.json(team)
})

app.post("/api/teams", async (req, res) => {
    const team = await Team.create(req.body)
    res.json(team)
})

app.listen(port, () => {
    console.log("API is running")
})