const express = require('express');

const router = express.Router();

const MovieApiControler = require('../api/MovieApi');

router.get('/', MovieApiControler.getMovies);
router.get('/:movieId', MovieApiControler.getMovieById);
router.post('/', MovieApiControler.createMovie);
router.put('/:movieId', MovieApiControler.updateMovie);
router.delete('/:movieId', MovieApiControler.deleteMovie);
