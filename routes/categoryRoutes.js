
var express = require('express');
var router = express.Router();
var articleAPI = require('../api/categoryAPI');

router.get('/list',articleAPI.categoryList);
router.post('/add',articleAPI.addCategory);
router.get('/detail/:id',articleAPI.detailCategory);

module.exports = router;