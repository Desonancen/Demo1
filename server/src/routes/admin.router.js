const Router = require('express');
const router = new Router();
const adminController = require('../controllers/admin.controller')

router.post('/', adminController.login)


module.exports = router