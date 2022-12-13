var express = require('express');
var router = express.Router();

const movieController = require('../controllers/movieController');

// GET /movies
router.get('/', movieController.showMovieList);
router.get('/empty', movieController.showMovieListEmpty);
router.get('/add', movieController.AddMovie);
router.get('/addWithErrors', movieController.AddMovieWithErrors);
router.get('/details/:movieId', movieController.showMovieDetails);
router.get('/edit/:movieId', movieController.showMovieEdit);

module.exports = router;
