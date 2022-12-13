var express = require('express');
var router = express.Router();

const movieController = require('../controllers/playListController');

// GET /movies

router.get('/', movieController.showPlaylist);
router.get('/empty', movieController.showPlaylistEmpty);
router.get('/add', movieController.AddPlaylist);
router.get('/addWithErrors', movieController.AddPlaylistWithErrors);
router.get('/details/:playlistId', movieController.showPlaylistDetails);
router.get('/edit/:playlistId', movieController.showPlaylistEdit);
module.exports = router;