var express = require('express');
var router = express.Router();

const movieController = require('../controllers/movieController');

// GET /movies
router.get('/', movieController.showMovieList);

module.exports = router;
