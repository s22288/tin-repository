const express = require('express');

const router = express.Router();

const MovieApiControler = require('../api/PlaylistApi');

router.get('/', MovieApiControler.getPlaylists);
router.get('/:playlistId', MovieApiControler.getPlaylistById);
router.post('/', MovieApiControler.createPlaylist);
router.put('/:playlistId', MovieApiControler.updatePlaylist);
router.delete('/:playlistId', MovieApiControler.deletePlaylist);

module.exports = router;