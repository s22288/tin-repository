const Sequalize = require('sequelize');


const PlaylistAndMovie = require('../../model/PlalistAndMovie');

exports.getPalylistAndMovies = () => {
    return PlaylistAndMovie.findAll();
}

exports.getPlaylistAndMovieById = (playlistAndMovieId) => {
    return PlaylistAndMovie.findByPk(playlistAndMovieId);
}

exports.createPlaylistAndMovie = (data) => {
    return PlaylistAndMovie.create({
        movie_id: data.movie_id,
        playlist_id: data.playlist_id,
        position: data.position,
        comment: data.comment
    });
}


exports.updatePlaylistAndMovie = (playlistAndMovieId, data) => {
    return PlaylistAndMovie.update(data, {where: {_id: playlistAndMovieId}});
}

exports.deletePlaylistAndMovie = (playlistAndMovieId) => {
    return PlaylistAndMovie.destroy({
        where: {movie_playlist_id: playlistAndMovieId}
    });
}

exports.deleteManyPlaylistAndMovie = (playlistAndMovieId) => {
    return PlaylistAndMovie.destroy({
        where: {playlist_id: playlistAndMovieId}
    });
}