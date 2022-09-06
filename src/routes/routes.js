const { Router } = require("express");
const  TeamController  = require("../controller/Team-controller");

const routes = Router()
const controller = new TeamController

routes.get("/", (req, res) => {
    res.json({info: `API is running`})
})

routes.get("/api/teams", controller.get_all_teams)
routes.get("/api/teams/:id", controller.get_team_by_id)
routes.get("/api/teams/search", controller.get_team)
routes.post("/api/teams/", controller.post_team)
routes.put("/api/teams/:id", controller.update_team)
routes.delete("/api/teams/:id", controller.delete_team)

module.exports = routes