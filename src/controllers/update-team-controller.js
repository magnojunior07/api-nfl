const { response, request } = require("express");
const { Team } = require("../../app/models");

class UpdateTeamController {
    
    update_team = async (req, res) => {
        const team_updates = req.body;
        const team = await Team.findByPk(req.params.id);

        team.id !== team_updates.id ? team.set({
            id: team_updates.id
        })  : team.id

        team.name !== team_updates.name ? team.set({
            name: team_updates.name
        })  : team.name

        team.division !== team_updates.division ? team.set({
            division: team_updates.division
        })  : team.division

        team.conference !== team_updates.conference ? team.set({
            conference: team_updates.conference
        })  : team.conference

        team.super_bowls !== team_updates.super_bowls ? team.set({
            super_bowls: team_updates.super_bowls
        })  : team.super_bowls

        team.logo !== team_updates.logo ? team.set({
            logo: team_updates.logo
        })  : team.logo

        await team.save();

        return res.json(team);
    }

}

module.exports = UpdateTeamController;