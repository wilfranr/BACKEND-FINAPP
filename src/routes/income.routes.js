const express = require('express')
const router = express.Router()
const incomeController = require('../controllers/income.controller');
const { check } = require('express-validator');
const Auth = require('../middlewares/authentication')

/**
 * @api
 * @apiName
 * @apiGroup
 */

router.post('/', Auth,incomeController.add)
router.get('/',Auth, incomeController.list)
router.get('/:id',incomeController.find)
    
module.exports = router

