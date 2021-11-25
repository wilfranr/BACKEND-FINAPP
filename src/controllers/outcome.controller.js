const Outcome = require('../models/outcome')

const outcomeController = {
    add: async function (req, res) { 
        try {
            const outcome = new Outcome(req.body)
            await outcome.save()
            res.status(200).json({"outcome":outcome})
        } catch (error) {
            res.status(500).json({'error': error})
        }
     },
     list: async function (req, res) {
        try {
            const list = await Outcome.find({user:req.body.user})
            res.status(200).json({'outcome':list})
        } catch (error) {
            res.status(500).json({'error':error})
            
        }
    },
    find: async function(req, res) {
        try {
            let outcome = await Outcome.find(req.params.id)
            res.status(200).json({'outcome':outcome})
        } catch (error) {
            res.status(500).json({'error':error})
            
        }
    }

}
module.exports = outcomeController