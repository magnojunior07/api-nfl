const { response, request } = require("express");
const { Team } = require("../../app/models");
const { Op } = require("sequelize");


class GetTeamController {
    get_all_teams = async (req, res) => {
        const teams = await Team.findAll({
            order: [
                ["id", "ASC"]
            ] 
        })
        res.set({
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials" : true 
        });
        return res.json(teams);
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
    return res.json(team);
    };

    
    get_team_by_id = async (req, res) => {

        const team = await Team.findByPk(req.params.id);

        res.json(team);
    }

}

module.exports = GetTeamController;