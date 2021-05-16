const Router = require('express');
const router = new Router();
const adminController = require('../controllers/admin.controller')
const {check} = require("express-validators")

router.post('/', adminController.login)


module.exports = router