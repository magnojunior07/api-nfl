const { Router } = require("express");
const  UpdateTeamController  = require("../controllers/update-team-controller");
const { Team } = require("../../app/models");

const put_routes = Router();
const UpdateController = new UpdateTeamController;

put_routes.put("/api/teams/:id", UpdateController.update_team);

module.exports = put_routes;
