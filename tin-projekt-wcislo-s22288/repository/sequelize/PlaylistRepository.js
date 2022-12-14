const Sequalize = require('sequelize');
const Playlist = require('../../model/Playlist');

exports.getPlaylists = () => {
    return Playlist.findAll();
}

exports.getPlaylistById = (playlistId) => {
    return Playlist.findByPk(playlistId);
}

exports.createPlaylist = (data) => {
    return Playlist.create({
        playlist_name: data.playlist_name,
        playlist_description: data.playlist_description,
        playlist_length: data.playlist_length,
        playlist_rating: data.playlist_rating
    });
}

exports.updatePlaylist = (playlistId, data) => {
    return Playlist.update(data, {where: {_id: playlistId}});
}


exports.deletePlaylist = (playlistId) => {
    return Playlist.destroy({
        where: {playlist_id: playlistId}
    });
}