
const PlalistRepository = require('../repository/sequelize/PlaylistRepository');

exports.getPlaylists = (req, res, next) => {
    PlaylistRepository.getPlaylists()
        .then(playlists => {
            res.status(200).json(playlists);
        })
        .catch(err => {
            console.log(err);
        });
}

exports.getPlaylistById = (req, res, next) => {
    const playlistId = req.params.playlistId;
    PlaylistRepository.getPlaylistById(playlistId)
        .then(playlist => {
            if (!playlist) {
                res.status(404).json({
                    message: 'Playlist with id: ' + playlistId + ' not found'
                })
            } else {
                res.status(200).json(playlist);
            }
        });
}

exports.createPlaylist = (req, res, next) => {
    PlaylistRepository.createPlaylist(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        });
}

exports.updatePlaylist = (req, res, next) => {
    const playlistId = req.params.playlistId;
    PlaylistRepository.updatePlaylist(playlistId, req.body)
        .then(result => {
            res.status(200).json({message: 'Playlist updated!', playlist: result});
        });
}

exports.deletePlaylist = (req, res, next) => {
    const playlistId = req.params.playlistId;
    PlaylistRepository.deletePlaylist(playlistId)
        .then(result => {
            res.status(200).json({message: 'Removed Playlist', playlist: result});
        });
}


