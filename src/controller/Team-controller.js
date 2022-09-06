const { response, request } = require("express")
const { Team } = require("../../app/models")
const { Op } = require("sequelize");


class TeamController {
    get_all_teams = async (req, res) => {
        const teams = await Team.findAll()
        res.set({
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials" : true 
        });
        return res.json(teams)
    };

    get_team = async (req, res) => {
        
    const team = await Team.findAll({
        where: {
            name: {
                [Op.like]: `%${req.query.q}%`
            }
        }
    })
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials" : true 
    });
    return res.json(team)
    };

    get_team_by_id = async (req, res) => {
        const team = await Team.findByPk(req.params.id)

        res.json(team)
    }

    post_team = async (req, res) => {
        const team = await Team.create(req.body)
        res.json(team)
    }

    update_team = async (req, res) => {
        const team_updates = req.body
        const team = await Team.findByPk(req.params.id)

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

        await team.save()  

        return res.json(team)
    }

    delete_team = async (req, res) => {
        const team = await Team.destroy({
            where: {
                id: req.params.id 
            }
        })

        res.json(`Item deletado com sucesso`)
    }
 
}

module.exports = TeamController