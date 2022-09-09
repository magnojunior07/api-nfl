const { response, request } = require("express");
const { Team } = require("../../app/models");
const { Op } = require("sequelize");

class GetTeamsByConferenceController {

        get_afc_teams = async (req, res) => {
    
            const teams = await Team.findAll({
            where: {
                conference: {
                    [Op.like]: `%afc%`
                }
            },
    
            order: [
                ["division", "ASC"]
            ]
        })
    
        res.set({
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials" : true 
        });
        return res.json(teams);
        };
    
        get_nfc_teams = async (req, res) => {
    
            const teams = await Team.findAll({
            where: {
                conference: {
                    [Op.like]: `%nfc%`
                }
            },
            
            order: [
                ["division", "ASC"]
            ]
        })
    
        res.set({
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials" : true 
        });
        return res.json(teams);
        };
       
}

module.exports = GetTeamsByConferenceController;