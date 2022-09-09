const { response, request } = require("express");
const { Team } = require("../../app/models");

class PostTeamController {
    
    post_team = async (req, res) => {
        const team = req.body;
        
        if(team.name == await Team.findAll({
            where: {
                name: team.name
            }
        })) {
            return res.json({info: "This team already exists"});
        } else {
            const created_team = await Team.create(req.body)
            res.json(created_team);
        }
            
    }

}

module.exports = PostTeamController;