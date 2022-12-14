const express = require('express');

const router = express.Router();

const MovieApiControler = require('../api/MovieAndPlaylistApi');


router.get('/', MovieApiControler.getMovieAndPlaylist);
router.get('/:movieAndPlaylistId', MovieApiControler.getMovieAndPlaylistById);
router.post('/', MovieApiControler.createMovieAndPlaylist);
router.put('/:movieAndPlaylistId', MovieApiControler.updateMovieAndPlaylist);
router.delete('/:movieAndPlaylistId', MovieApiControler.deleteMovieAndPlaylist);
