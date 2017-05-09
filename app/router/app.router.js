var express = require('express');
var router = express.Router();
var user = require('../controllers/user.controller');
router.get('/usuario', user.get);
router.post('/usuario', user.create);
router.put('/usuario', user.update);
router.delete('/usuario', user.delete);

module.exports = router;
