const express = require('express')
const outcomeController = require('../controllers/outcome.controller')
const router = express.Router()

/**
 * @api
 * @apiName
 * @apiGroup
 */

router.post('/', outcomeController.add)
router.get('/', outcomeController.list)
router.get('/:id', outcomeController.find)

module.exports = router
