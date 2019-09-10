var express = require('express');
var router = express.Router();
var aboutmeAPI = require('../api/aboutmeAPI');

router.get('/detail',aboutmeAPI.aboutmeDetail);
router.post('/add',aboutmeAPI.addAboutme);
module.exports = router;