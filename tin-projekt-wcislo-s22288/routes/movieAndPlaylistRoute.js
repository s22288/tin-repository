var express = require('express');
var router = express.Router();

const movieController = require('../controllers/movieAndPlaylistController');

// GET /movies
router.get('/', movieController.showMovieAndPlaylist);
router.get('/empty', movieController.showMovieAndPlaylistEmpty);
router.get('/add', movieController.AddMovieAndPlaylist);
router.get('/addWithErrors', movieController.AddMovieAndPlaylistWithErrors);
router.get('/details/:mandpId', movieController.showMovieAndPlaylistDetails);
router.get('/edit/:mandpId', movieController.showMovieAndPlaylistEdit);

module.exports = router;