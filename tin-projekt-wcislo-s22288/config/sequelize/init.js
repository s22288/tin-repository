const sequelize = require('./sequelize');
const Playlist = require('../../model/Playlist');
const Movie = require('../../model/Movie');
const PlaylistAndMovie = require('../../model/PlalistAndMovie');

module.exports = () => {
    Playlist.hasMany(PlaylistAndMovie, { as: 'playlistAndMovie', foreignKey: { name: 'playlist_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    PlaylistAndMovie.belongsTo(Playlist, { as: 'playlist', foreignKey: { name: 'playlist_id', allowNull: false } });
    Movie.hasMany(PlaylistAndMovie, { as: 'playlistAndMovie', foreignKey: { name: 'movie_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    PlaylistAndMovie.belongsTo(Movie, { as: 'movie', foreignKey: { name: 'movie_id', allowNull: false } });
    let allMovies, allPlaylists;
    return sequelize.sync({ force: true }).then(() => {
        return Movie.findAll();
    }).then(movies => {
        if (!movies || movies.length === 0) {
            return Movie.bulkCreate([
                { movie_name: 'The Shawshank Redemption', movie_length: 142, movie_rating: 9.3, movie_link: 'https://www.youtube.com/watch?v=6hB3S9bIaco', photo_link: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg' },
                { movie_name: 'The Godfather', movie_length: 175, movie_rating: 9.2, movie_link: 'https://www.youtube.com/watch?v=sY1S34973zA', photo_link: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg' },
                { movie_name: 'The Dark Knight', movie_length: 152, movie_rating: 9.0, movie_link: 'https://www.youtube.com/watch?v=EXeTwQWrcwY', photo_link: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg' },
            ]).then(() => {
                return Movie.findAll();
            });
        } else {
            return movies;
        }
    }).then(movies => {
        allMovies = movies;
        return Playlist.findAll();
    }).then(playlists => {
        if (!playlists || playlists.length === 0) {
            return Playlist.bulkCreate([
                { playlist_title: 'My favourite movies', playlist_length: 3, playlist_rating: 9.1, playlist_creation_date: new Date() },
                { playlist_title: 'My favourite movies 2', playlist_length: 3, playlist_rating: 9.1, playlist_creation_date: new Date() },
                { playlist_title: 'My favourite movies 3', playlist_length: 3, playlist_rating: 9.1, playlist_creation_date: new Date() },

            ]).then(() => {
                return Playlist.findAll();
            });
        } else {
            return playlists;
        }
    }).then(playlists => {
        allPlaylists = playlists;
        return PlaylistAndMovie.findAll();
    }
    ).then(playlistAndMovies => {
        if (!playlistAndMovies || playlistAndMovies.length === 0) {
            return PlaylistAndMovie.bulkCreate([
                { movie_id: 1, playlist_id: 1, position: 1, comment: 'comment 1' },

            ]);
        } else {
            return playlistAndMovies;
        }
    });
};
