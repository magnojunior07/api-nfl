const { Router } = require("express");
const GetTeamController  = require("../controllers/get-team-controller");
const GetTeamsByConferenceController = require("../controllers/get-teams-by-conference-controller");
const GetTeamsByDivisionController = require("../controllers/get-teams-by-division-controller");
const { Team } = require("../../app/models");

const get_routes = Router();
const get_team_controller = new GetTeamController;
const get_teams_by_conference_controller = new GetTeamsByConferenceController;
const get_team_by_divison_controller = new GetTeamsByDivisionController;

get_routes.get("/", (req, res) => {
    res.json({info: `API is running`})
});

get_routes.get("/api/teams/all/", get_team_controller.get_all_teams);
get_routes.get("/api/teams/search/", get_team_controller.get_team);
get_routes.get("/api/teams/team/:id/", get_team_controller.get_team_by_id);

get_routes.get("/api/conferences/afc/", get_teams_by_conference_controller.get_afc_teams);
get_routes.get("/api/conferences/nfc/", get_teams_by_conference_controller.get_nfc_teams);

get_routes.get("/api/conferences/afc/divisions/", get_team_by_divison_controller.get_afc_teams_by_divison);
get_routes.get("/api/conferences/nfc/divisions/", get_team_by_divison_controller.get_nfc_teams_by_divison);

module.exports = get_routes;