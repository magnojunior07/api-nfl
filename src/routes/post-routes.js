const { Router } = require("express");
const  PostTeamController  = require("../controllers/post-team-controller");
const { Team } = require("../../app/models");

const post_routes = Router();
const PostController = new PostTeamController;

post_routes.post("/api/teams/", PostController.post_team);

module.exports = post_routes;
