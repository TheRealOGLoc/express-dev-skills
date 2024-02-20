var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

/* GET all skills */
router.get('/', skillsCtrl.index);

// GET /skills:name
router.get('/:name', skillsCtrl.show);

module.exports = router;
