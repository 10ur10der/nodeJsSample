
var express = require('express');
var router = express.Router();
var articleAPI = require('../api/articleAPI');

router.get('/list',articleAPI.aritcleList);
router.post('/add',articleAPI.addArticle);
router.get('/detail/:id',articleAPI.detailArticle);

module.exports = router;