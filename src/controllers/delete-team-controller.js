const { response, request } = require("express");
const { Team } = require("../../app/models");

class DeleteTeamController {
    
    delete_team = async (req, res) => {
        const team = await Team.destroy({
            where: {
                id: req.params.id 
            }
        })

        res.json(`Item deletado com sucesso`);
    }

}

module.exports = DeleteTeamController;