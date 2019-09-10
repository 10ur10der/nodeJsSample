
var express = require('express');
var router = express.Router();
var articleAPI = require('../api/articleAPI');

router.get('/list',articleAPI.aritcleList);
router.post('/add',articleAPI.addProduct);
router.get('/detail/:id',articleAPI.detailProduct);

module.exports = router;