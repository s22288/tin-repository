var express = require('express');
var router = express.Router();

const movieController = require('../controllers/movieController');

// GET /movies
router.get('/', movieController.showMovieList);
router.get('/empty', movieController.showMovieListEmpty);
router.get('/add', movieController.AddMovie);
module.exports = router;
