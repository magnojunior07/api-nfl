const { Router } = require("express");
const  DeleteTeamController  = require("../controllers/delete-team-controller");
const { Team } = require("../../app/models");

const delete_routes = Router();
const DeleteController = new DeleteTeamController;

delete_routes.delete("/api/teams/:id", DeleteController.delete_team);

module.exports = delete_routes;
