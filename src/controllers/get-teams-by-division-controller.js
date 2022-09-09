const { response, request } = require("express");
const { Team } = require("../../app/models");
const { Op } = require("sequelize");

class GetTeamsByDivisionController {

        get_afc_teams_by_divison = async (req, res) => {
    
            const teams = await Team.findAll({
            where: {
                conference: "afc",

                division: {
                    [Op.like]: `%${req.query.division}%`
                }
            },
    
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

        get_nfc_teams_by_divison = async (req, res) => {
    
            const teams = await Team.findAll({
            where: {
                conference: "nfc",

                division: {
                    [Op.like]: `%${req.query.division}%`
                }
            },
    
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
}

module.exports = GetTeamsByDivisionController;